"use client"; // Needed for Next.js 13+ App Router if using useState

import { useState } from "react";
import Link from "next/link";
import LoginButton from "./sub-component/login-button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <img src="/opjulogo.png" alt="opju" className="h-12"/>

          {/* Desktop Menu */}
          <div className="hidden text-white md:flex space-x-36">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <Link href="/events" className="hover:text-orange-500">Events</Link>
            <Link href="/about" className="hover:text-orange-500">About</Link>
            <Link href="/schedule" className="hover:text-orange-500">Schedule</Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link href="/login">
              <LoginButton />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-2">
          <Link href="/" className="block py-2 px-4">Home</Link>
          <Link href="/events" className="block py-2 px-4">Events</Link>
          <Link href="/about" className="block py-2 px-4">About</Link>
          <Link href="/schedule" className="block py-2 px-4">Schedule</Link>
          <Link href="/login">
            <button className="w-full bg-white text-blue-600 px-4 py-2 mt-2 rounded-lg text-center">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
