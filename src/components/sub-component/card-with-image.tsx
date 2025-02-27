import React from "react";
import Image from "next/image";

interface CardwithImageProps {
  imageUrl: string;
  title: string;
  scale?: number;
}

const CardwithImage: React.FC<CardwithImageProps> = ({ imageUrl, title, scale = 90 }) => {
  return (
    <div
      className="h-96 w-80 flex flex-col items-center"
      style={{ background: "url(/card.png)", backgroundSize: "cover", transform: `scale(${scale / 100})` }}
    >
      <div className="relative mt-[53px] w-full h-[200px]">
        <Image
          src={imageUrl}
          width={235}
          height={235}
          alt="inside image"
          layout="fit"
          objectFit="cover"
          className="rounded-xl pl-1 mx-auto"
        />
      </div>
      <h5 className="w-[200.21px] h-[54.70px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#ffd23d] via-[#f7e7ac] to-[#A6660D] text-4xl font-bold font-['Inria Serif']">
        {title}
      </h5>
    </div>
  );
};

export default CardwithImage;
