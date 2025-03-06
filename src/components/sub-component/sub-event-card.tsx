import React from "react";
import { IconType } from "react-icons";

interface SubEventCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

const SubEventCard: React.FC<SubEventCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="w-96 h-[400px] bg-[#5D2019] border-4 rounded-lg shadow-md flex flex-col justify-center">
      <div className="self-center pb-4">
        <Icon className="h-20 w-20 text-[#ffad3c]" />
      </div>
      <div className="text-center text-wrap px-5 text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-3xl font-medium font-['Poppins'] uppercase tracking-[3.75px]">
        {title}
      </div>
      <div
        className="text-justify text-white text-lg p-6 font-medium font-['Poppins'] overflow-hidden overflow-y-auto custom-scrollbar"
        style={{
          maxHeight: "7.5rem",
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default SubEventCard;
