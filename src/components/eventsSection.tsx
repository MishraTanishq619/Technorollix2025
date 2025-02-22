import React from "react";
import ButtonLanding from "./sub-component/button-landing";

const EventSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center  font-medium text-center min-h-screen">
      <h2 className='text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]'>EVENTS</h2>
      <p className="w-[943px] pt-10 text-xl uppercase">
      Our fest offers a diverse range of technical and non-technical events, ensuring there's something for everyone. From innovative tech showcases to fun and engaging activities, we bring together creativity, skills, and excitement for an unforgettable experience!
      </p>
      <div className="flex mt-20">
        <img src="./Rectangle 197.png" alt="" />
        <img src="./Rectangle 197.png" alt="" />
        <img src="./Rectangle 197.png" alt="" />
      </div>
      <ButtonLanding label="Explore More" />
    </div>
  );
};

export default EventSection;
