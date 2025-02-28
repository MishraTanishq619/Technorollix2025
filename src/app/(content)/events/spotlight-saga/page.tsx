import React from "react";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import ManagerCard from "@/components/sub-component/manager-card";
import ButtonLanding from "@/components/sub-component/button-landing";

const page = () => {
  const managers = [
    { imageUrl: "/dallE.png", name: "Nikhil Patel", contact: 8305216569 },
    { imageUrl: "/dallE.png", name: "Rahul Dubey", contact: 1234567891 },
    { imageUrl: "/dallE.png", name: "Sangana Sahu", contact: 9876543210 },
  ];

  return (
    <div className="Spotlight Saga">
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
        pricepool={12000}
        description="A fun flagship event where participants showcase talents like singing, dancing, comedy, or magic while also predicting their own score. An exact match with the judges' score wins instantly, making it a unique test of skill, confidence, and self-awareness. Entertain, guess, and win."
        time="10:30 am"
        venue="EE SEMINAR HALL(FB-14)"
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              HOW IT WORKS
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
                <li>
                  Performance Round: Each participant gets 2 minutes to perform
                  any talent—singing, dancing, mimicry, magic tricks, comedy, or
                  anything unique.
                </li>
                <li>
                  Self-Scoring Challenge: After performing, the participant
                  rates their own performance out of 10. Judges also give their
                  own score without knowing the participant’s rating.
                </li>
                <li>
                  Winning Criteria: If a participant’s self-score exactly
                  matches the judges' average score, they instantly win the
                  event! If no one matches exactly, the highest-scoring
                  participant wins as usual.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              WHY PARTICIPATE
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
                <li>
                  Showcase Your Talent – Sing, dance, mimic, or perform anything
                  unique!
                </li>
                <li>
                  Fun & Engaging Twist – Predict your own score for a chance to
                  win instantly!
                </li>
                <li>
                  Boost Confidence – Test your self-awareness and stage
                  presence.
                </li>
                <li>
                  Entertain & Enjoy – A lighthearted event filled with
                  creativity and surprises.
                </li>
                <li>
                  Perform, predict, and prove your skills in this one-of-a-kind
                  talent challenge!
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              RULES & REGULATIONS
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
                <li>
                  Time Limit – Each participant gets 2 minutes to perform;
                  exceeding the limit may lead to deductions.
                </li>
                <li>
                  Self-Scoring Must Be Honest – Participants must rate
                  themselves before knowing the judges' scores.
                </li>
                <li>
                  No Offensive Content – Jokes, acts, or performances must be
                  respectful and appropriate for all audiences.
                </li>
                <li>
                  Judges’ Decision is Final – Scores and results cannot be
                  disputed.
                </li>
                <li>
                  Winning Criteria Applies Strictly – An exact self-score match
                  wins instantly; otherwise, the highest-scoring participant
                  wins.
                </li>
              </ul>
            </div>
          </section>
          <div className="flex justify-center space-x-100 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Gourav jha " contact={9692668567}/>
            <ManagerCard imageUrl="/dallE.png" name="Kumar Shashwat" contact={7488987171}/>
            <ManagerCard imageUrl="/dallE.png" name="Arjun Agrawal" contact={7538033333}/>
            <ManagerCard imageUrl="/dallE.png" name="Aparajita Pandey" contact={9907401010}/>
            <ManagerCard imageUrl="/dallE.png" name="Ujjwal Singh " contact={7898367965}/>
        </div>
        <div className="mb-10">
            <ButtonLanding label="Register Now" link="" />
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default page;
