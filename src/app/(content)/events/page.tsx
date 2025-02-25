import EventConclusion from "@/components/sub-component/event-conclusion";
import EventIntro from "@/components/sub-component/event-intro";
import SubEventCard from "@/components/sub-component/sub-event-card";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <EventIntro
        imageUrl="/card.png"
        title="Antaragni"
        registrations={300}
        pricepool={30000}
        description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
      />
      <EventConclusion />
    </div>
  );
};

export default Page;
