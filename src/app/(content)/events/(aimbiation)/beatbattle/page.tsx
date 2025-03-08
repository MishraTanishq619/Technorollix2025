import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import ManagerCard from '@/components/sub-component/manager-card';
import ButtonLanding from '@/components/sub-component/button-landing';
import { BsAward } from "react-icons/bs";
import EventManagers from '@/components/sub-component/event-managers';

const Page = () => {
  const managers = [
    { imageUrl: "/dallE.png", name: "Aditi Sharma", contact: 9770613233 },
    { imageUrl: "/dallE.png", name: "Ramprit Kour", contact: 7656887717 },
  ];
  
  return (
    <div className="flex flex-col space-y-8">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      {/* Event Introduction (No margin changes) */}
      <EventIntro
        imageUrl="/aimbiation-events-logo/beatbattle.png"
        title="Beatbattle"
        registrations={0}
        pricepool={10500}
        time="21-03-2025, 2:30 PM"
        venue="OAT (Open Air Theatre)"
        description="This is not just any dance competition—it’s a high-energy battle where only the best dancers shine! Get ready for exciting challenges, head-to-head battles, and nonstop fun as you show off your skills, creativity, and confidence.
        Open for all departments and even outsiders! If you love dancing and have the moves to impress, this is your chance to step up, own the stage, and become the “Beat Battle champion!”"
      />

      {/* Rules Section */}
      <section className="pt-32">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          RULES OF THE EVENT:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto text-white">
          <ul className="list-disc text-2xl tracking-[3.75px] space-y-2">
            <li>Solo participation only (no duets or groups).</li>
            <li>Participants must register before the deadline.</li>
            <li>Props are not allowed unless provided by organizers.</li>
            <li>No offensive or inappropriate moves; maintain event decorum.</li>
          </ul>
        </div>
      </section>

      {/* Event Formats & Rounds */}
      <section className="flex flex-col items-center gap-12 pt-32 ">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          EVENT FORMATS & ROUNDS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SubEventCard
            Icon={BsAward}
            title="ROUND 1: BOLLYWOOD BEAT CLASH"
            description="Two contestants battle head-to-head, dancing to a Bollywood DJ remix mashup.
            Each participant gets 45 seconds to perform.
            No pre-planned choreography—pure freestyle energy!
            Dancers must adapt to the beats.
            Judge’s votes will decide the winner of each battle.
            Only one from each battle moves forward to the next round."
          />
          <SubEventCard
            Icon={BsAward}
            title="ROUND 2: BOLLYWOOD TADKA MIX"
            description="Themes will be revealed later"
          />
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="py-32">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          JUDGING CRITERIA
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto text-white">
          <ul className="list-disc text-2xl leading-9 tracking-[3.75px] space-y-3">
          <li><b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Musicality & Rhythm (25%):</b> How well the dancer syncs with the beats.</li>
            <li><b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Creativity & Originality (25%):</b> Unique moves and transitions.</li>
            <li><b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Energy & Stage Presence (20%):</b> Confidence, engagement, and crowd interaction.</li>
            <li><b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Execution & Technique (20%):</b> Precision, footwork, and body control.</li>
            <li><b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Overall Impact (10%):</b> Wow factor and performance memorability.</li>
          </ul>
        </div>
      </section>

      {/* Manager Section */}
      <EventManagers managers={managers} />
    </div>
  );
};

export default Page;
