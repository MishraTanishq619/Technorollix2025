import React from 'react'; 
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import ManagerCard from '@/components/sub-component/manager-card';
import ButtonLanding from '@/components/sub-component/button-landing';
import { BsAward } from "react-icons/bs";

const Page = () => {
  return (
    <div className="bg-black text-white">
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
        venue="Opposite the CDC office garden"
        description={`Get ready for an exciting Treasure Hunt! Follow the clues, solve tricky puzzles, and race to find the hidden treasure. It’s not just about speed—it’s about using your brain, working with your team, and staying sharp. Expect surprises, challenges, and maybe even a few sneaky traps along the way. Think you’ve got what it takes to crack the code and claim the prize? Let the hunt begin! 
        
        Treasure Hunt Event is open for everyone—insiders and outsiders alike! If you’re ready for an adventure full of clues, challenges, and surprises, join the hunt and claim the prize!`}
      />
      <br />
      <br />

      {/* Rules Section */}
      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
          TREASURE HUNT RULES
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-none pl-5 text-2xl uppercase tracking-[6.72px] text-white">
            <li>⦁ Every team must have a leader and a cool team name!</li>
            <li>⦁ Your squad must have exactly 5 members—no more, no less!</li>
            <li>⦁ Respect the coordinators, no misbehaviour allowed!</li>
            <li>⦁ No splitting up! The team moves as one.</li>
          </ul>
        </div>
      </section>

      {/* Disqualification Rules Section */}
      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
          DISQUALIFICATION RULES
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-none pl-5 text-2xl uppercase tracking-[6.72px] text-white">
            <li>⦁ Don’t mess with other teams, play fair!</li>
            <li>⦁ Damage university stuff? Pay the fine!</li>
            <li>⦁ Break the instructions, and you&apos;re out!</li>
            <li>⦁ All teams must arrive on time.</li>
          </ul>
        </div>
      </section>

      {/* Sub Events Section */}
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
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
      <br />
      <br />

      {/* Manager Section */}
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            EVENT MANAGERS
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal tracking-[5.28px]">
            For any queries regarding the event, feel free to reach out to any of
            the managers listed below. They are here to help and ensure a smooth
            experience for you!
          </div>

          <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Bhavana Verma" contact={9407916405} />
            <ManagerCard imageUrl="/dallE.png" name="Manisha Patel" contact={6268539090} />
          </div>
          <div className="mb-10">
            <ButtonLanding label="Register Now" link="/dashboard" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
