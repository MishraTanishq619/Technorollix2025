import CardwithImage from "@/components/sub-component/card-with-image";
import React from "react";

const technicalEvents = [
  {
    imageUrl: "/techno-events-logo/aerodrone.png",
    title: "Aerodrone",
    link: "/events/aerodrone",
  },
  {
    imageUrl: "/techno-events-logo/techlab.png",
    title: "Tech-Lab",
    link: "/events/techlab",
  },
  {
    imageUrl: "/techno-events-logo/robovation.png",
    title: "Robovation",
    link: "/events/robovation",
  },
  {
    imageUrl: "/techno-events-logo/hackathon.png",
    title: "Hackathon",
    link: "/events/hackathon",
  },
  {
    imageUrl: "/techno-events-logo/codigo.png",
    title: "Codigo",
    link: "/events/codigo",
  },
  {
    imageUrl: "/techno-events-logo/ideathon.png",
    title: "Ideathon",
    link: "/events/ideathon",
  },
];
const nonTechnicalEvents = [
  {
    imageUrl: "/techno-events-logo/spotlightsaga.png",
    title: "Spotlight Saga",
    link: "/events/spotlight-saga",
  },
  {
    imageUrl: "/techno-events-logo/amongus.png",
    title: "Among Us",
    link: "/events/among-us",
  },
  {
    imageUrl: "/techno-events-logo/gamefusion.png",
    title: "Game Fusion",
    link: "/events/game-fusion",
  },
  {
    imageUrl: "/techno-events-logo/masterchef.png",
    title: "Master Chef",
    link: "/events/master_chef",
  },
  {
    imageUrl: "/techno-events-logo/roadies.png",
    title: "Roadies",
    link: "/events/roadies",
  },
  {
    imageUrl: "/techno-events-logo/antaragini.png",
    title: "Antaragini",
    link: "/events/antaragini",
  },
  {
    imageUrl: "/techno-events-logo/kalakriti.png",
    title: "Kalakriti",
    link: "/events/kalakriti",
  },
];

const aimbiationEvents = [
  {
    imageUrl: "/aimbiation-events-logo/bizesawaal.jpg",
    title: "Biz-e-Sawaal",
    link: "/events/bizesawaal",
  },
  {
    imageUrl: "/aimbiation-events-logo/nexgenstartup.jpg",
    title: "NeXgen Startup",
    link: "/events//nexgenstartup",
  },
  {
    imageUrl: "/aimbiation-events-logo/adomania.jpg",
    title: "Ad-O-Mania",
    link: "/events/adomania",
  },
  {
    imageUrl: "/aimbiation-events-logo/voiceofyouth.jpg",
    title: "Voice of Youth",
    link: "/events/voiceofyouth",
  },
  {
    imageUrl: "/aimbiation-events-logo/reelandroles.jpg",
    title: "Reels & Roles",
    link: "/events/Reelsandroles",
  },
  {
    imageUrl: "/aimbiation-events-logo/bullvsbear.jpg",
    title: "Bull vs Bear",
    link: "/events/bullvsbear",
  },
  {
    imageUrl: "/aimbiation-events-logo/riwayat.jpg",
    title: "Riwayat",
    link: "/events/riwayat",
  },
  {
    imageUrl: "/aimbiation-events-logo/beatbattle.jpg",
    title: "Beat Battle",
    link: "/events/beatbattle",
  },
  {
    imageUrl: "/aimbiation-events-logo/treasurehunt.png",
    title: "Treasure Hunt",
    link: "/events/treasurehunt",
  },
];

interface EventSectionProps {
  title: string;
  description: string;
  events: { imageUrl: string; title: string; link: string }[];
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  description,
  events,
}) => (
  <>
    <div className="absolute top-0 left-0 w-full h-auto pointer-events-none -z-10" id="bg-container">
      <img
        src="/background.svg"
        className="w-full opacity-100"
        alt="Scrolling Background"
      />
    </div>
    <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center mt-60">
      {title}
    </h2>
    <p className="mt-4 md:mt-10 w-full md:w-[943px] h-auto md:h-[78px] text-center text-white text-lg md:text-xl font-medium font-['Poppins'] uppercase mx-auto">
      {description}
    </p>
    <div className="mt-10 md:mt-28 w-full flex flex-wrap justify-center md:justify-evenly gap-4">
      {events.map((event, index) => (
        <a
          key={index}
          href={event.link}
          className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <CardwithImage imageUrl={event.imageUrl} title={event.title} />
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
