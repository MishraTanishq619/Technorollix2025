import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import { BsAward } from "react-icons/bs";
import EventManagers from "@/components/sub-component/event-managers";

const managers = [
  {
    imageUrl: "/dallE.png",
    name: "Sanjeet Kumar Gourh",
    contact: 6260294300,
  },
  {
    imageUrl: "/dallE.png",
    name: "Shubham Narayan",
    contact: 6371745801,
  },
  {
    imageUrl: "/dallE.png",
    name: "Nishika Agrawal",
    contact: 7853032508,
  },
];

const rules = [
  "Each participant will receive virtual capital to start trading.",
  "Only the designated trading platform should be used.",
  "No external assistance (real-money trades) is allowed.",
  "Trading should be within market hours as specified by event organizers.",
  "Risk management is key – reckless trading may lead to disqualification.",
  "Top traders will qualify for the final round based on portfolio value and strategy.",
];

const subEvents = [
  {
    title: "Round-1: A day at corporates",
    description:
      "Make reels on corporate life from wearing formals to attending meetings formal / informal communication.",
  },
  {
    title: "Round-2: cinematic ads shooting –",
    description: "Make cinematic adds of the product of your choice.",
  },
  {
    title: "Round-3: cinematic shoot of OPJU",
    description: "Bring best out of the campus in a cinematic shoot.",
  },
];

const timings = [
  {
    title: "Time duration of Reel:",
    items: [
      "Minimum - 30sec",
      "Maximum - 1min",
      "Mode of submission: virtual mode",
      "Post the video on your id in collaboration with OPJU official Instagram account.",
    ],
  },
  {
    title: "Timing duration of role play:",
    items: ["Minimum 3 min", "Maximum 5 min"],
  },
];

const judgement = [
  {
    title: "Round-1",
    description: "Top 15 reels with highest likes will qualify for round 2.",
  },
  {
    title: "Round-2",
    description:
      "Top 10 reels with best cinematography will qualify for round 3.",
  },
  {
    title: "Round-3",
    description: "Top 3 reels as decided by the judges will be the winners.",
  },
];

const EventPage = () => {
  return (
    <div className="mt-8">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      {/* Event Intro Section */}
      <EventIntro
        imageUrl="/aimbiation-events-logo/reelandroles.png"
        title="Reels & Roles play"
        registrations={20}
        pricepool={30000}
        description="The School of Management is thrilled to present Reels and Role Plays, an exciting event that combines creativity, photography, cinematography, and management skills. Reels and Role Plays is a unique event where participants will have the opportunity to showcase their photography and cinematography skills by creating short reels on various management-related themes. Additionally, participants will engage in role-plays that simulate real-world management scenarios, such as job interviews, board meetings, and shareholder meetings."
        time="8:00 Am"
        venue="Open Theatre"
      />

      <section className="my-48">
        <SectionTitle text="Reels - Rounds" />

        {/* Sub-Events Cards Section */}
        <EventCards eventDetails={subEvents} />

        {/* Time duration section */}
        {timings.map((timing, index) => (
          <TimeDurationSection
            key={index}
            title={timing.title}
            items={timing.items}
          />
        ))}

        {/* Judgement section */}
        <SectionTitle text="Judgement" />
        <EventCards eventDetails={judgement} />

        <SectionTitle text="Prize Detail:" />
        <PrizeDetail />

        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

const SectionTitle = ({ text }: { text: string }) => (
  <div className="text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium font-['Poppins'] uppercase tracking-[3.75px]">
    {text}
  </div>
);

interface EventDetail {
  title: string;
  description: string;
}

const EventCards = ({ eventDetails }: { eventDetails: EventDetail[] }) => (
  <div className="flex justify-around m-20">
    {eventDetails.map((event, index) => (
      <SubEventCard
        key={index}
        Icon={BsAward}
        title={event.title}
        description={event.description}
      />
    ))}
  </div>
);

const TimeDurationSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <section className="mb-20">
    <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
      {title}
    </h2>
    <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <ul className="list-disc text-2xl space-y-4 font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

const PrizeDetail = () => (
  <div className="bg-[#33010140] p-6 mb-20 rounded-lg shadow-lg max-w-5xl mx-auto">
    <ul className="list-disc text-2xl space-y-4 font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white">
      <li>First prize: 6000</li>
      <li>Second prize: 4000</li>
      <li>Third prize: 2000</li>
    </ul>
  </div>
);

export default EventPage;
