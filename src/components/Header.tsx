"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { logout, isUserAuthenticated } from "@/lib/utils";

const Header = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(isUserAuthenticated());
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">Technorollix2025</Link>
        </div>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {isAuthenticated ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button onClick={handleLogout} className="ml-4">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;