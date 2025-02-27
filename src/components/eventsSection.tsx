import React from "react";
import ButtonLanding from "./sub-component/button-landing";
import CardwithImage from "./sub-component/card-with-image";
import Link from "next/link";

const EventSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center font-medium text-center min-h-screen">
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        EVENTS
      </h2>
      <p className="mt-10 w-[943px] h-[78px] text-center text-white text-xl font-medium font-['Poppins'] uppercase">
        Our fest offers a diverse range of technical and non-technical events,
        ensuring there's something for everyone. From innovative tech showcases
        to fun and engaging activities, we bring together creativity, skills,
        and excitement for an unforgettable experience!
      </p>
<<<<<<< HEAD
      <div className="flex mt-28 w-full justify-evenly">
=======
      <div className="flex mt-28 w-full justify-around">
>>>>>>> 3fb772891f376b65ee377a8d3aef0472a6c31480
        <CardwithImage imageUrl="/techno-events-logo/antaragini.png" title="Antaragni" />
        <CardwithImage imageUrl="/techno-events-logo/techlab.png" title="Tech-Lab" scale={100} />
        <CardwithImage imageUrl="/techno-events-logo/kalakriti.png" title="Kalakriti" />
      </div>

      <Link href="/events">
        <ButtonLanding label="Explore More" />
      </Link>
    </div>
  );
};

export default EventSection;
