import React from "react";

const ButtonLanding = ({ label, link }: { label: string; link: string }) => {
  return (
    <div className="flex justify-center mt-12">
      <a
        href={link}
        className="w-full px-16 max-w-xs sm:max-w-md lg:max-w-lg h-20 rounded-full bg-gradient-to-r from-[#ff2020] via-[#AA0406] to-[#8F0c11] border-4 border-[#ffc362] flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-105 focus:ring-4 focus:ring-[#ffc362]"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl sm:text-3xl md:text-4xl font-medium font-['Poppins'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          {label}
        </span>
      </a>
    </div>
  );
};

export default ButtonLanding;
