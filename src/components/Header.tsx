"use client";
import Link from "next/link";
import UserDropdown from "@/components/user-dropdown";

const Header = () => {

  

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
          {<UserDropdown />}
        </nav>
      </div>
    </header>
  );
};

export default Header;