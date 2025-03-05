import React from "react";
import Image from "next/image";
import SponsorMarquee from "./sponser-marquee";

const Sponsors = () => {
  return (
    <div className="text-white flex flex-col text-center items-center my-32 h-auto px-4 md:px-0">
      {/* Title */}
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        SPONSORS
      </h2>

      {/* Sponsor Logo */}
<<<<<<< HEAD
      <SponsorMarquee />
=======
      <div className="flex gap-10 flex-wrap justify-center items-center mt-10">
        <div className="relative w-full max-w-[350px] h-auto">
          <Image
            src="/jindalnewlogo.png"
            alt="Jindal Logo"
            width={350}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
>>>>>>> 55a9089a5990b886e00157173132ca3860111bd3
    </div>
  );
};

export default Sponsors;
