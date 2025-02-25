import React from "react";
import Image from "next/image";

interface CardwithImageProps {
  imageUrl: string;
  title: string;
  scale?: number;
}

const CardwithImage: React.FC<CardwithImageProps> = ({ imageUrl, title ,scale=90}) => {
  console.log(imageUrl);
  return (
    <div
      className="h-96 w-80 flex flex-col items-center"
      style={{ background: "url(/card.png)", backgroundSize: "cover" ,transform:`scale(${scale/100})` }}
    >
      <img
        src={imageUrl}
        alt="inside image"
        className="cover mt-[53px] rounded-xl pl-1"
      />
      <h5 className=" w-[200.21px] h-[54.70px] text-center text-[#ffad3c] text-[40px] font-bold font-['Inria Serif'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">{title}</h5>
    </div>
  );
};

export default CardwithImage;
