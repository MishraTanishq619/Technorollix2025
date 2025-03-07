import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the middleware function
export function middleware(request: NextRequest) {
	const token = request.cookies.get("auth-token");
	const { pathname } = request.nextUrl;

	// If user is NOT logged in and accessing protected routes
	if (!token) {
		if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin") || pathname.startsWith("/events-selection") || pathname.startsWith("/team-details")) {
			return NextResponse.redirect(new URL("/auth/login", request.url));
		}
	}

	// If user IS logged in and tries to access login or signup, redirect to dashboard
	if (token && (pathname === "/auth/login" || pathname === "/auth/signup")) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	// Continue to the requested page
	return NextResponse.next();
}

// Configure the middleware to run on specific routes
export const config = {
	matcher: [
		"/dashboard/:path*",
		"/admin/:path*",
		"/events-selection/:path*",
		"/team-details/:path*",
		"/auth/login",
		"/auth/signup",
	],
};