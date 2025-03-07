import React from "react";
import EventIntro from "@/components/sub-component/event-intro";
import ManagerCard from "@/components/sub-component/manager-card";
import ButtonLanding from "@/components/sub-component/button-landing";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import WhyParticipate from "@/components/sub-component/why-participate";
import EventManagers from "@/components/sub-component/event-managers";

const page = () => {

  const rules = [
    "Time Limit – Each participant gets 2 minutes to perform; exceeding the limit may lead to deductions.",
    "Self-Scoring Must Be Honest – Participants must rate themselves before knowing the judges' scores.",
    "No Offensive Content – Jokes, acts, or performances must be respectful and appropriate for all audiences.",
    "Judges’ Decision is Final – Scores and results cannot be disputed.",
    "Winning Criteria Applies Strictly – An exact self-score match wins instantly; otherwise, the highest-scoring participant wins."
  ];
  const reasons = [
    "Showcase Your Talent – Sing, dance, mimic, or perform anything unique!",
    "Fun & Engaging Twist – Predict your own score for a chance to win instantly!",
    "Boost Confidence – Test your self-awareness and stage presence.",
    "Entertain & Enjoy – A lighthearted event filled with creativity and surprises.",
    "Perform, predict, and prove your skills in this one-of-a-kind talent challenge!"
  ];
  const managers = [
    { imageUrl: "/managers/OPJU Spotlight Saga/Aparajita.jpg", name: "Aparajita Pandey", contact: 9907401010 },
    { imageUrl: "/managers/OPJU Spotlight Saga/Shashwat.jpg", name: "Kumar Shashwat", contact: 7488987171 },
    { imageUrl: "/managers/OPJU Spotlight Saga/Arjun.jpg", name: "Arjun Agrawal ", contact: 7538033333 },
  ];

  return (
    <div className="space-y-10">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>
      <EventIntro
        imageUrl="/techno-events-logo/spotlightsaga.png"
        title="Spotlight Saga"
        registrations={0}
        pricepool={6000}
        description="A fun flagship event where participants showcase talents like singing, dancing, comedy, or magic while also predicting their own score. An exact match with the judges' score wins instantly, making it a unique test of skill, confidence, and self-awareness. Entertain, guess, and win."
        time="22-03-25 , 10:30 am"
        venue="EE SEMINAR HALL(FB-14)"
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          <section className="mb-20">
            <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14 ">
              HOW IT WORKS
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-4  font-['Inter'] leading-[29.08px] tracking-[3.75px]">
                <li>
                  <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Performance Round:</b> Each participant gets 2 minutes to perform
                  any talent—singing, dancing, mimicry, magic tricks, comedy, or
                  anything unique.
                </li>
                <li>
                  <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Self-Scoring Challenge:</b> After performing, the participant
                  rates their own performance out of 10. Judges also give their
                  own score without knowing the participant’s rating.
                </li>
                <li>
                  <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Winning Criteria:</b> If a participant’s self-score exactly
                  matches the judges&apos; average score, they instantly win the
                  event! If no one matches exactly, the highest-scoring
                  participant wins as usual.
                </li>
              </ul>
            </div>
          </section>

          <WhyParticipate reasons={reasons} />
          <RulesAndRegulation rules={rules} />
          <EventManagers managers={managers} />
        </div>
      </div>
    </div>
    
  );
};

export default page;
