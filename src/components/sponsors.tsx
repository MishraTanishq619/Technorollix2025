import React from "react";
import SponsorMarquee from "./sponser-marquee";

const Sponsors = () => {
  return (
    <div className="text-white flex flex-col text-center items-center my-32 h-auto px-4 md:px-0">
      {/* Title */}
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        SPONSORS
      </h2>

      {/* Sponsor Logo */}
      <SponsorMarquee />
    </div>
  );
};

export default Sponsors;
