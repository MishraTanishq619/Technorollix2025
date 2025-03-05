import React from "react";
import Image from "next/image";

const technicalEvents = [
  {
    imageUrl: "/techno-events-logo/codigo.png",
    link: "/events/codigo",
  },
  {
    imageUrl: "/techno-events-logo/techlab.png",
    link: "/events/techlab",
  },
  {
    imageUrl: "/techno-events-logo/robovation.png",
    link: "/events/robovation",
  },
  {
    imageUrl: "/techno-events-logo/hackathon.png",
    link: "/events/hackathon",
  },
  {
    imageUrl: "/techno-events-logo/aerodrone.png",
    link: "/events/aerodrone",
  }
  ,
  {
    imageUrl: "/techno-events-logo/ideathon.png",
    link: "/events/ideathon",
  },
];
const nonTechnicalEvents = [
  {
    imageUrl: "/techno-events-logo/kalakriti.png",
    link: "/events/kalakriti",
  },
  {
    imageUrl: "/techno-events-logo/spotlightsaga.png",
    link: "/events/spotlight-saga",
  },
  {
    imageUrl: "/techno-events-logo/amongus.png",
    link: "/events/among-us",
  }
  ,
  {
    imageUrl: "/techno-events-logo/masterchef.png",
    link: "/events/master_chef",
  },
  {
    imageUrl: "/techno-events-logo/roadies.png",
    link: "/events/roadies",
  },
  {
    imageUrl: "/techno-events-logo/antaragni.png",
    link: "/events/antaragni",
  },
  {
    imageUrl: "/techno-events-logo/gamefusion.png",
    link: "/events/game-fusion",
  }
  ,
];

const aimbiationEvents = [
  {
    imageUrl: "/aimbiation-events-logo/bizesawaal.png",
    link: "/events/bizesawaal",
  },
  {
    imageUrl: "/aimbiation-events-logo/nexgenstartup.png",
    link: "/events//nexgenstartup",
  },
  {
    imageUrl: "/aimbiation-events-logo/adomania.png",
    link: "/events/adomania",
  },
  {
    imageUrl: "/aimbiation-events-logo/voiceofyouth.png",
    link: "/events/voiceofyouth",
  },
  {
    imageUrl: "/aimbiation-events-logo/reelandroles.png",
    link: "/events/Reelsandroles",
  },
  {
    imageUrl: "/aimbiation-events-logo/bullvsbear.png",
    link: "/events/bullvsbear",
  },
  {
    imageUrl: "/aimbiation-events-logo/riwayat.png",
    link: "/events/riwayat",
  },
  {
    imageUrl: "/aimbiation-events-logo/beatbattle.png",
    link: "/events/beatbattle",
  },
  {
    imageUrl: "/aimbiation-events-logo/treasurehunt.png",
    link: "/events/treasurehunt",
  },
];

interface EventSectionProps {
  title: string;
  description: string;
  events: { imageUrl: string; link: string }[];
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  description,
  events,
}) => (
  <>
    <div className="absolute top-0 left-0 w-full h-auto pointer-events-none -z-10" id="bg-container">
      <img
        src="/eventsbg.svg"
        className="w-full opacity-100"
        alt="Scrolling Background"
      />
    </div>
    <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center mt-40">
      {title}
    </h2>
    <p className="mt-4 md:mt-10 w-full md:w-[943px] h-auto md:h-[78px] text-center text-white text-lg md:text-xl font-medium font-['Poppins'] uppercase mx-auto">
      {description}
    </p>
    <div className="mt-10 md:mt-28 w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-8 lg:px-16 justify-center">
      {events.map((event, index) => (
        <a
          key={index}
          href={event.link}
          className="block w-full"
        >
          <Image src={event.imageUrl} width={200} height={250} alt={event.link} className="w-full h-auto rounded-xl" />
        </a>
      ))}
    </div>
  </>
);

const Page = () => {
  const technicalDescription =
    "Our fest offers a diverse range of technical and non-technical events, ensuring there's something for everyone. From innovative tech showcases to fun and engaging activities, we bring together creativity, skills, and excitement for an unforgettable experience!";
  const nonTechnicalDescription =
    "Our fest offers a diverse range of technical and non-technical events, ensuring there's something for everyone. From innovative tech showcases to fun and engaging activities, we bring together creativity, skills, and excitement for an unforgettable experience!";
  const aimbiationDescription =
    "Our fest offers a diverse range of technical and non-technical events, ensuring there's something for everyone. From innovative tech showcases to fun and engaging activities, we bring together creativity, skills, and excitement for an unforgettable experience!";

  return (
    <div className="events mt-10 md:mt-28 px-4 md:px-0">
      <EventSection
        title="TECHNICAL EVENTS"
        description={technicalDescription}
        events={technicalEvents}
      />
      <EventSection
        title="NON-TECHNICAL EVENTS"
        description={nonTechnicalDescription}
        events={nonTechnicalEvents}
      />
      <EventSection
        title="aiMBiAtion EVENTS"
        description={aimbiationDescription}
        events={aimbiationEvents}
      />
    </div>
  );
};

export default Page;