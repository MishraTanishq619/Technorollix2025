import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the middleware function
export function middleware(request: NextRequest) {
	const token = request.cookies.get("auth-token");

	console.log("Middleware running");
	// Check if the token exists
	if (!token) {
		// Redirect to the login page if the token is not found
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	// Continue to the requested page if the token is found
	return NextResponse.next();
}

// Configure the middleware to run on specific routes
export const config = {
	matcher: [
		"/dashboard/:path*",
		"/admin/:path*",
		"/events-selection/:path*",
		"/team-details/:path*",
	],
};
