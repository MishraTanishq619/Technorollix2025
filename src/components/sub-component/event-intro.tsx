import React from "react";
import CardwithImage from "./card-with-image";
import Image from "next/image";

interface EventIntroProps {
  imageUrl: string;
  title: string;
  registrations: number;
  pricepool: number;
  description: string;
}

const EventIntro: React.FC<EventIntroProps> = ({ imageUrl, title, registrations, pricepool, description }) => {
  return (
    <div className="">
      <section>
        <div className="relative min-h-screen flex items-center justify-center bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/decor.svg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-100"
            />
          </div>

          <div className="absolute left-32 p-4 space-y-4 top-40 z-10 text-white text-4xl text-left mb-6">
              <p className="flex items-center">
                <span className="mr-2">🕘</span> 8:00 a.m.
              </p>
              <p className=" flex items-center">
                <span className="mr-2">📍</span> MP Hall
              </p>
            </div>

          {/* Decorative SVG (Positioning it absolutely) */}
          <div className="absolute top-0 right-0 w-1/4 h-auto">
            <Image
              src="/vector.svg"
              alt="Decoration"
              width={500}
              height={500}
              className="opacity-100"
            />
          </div>

          {/* Main Content (Ensuring it's above the background) */}
          <div className="relative z-10 flex flex-col items-center text-white">
            {/* Event Details */}
            {/* <div className="text-left mb-6">
              <p className="text-lg flex items-center">
                <span className="mr-2">🕘</span> 8:00 a.m.
              </p>
              <p className="text-lg flex items-center">
                <span className="mr-2">📍</span> MP Hall
              </p>
            </div> */}

            {/* Card Component (Box Wrapper) */}
            <div className="p-4 pt-64  rounded-lg shadow-lg bg-transparent">
              <CardwithImage imageUrl="./Rectangle 197.png" title="Antaragni" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
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
      </section>
      
    </div>
  );
};

export default EventIntro;
