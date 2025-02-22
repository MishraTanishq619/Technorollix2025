import React from "react";
import UserDropdown from "../user-dropdown";

const LoginButton = () => {
  return (
    <button className="bg-gradient-to-r from-[#ff2020] via-[#AA0406] to-[#8F0c11] flex items-center justify-center border-[3px] border-orange-300 rounded-full px-6 hover:scale-105 text-yellow-400 font-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 pr-2"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
      <UserDropdown />
    </button>
  );
};

export default LoginButton;