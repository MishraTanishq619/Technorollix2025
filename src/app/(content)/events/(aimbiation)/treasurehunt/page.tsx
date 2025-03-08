import React from "react";
import EventIntro from "@/components/sub-component/event-intro";
import SubEventCard from "@/components/sub-component/sub-event-card";
import { BsAward } from "react-icons/bs";
import EventManagers from "@/components/sub-component/event-managers";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";

const Page = () => {
  const managers = [
    { imageUrl: "/dallE.png", name: "Bhavana Verma", contact: 9407916405 },
    { imageUrl: "/dallE.png", name: "Manisha Patel", contact: 6268539090 },
  ];
  const rules = [
    "Every team must have a leader and a cool team name!",
    "Your squad must have exactly 5 members—no more, no less!",
    "Respect the coordinators, no misbehavior allowed!",
    "No outside help—use your own brains! ",
    "No splitting up! The team moves as one.",
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

      <EventIntro
        imageUrl="/aimbiation-events-logo/treasurehunt.png"
        title="Treasure Hunt"
        registrations={0}
        pricepool={6000}
        time="2:30 PM"
        venue="OG (OPEN GYM)"
        description={`Get ready for an exciting Treasure Hunt! Follow the clues, solve tricky puzzles, and race to find the hidden treasure. It’s not just about speed—it’s about using your brain, working with your team, and staying sharp. Expect surprises, challenges, and maybe even a few sneaky traps along the way. Think you’ve got what it takes to crack the code and claim the prize? Let the hunt begin! 
        
        Treasure Hunt Event is open for everyone—insiders and outsiders alike! If you’re ready for an adventure full of clues, challenges, and surprises, join the hunt and claim the prize!`}
      />
      <br />
      <br />

      {/* Sub Events Section */}
      <section className="flex flex-col items-center gap-8 py-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          SUB EVENTS
        </h2>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <SubEventCard
              Icon={BsAward}
              title="ROUND 1"
              description="The Unseen Twist"
            />
            <SubEventCard
              Icon={BsAward}
              title="ROUND 2"
              description="Hold It, Solve It!"
            />
            <SubEventCard
              Icon={BsAward}
              title="ROUND 3"
              description="Decode or Die!"
            />
          </div>
        </div>
      </section>
      {/* Rules Section */}
      <RulesAndRegulation rules={rules} />


        </div>
      </section>

      {/* Manager Section */}
      <EventManagers managers={managers} />
    </div>
  );
};

export default Page;
