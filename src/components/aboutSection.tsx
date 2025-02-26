import React from "react";
import ButtonLanding from "./sub-component/button-landing";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="text-white flex flex-col text-center items-center mt-20 min-h-screen">
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        ABOUT
      </h2>
      <p className="w-[943px] pt-10 text-xl uppercase">
        A fusion of technology, culture, and fun-filled activities, crafted to
        inspire and engage every participant!
      </p>

      {/* First Event */}
      <div className="flex mt-20">
        <div className="mr-20">
          <img src="./Rectangle 243.png" alt="" />
        </div>

        <div className="text-left">
          <h5 className="text-5xl font-medium">TECHNOROLLIX 2025</h5>
          <p className="text-xl font-medium tracking-[3.4px] text-[#CFCFCF] mt-16 w-[578px]">
            Technorollix is Central India's biggest techno-cultural
            extravaganza, bringing together innovation, creativity, and
            entertainment on a grand scale. With a diverse mix of technical
            competitions, cultural performances, and engaging workshops, it’s a
            platform where technology meets artistry. Join us for an
            electrifying experience that pushes boundaries and celebrates the
            spirit of innovation! <b className="text-[#FF9D00]">Read more</b>
          </p>
        </div>
      </div>

      {/* Second Event */}
      <div className="flex mt-20">
        <div className="text-left">
          <h5 className="text-5xl font-medium">TECHNOROLLIX 2025</h5>
          <p className="text-xl font-medium tracking-[3.4px] text-[#CFCFCF] mt-16 w-[578px]">
            Technorollix is Central India's biggest techno-cultural
            extravaganza, bringing together innovation, creativity, and
            entertainment on a grand scale. With a diverse mix of technical
            competitions, cultural performances, and engaging workshops, it’s a
            platform where technology meets artistry. Join us for an
            electrifying experience that pushes boundaries and celebrates the
            spirit of innovation! <b className="text-[#FF9D00]">Read more</b>
          </p>
        </div>

        <div className="ml-20">
          <img src="./Rectangle 243.png" alt="" />
        </div>
        
      </div>
      <ButtonLanding label="Know More" />
    </div>
  );
};

export default AboutSection;
