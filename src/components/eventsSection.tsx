import React from "react";
import ButtonLanding from "./sub-component/button-landing";
import Link from "next/link";
import Image from "next/image";

const EventSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center font-medium text-center min-h-screen px-4 md:px-0">
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        EVENTS
      </h2>
      <p className="mt-10 w-full max-w-[943px] text-center text-white text-xl font-medium font-['Poppins'] ">
        Our fest offers a diverse range of technical and non-technical events,
        ensuring there&apos;s something for everyone. From innovative tech showcases
        to fun and engaging activities, we bring together creativity, skills,
        and excitement for an unforgettable experience!
      </p>
      <div className="flex flex-wrap my-20 w-full justify-center gap-8">
        <div className="h-96 w-full sm:w-1/4 md:w-1/3 lg:w-1/4 flex items-center justify-center">
          <Image
            src="/techno-events-logo/codigo.png"
            width={300}
            height={350}
            alt="inside image"
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="h-96 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex items-center justify-center">
          <Image
            src="/techno-events-logo/techlab.png"
            width={400}
            height={450}
            alt="inside image"
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="h-96 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center">
          <Image
            src="/techno-events-logo/masterchef.png"
            width={300}
            height={350}
            alt="inside image"
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>

      <Link href="/events">
        <ButtonLanding label="Explore More" link="/events" />
      </Link>
    </div>
  );
};

export default EventSection;