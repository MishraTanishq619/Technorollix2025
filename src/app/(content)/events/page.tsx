import CardwithImage from "@/components/sub-component/card-with-image";
import React from "react";
// import Antaragni from "./antaragni/page";
// import EventIntro from "@/components/sub-component/event-intro";
// import EventConclusion from "@/components/sub-component/event-conclusion";

const technicalEvents = [
  { imageUrl: "./Rectangle 197.png", title: "Antaragni", link: "/antaragni" },
  { imageUrl: "./Rectangle 197.png", title: "Tech-Lab", link: "/tech-lab" },
  { imageUrl: "./Rectangle 197.png", title: "Kalakriti", link: "/kalakriti" },
  { imageUrl: "./Rectangle 197.png", title: "Kalakriti", link: "/kalakriti" },
  { imageUrl: "./Rectangle 197.png", title: "Kalakriti", link: "/kalakriti" },
  { imageUrl: "./Rectangle 197.png", title: "Kalakriti", link: "/kalakriti" },
];

const culturalEvents = [
  { imageUrl: "./Rectangle 197.png", title: "Dance", link: "/dance" },
  { imageUrl: "./Rectangle 197.png", title: "Music", link: "/music" },
  { imageUrl: "./Rectangle 197.png", title: "Drama", link: "/drama" },
  { imageUrl: "./Rectangle 197.png", title: "Art", link: "/art" },
  { imageUrl: "./Rectangle 197.png", title: "Fashion", link: "/fashion" },
  { imageUrl: "./Rectangle 197.png", title: "Photography", link: "/photography" },
];

interface EventSectionProps {
  title: string;
  description: string;
  events: { imageUrl: string; title: string; link: string }[];
}

const EventSection: React.FC<EventSectionProps> = ({ title, description, events }) => (
  <>
    <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center">
      {title}
    </h2>
    <p className="mt-10 w-[943px] h-[78px] text-center text-white text-xl font-medium font-['Poppins'] uppercase mx-auto">
      {description}
    </p>
    <div className="mt-28 w-full flex flex-wrap justify-between gap-4">
      {events.map((event, index) => (
        <a key={index} href={event.link} className="block">
          <CardwithImage imageUrl={event.imageUrl} title={event.title} />
        </a>
      ))}
    </div>
  </>
);

const Page = () => {
  const technicalDescription =
    "Our fest offers a diverse range of technical and non-technical events, ensuring there's something for everyone. From innovative tech showcases to fun and engaging activities, we bring together creativity, skills, and excitement for an unforgettable experience!";

  const culturalDescription =
    "Our fest offers a diverse range of technical and non-technical events, ensuring there's something for everyone. From innovative tech showcases to fun and engaging activities, we bring together creativity, skills, and excitement for an unforgettable experience!";

  return (

    <div className="events mt-28">
      <EventSection title="TECHNICAL EVENTS" description={technicalDescription} events={technicalEvents} />
      <EventSection title="CULTURAL EVENTS" description={culturalDescription} events={culturalEvents} />

    </div>
  );
};

export default Page;
