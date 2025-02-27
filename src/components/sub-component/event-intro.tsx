import React from "react";
import CardwithImage from "./card-with-image";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

interface EventIntroProps {
  imageUrl: string;
  title: string;
  registrations: number;
  pricepool: number;
  description: string;
  time: string;
  venue: string;
}

const EventIntro: React.FC<EventIntroProps> = ({
  imageUrl,
  title,
  registrations,
  pricepool,
  description,
  time,
  venue,
}) => {
  return (
    <div className="">
      <div className="relative min-h-screen flex items-center justify-center bg-transparent">
        <div className="absolute left-14 p-4 space-y-4 top-28 z-10 text-white text-2xl text-left mb-6">
          <p className="flex items-center">
            <span className="mr-2 text-yellow-400">
              <GoClockFill />
            </span>{" "}
            {time}
          </p>
          <p className=" flex items-center">
            <span className="mr-2 text-yellow-400">
              <FaLocationDot />
            </span>{" "}
            {venue}
          </p>
        </div>

        {/* Main Content (Ensuring it's above the background) */}

        <div className="p-4 pt-48  rounded-lg shadow-lg bg-transparent relative z-10 flex flex-col items-center text-white">
          <CardwithImage imageUrl={imageUrl} title={title} scale={110} />
          <div className="flex mt-10 justify-center text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-4xl font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Registrations
            <div className="text-center px-4 text-white text-4xl font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              {registrations}
            </div>
          </div>

          <div className="text-center mt-5 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-4xl mx-2 font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              Prize Pool{" "}
            </span>
            <span className="text-white text-4xl font-normal font-['Inder'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              Rs.{pricepool}
            </span>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center">
        <div className="w-2/3 text-center text-white text-2xl font-medium font-['Inter'] tracking-[3.75px]">
          {description}
          <br />
        </div>
      </section>
    </div>
  );
};

export default EventIntro;
