"use client"; // Needed for Next.js 13+ App Router if using useState

import { useState } from "react";
import Link from "next/link";
import UserDropdown from "./user-dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-0 w-full z-20 bg-transparent px-24 flex justify-between h-20 items-center">
        {/* Logo */}
        <img src="/opjulogo.png" alt="opju" className="h-[72px] w-[157px]" />

        {/* Desktop Menu */}
        <div className="flex items-center space-x-10 bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[rgba(153,153,153,0)] backdrop-blur-md rounded-full p-2 pl-10 shadow-2xl">
          <div className="text-white text-2xl flex space-x-10">
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
            <Link href="/aimbiation" className="hover:text-orange-500">
              aiMBiAtion
            </Link>
            <Link href="/junoon" className="hover:text-orange-500">
              Junoon
            </Link>
          </div>

          {/* Login Button */}
          <UserDropdown />
        </div>
      </nav>
  );
};

export default Navbar;
