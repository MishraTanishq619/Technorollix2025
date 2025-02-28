import React from "react";
import Image from "next/image";

interface ManagerCardProps {
  imageUrl: string;
  name: string;
  contact: number;
}

const ManagerCard: React.FC<ManagerCardProps> = ({ imageUrl, name, contact }) => {
  return (
    <div className="w-48 h-72 bg-gradient-to-b from-[#FBDA7A] to-[#7C5114] text-white rounded-2xl shadow-lg overflow-hidden m-2">
      {/* Manager Image */}
      <div className="relative w-full h-40 border-[3px] border-yellow-200 rounded-t-2xl">
        <Image
          src={imageUrl}
          alt={`${name}'s image`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-t-2xl"
        />
      </div>

      {/* Manager Details */}
      <div className="p-2 ">
        <h2 className="text-xl font-semibold text-left">{name}</h2>
        <div className="text-gray-300 text-left">
          <p className="mt-1">CONTACT :</p>
          <p className="text-lg items-center justify-center">+91 {contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerCard;
