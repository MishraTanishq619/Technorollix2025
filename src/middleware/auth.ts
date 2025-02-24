// src/middleware/auth.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid or expired token:", error);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard"], // Add routes that need protection
};
