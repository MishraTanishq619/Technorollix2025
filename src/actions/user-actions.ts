"use server";
import { connectToDatabase } from "@/lib/mongodb";
import { IUser, User } from "@/models/user.model";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface UserData {
	email: string;
	password: string;
	fullName: string;
	course: string;
	branch: string;
	enrollmentNumber: string;
	mobileNumber: string;
}

export const userSignup = async (userData: UserData): Promise<IUser> => {
	await connectToDatabase();

	const {
		email,
		password,
		fullName,
		course,
		branch,
		enrollmentNumber,
		mobileNumber,
	} = userData;

	// Check if user already exists with email
	const existingUser = await User.findOne({ email });
	if (existingUser) {
		throw new Error("User already exists with this email");
	}

	// Create a new user
	const newUser = new User({
		email,
		password,
		fullName,
		course,
		branch,
		enrollmentNumber,
		mobileNumber,
	});

	await newUser.save();

	return JSON.parse(JSON.stringify(newUser));
};

interface LoginData {
	email: string;
	password: string;
}

export const userLogin = async (
	loginData: LoginData
): Promise<{ user: IUser; token: string }> => {
	await connectToDatabase();

	const { email, password } = loginData;

	// Check if user exists with email
	const existingUser = await User.findOne({ email });
	if (!existingUser) {
		throw new Error("User does not exist with this email");
	}

	// Check if password matches
	if (existingUser.password !== password) {
		throw new Error("Invalid password");
	}

	// Generate JWT token
	const token = jwt.sign(
		{ userId: existingUser._id, email: existingUser.email },
		process.env.JWT_SECRET || "your_jwt_secret",
		{ expiresIn: "1h" }
	);

	return JSON.parse(
		JSON.stringify({
			user: existingUser,
			token,
		})
	);
};

export const getUserFromAuth = async (token: string): Promise<IUser | null> => {
	await connectToDatabase();

	if (!token) {
		throw new Error("No auth token provided");
	}

	try {
		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET || "your_jwt_secret"
		) as { userId: string; email: string };
		const userId = decoded.userId;

		const user = await User.findById(userId);
		if (!user) {
			throw new Error("User not found");
		}

		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		console.error("Error verifying token or finding user:", error);
		throw new Error("Invalid or expired token");
	}
};

// for server-side
export async function getUser() {
	await connectToDatabase();

	const authToken = (await cookies()).get("auth-token")?.value;
	if (!authToken) return null;

	try {
		const decoded = jwt.verify(
			authToken,
			process.env.JWT_SECRET || "your_jwt_secret"
		) as { userId: string; email: string };
		const user = await User.findOne({
			_id: decoded.userId,
			email: decoded.email,
		});

		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		console.error("Error verifying token or finding user:", error);
		return null; // Invalid token
	}
}
