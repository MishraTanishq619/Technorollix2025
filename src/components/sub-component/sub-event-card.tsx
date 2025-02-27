import React from "react";

interface SubEventCardProps {
  imageUrl: string | null;
  title: string;
  description: string;
}

const SubEventCard: React.FC<SubEventCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="w-96 h-[400px] bg-[#5D2019] border-4 border-#FBDA7A rounded-lg shadow-md flex flex-col justify-center">
      {imageUrl && (
      <img src={imageUrl} alt="subEvent" className="h-20 w-20 self-center" />
      )}
      <div className="text-center text-[#ffad3c] text-3xl font-medium font-['Poppins'] uppercase tracking-[4.80px] [text-shadow:_0px_7px_10px_rgb(0_0_0_/_0.78)]">
      {title}
      </div>
      <div className="text-justify text-white text-sm p-6 font-medium font-['Poppins'] overflow-hidden overflow-y-auto custom-scrollbar" style={{ maxHeight: '6.6rem', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
      {description}
      </div>
    </div>
  );
};

export default SubEventCard;
