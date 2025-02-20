import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
// Task : use this function to create a middleware for protected routes.
export function isUserAuthenticated(): boolean {
	const token = Cookies.get("auth-token");
	if (!token) {
		return false;
	}

	try {
		const decoded = jwt.verify(
			token,
			process.env.NEXT_PUBLIC_JWT_SECRET || "your_jwt_secret"
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

export function getAuthToken(): string | null {
	return Cookies.get("auth-token") || null;
}

// Should be done at client-side only : localStorage is for client-side storage || Now, we can use Cookies for this purpose.
export const logout = async (): Promise<void> => {
	Cookies.remove("auth-token");
};
