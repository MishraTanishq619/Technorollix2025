"use client"; // Needed for Next.js 13+ App Router if using useState

import { useState } from "react";
import Link from "next/link";
import UserDropdown from "./user-dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <img src="/opjulogo.png" alt="opju" className="h-[72px] w-[157px]" />

          {/* Desktop Menu */}
          <div className="text-white text-2xl flex space-x-20">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <Link href="/events" className="hover:text-orange-500">
              Events
            </Link>
            <Link href="/about" className="hover:text-orange-500">
              About
            </Link>
            <Link href="/schedule" className="hover:text-orange-500">
              Schedule
            </Link>
            <Link href="/junoon" className="hover:text-orange-500">
              Junoon
            </Link>
          </div>

          {/* Login Button */}
            <UserDropdown /> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
