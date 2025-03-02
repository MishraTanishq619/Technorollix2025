import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import ManagerCard from '@/components/sub-component/manager-card';
import ButtonLanding from '@/components/sub-component/button-landing';
import { BsAward } from "react-icons/bs";

const Page = () => {
  return (
    
    
    <div className="Beatbattle">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      <EventIntro
        imageUrl="/aimbiation-events-logo/beatbattle.jpg"
        title="Beatbattle"
        registrations={0}
        pricepool={6000}
        time="21-03-2025, 2:30 PM"
        venue="Babuji Chowk"
        description="This is not just any dance competition—it’s a high-energy battle where only the best dancers shine! Get ready for exciting challenges, head-to-head battles, and nonstop fun as you show off your skills, creativity, and confidence.
        Open for all department and even outsiders! If you love dancing and have the moves to impress, this is your chance to step up, own the stage, and become the “Beat Battle champion!”"
      />
      <br /><br />

      <section className="mb-20">
      <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          RULES OF THE EVENT:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto text-white">
          <ul className="list-decimal pl-5 text-2xl space-y-2  font-['Inter'] leading-[29.08px] tracking-[3.75px]">
            <li>Solo participation only (no duets or groups).</li>
            <li>Participants must register before the deadline.</li>
            <li>Props are not allowed unless provided by organizers.</li>
            <li>No offensive or inappropriate moves; maintain event decorum.</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8">
      <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT FORMATS & ROUNDS
        </h2>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
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
            /><br/><br/>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          JUDGING CRITERIA
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto text-white">
          <ul className="list-decimal pl-5 text-2xl space-y-2  font-['Inter'] leading-[29.08px] tracking-[3.75px]">
           Judging Criteria:
              <li> Musicality & rythm 25%</li>
              <li> Creativity & originality 25%</li>
              <li> Energy & stage Presence 20%</li>
              <li>Overall Impact 10%</li>
            
            <li>Musicality & Rhythm: How well the dancer syncs with the beats.</li>
            <li>Creativity & Originality: Unique moves and transitions.</li>
            <li>Energy & Stage Presence: Confidence, engagement, and crowd interaction.</li>
            <li>Execution & Technique: Precision, footwork, and body control.</li>
            <li>Overall Impact: Wow factor and performance memorability.</li>
          </ul>
        </div>
      </section>
      <br /><br />

      {/* Manager Section */}
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            EVENT MANAGERS
          </div>
          <div className="w-[1023px] text-center text-white list-decimal pl-5 text-2xl space-y-2  font-['Inter'] leading-[29.08px] tracking-[3.75px]">
            For any queries regarding the event, feel free to reach out to any of
            the managers listed below. They are here to help and ensure a smooth
            experience for you!
          </div>
          <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Aditi Sharma" contact={9770613233}/>
            <ManagerCard imageUrl="/dallE.png" name="Ramprit Kour" contact={7656887717} />
          </div>
          <div className="mb-10">
            <ButtonLanding label="Register Now" link='/auth/login' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
