import React from "react";
import Image from "next/image";

interface ManagerCardProps {
  imageUrl: string;
  name: string;
  contact: string | number; // Supports both string and number for flexibility
}

const ManagerCard: React.FC<ManagerCardProps> = ({ imageUrl, name, contact }) => {
  return (
    <div className="w-48 sm:w-56 md:w-64 lg:w-72 h-72 md:h-80 bg-gradient-to-b from-[#FBDA7A] to-[#7C5114] 
                    text-white rounded-2xl shadow-lg overflow-hidden m-2 
                    transition-transform duration-300 hover:scale-105">
      
      {/* Manager Image */}
      <div className="relative w-full h-40 md:h-44 border-[3px] border-yellow-200 rounded-t-2xl">
        <Image
          src={imageUrl}
          alt={`${name}'s image`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-t-2xl"
          priority // Optimizes loading for better performance
        />
      </div>

      {/* Manager Details */}
      <div className="p-3 md:p-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-left">{name}</h2>
        <div className="text-gray-200 text-left mt-2">
          <p className="text-sm sm:text-base md:text-lg font-medium">CONTACT:</p>
          <p className="text-md sm:text-lg md:text-xl font-semibold tracking-wide">+91 {contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerCard;
