import CardwithImage from "@/components/sub-component/card-with-image";
import React from "react";
// import Antaragni from "./antaragni/page";
// import EventIntro from "@/components/sub-component/event-intro";
// import EventConclusion from "@/components/sub-component/event-conclusion";

const technicalEvents = [
  { imageUrl: "/aerodrone.png", title: "Aerodrone", link: "/events/aerodrone" },
  { imageUrl: "/techlab.png", title: "Tech-Lab", link: "/events/techlab" },
  { imageUrl: "/robovation.png", title: "Robovation", link: "/events/robovation" },
  { imageUrl: "/hackathon.png", title: "Hackathon", link: "/events/hackathon" },
  { imageUrl: "/codigo.png", title: "Codigo", link: "/events/codigo" },
  { imageUrl: "/ideathon.png", title: "Ideathon", link: "/events/ideathon" },
];
const nonTechnicalEvents = [
  { imageUrl: "/spotlightsaga.png", title: "Spotlight Saga", link: "/events/spots-saga" },
  { imageUrl: "/amongus.png", title: "Among Us", link: "/events/anong-us" },
  { imageUrl: "/gamefusion.png", title: "Game Fusion", link: "/events/game-fusion" },
  { imageUrl: "/masterchef.png", title: "Master Chef", link: "/events/master_chef" },
  { imageUrl: "/roadies.png", title: "Roadies", link: "/events/roadies" },
  { imageUrl: "/antaragini.png", title: "Antaragini", link: "/events/antaragini" },
  { imageUrl: "/kalakriti.png", title: "Kalakriti", link: "/events/kalakriti" },
];

const aimbiationEvents = [
  { imageUrl: "/bizesawaal.png", title: "Biz-e-Sawaal", link: "/events/bizesawaal" },
  { imageUrl: "/nexgenstartup.png", title: "NeXgen Startup", link: "/events//nexgenstartup" },
  { imageUrl: "/adomania.png", title: "Ad-O-Mania", link: "/events/adomania" },
  { imageUrl: "/voiceofyouth.png", title: "Voice of Youth", link: "/events/voiceofyouth" },
  { imageUrl: "/reelandroles.png", title: "Reels & Roles", link: "/events/Reelsandroles" },
  { imageUrl: "/bullvsbear.png", title: "Bull vs Bear", link: "/events/bullvsbear" },
  { imageUrl: "/riwayat.png", title: "Riwayat", link: "/events/riwayat" },
  { imageUrl: "/beatbattle.png", title: "Beat Battle", link: "/events/beatbattle" },
  { imageUrl: "/treasurehunt.png", title: "Treasure Hunt", link: "/events/treasurehunt" },
];

interface EventSectionProps {
  title: string;
  description: string;
  events: { imageUrl: string; title: string; link: string }[];
}

const EventSection: React.FC<EventSectionProps> = ({ title, description, events }) => (
  <>
    <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center">
      {title}
    </h2>
    <p className="mt-4 md:mt-10 w-full md:w-[943px] h-auto md:h-[78px] text-center text-white text-lg md:text-xl font-medium font-['Poppins'] uppercase mx-auto">
      {description}
    </p>
    <div className="mt-10 md:mt-28 w-full flex flex-wrap justify-center md:justify-between gap-4">
      {events.map((event, index) => (
        <a key={index} href={event.link} className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
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
      <EventSection title="TECHNICAL EVENTS" description={technicalDescription} events={technicalEvents} />
      <EventSection title="NON-TECHNICAL EVENTS" description={nonTechnicalDescription} events={nonTechnicalEvents} />
      <EventSection title="aiMBiAtion EVENTS" description={aimbiationDescription} events={aimbiationEvents} />
    </div>
  );
};

export default Page;
