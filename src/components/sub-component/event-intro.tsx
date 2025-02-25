import React from "react";
import CardwithImage from "./card-with-image";

interface EventIntroProps {
  imageUrl: string;
  title: string;
  registrations: number;
  pricepool: number;
  description: string;
}

const EventIntro: React.FC<EventIntroProps> = ({ imageUrl, title, registrations, pricepool, description }) => {
  return (
    <div className="flex flex-col mt-10 items-center justify-center  font-medium text-center min-h-screen">
      <CardwithImage
        imageUrl={imageUrl}
        title={title}
        scale={90}
      />
      <div className="flex justify-center text-center text-[#ffad3c] text-4xl font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        Registrations
        <div className="text-center px-4 text-white text-4xl font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          {registrations}
        </div>
      </div>

      <div className="text-center mt-5 mb-4">
        <span className="text-[#ffad3c] text-4xl mx-2 font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          Prize Pool{" "}
        </span>
        <span className="text-white text-4xl font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          Rs.{pricepool}
        </span>
      </div>
      <div className="w-2/3 text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px]">
        {description}
        <br />
      </div>
    </div>
  );
};

export default EventIntro;
