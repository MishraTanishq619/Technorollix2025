import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt from "jsonwebtoken";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
// Task : use this function to create a middleware for protected routes.
export function isUserAuthenticated(): boolean {
	const token = localStorage.getItem("auth-token");
	if (!token) {
		return false;
	}

	try {
		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET || "your_jwt_secret"
		);
		return !!decoded;
	} catch (error) {
		if (error instanceof Error && error.name === "TokenExpiredError") {
			console.error("Token expired:", error);
		} else {
			console.error("Invalid token:", error);
		}
		return false;
	}
}
