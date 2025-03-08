import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import React from "react";

const page = () => {
  const managers = [
    {
      imageUrl: "/dallE.png",
      name: "Sanjeet kumar Gourh",
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
  return (
    <div className="mt-8">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      <EventIntro
        imageUrl="/aimbiation-events-logo/voiceofyouth.png"
        title="Voice of Youths"
        registrations={0}
        pricepool={12000}
        description="Step into the intellectual battlefield of Tarkash, where logic meets leadership, and arguments shape innovation. This high-energy debate competition is designed for aspiring managers, entrepreneurs, and business enthusiasts as well as others to challenge conventional wisdom and present groundbreaking perspectives.

       Participants will engage in thought-provoking debates on current business trends, corporate ethics, financial strategies, and emerging market dynamics and also current happening. Whether you're defending or opposing, your ability to think critically, articulate persuasively, and counter strategically will determine your victory.
"
        time={"22-03-2025, 10:00AM"}
        venue={"MP HALL"}
      />
      <section className="flex flex-col items-center justify-center my-32">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          THEME
        </h2>
        <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[3.75px]">
          Debate Competition , Management ,Business, Current affairs
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          EVENT DESCRIPTION
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-decimal pl-5 text-2xl space-y-4  font-['Inter'] leading-[29.08px] tracking-[3.75px] text-[#EDE0E0]">
            <li>
              Step into the intellectual battlefield of Tarkash, where logic
              meets leadership, and arguments shape innovation. This high-energy
              debate competition is designed for aspiring managers,
              entrepreneurs, and business enthusiasts as well as others to
              challenge conventional wisdom and present groundbreaking
              perspectives.
            </li>
            <li>
              Participants will engage in thought-provoking debates on current
              business trends, corporate ethics, financial strategies, and
              emerging market dynamics and also current happening. Whether
              you&apos;re defending or opposing, your ability to think
              critically, articulate persuasively, and counter strategically
              will determine your victory.
            </li>
          </ul>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14 ">
          EVENT FORMAT:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-decimal pl-5 text-2xl space-y-4  font-['Inter'] leading-[29.08px] tracking-[3.75px] text-[#EDE0E0]">
            <li>
              {" "}
              Round 1: Opening Statements Teams present their stance on
              pre-assigned business topics.
            </li>
            <li>
              {" "}
              Round 2: Rebuttal Round - Counter-arguments and analytical
              reasoning take center stage.
            </li>
            <li>
              {" "}
              Final Showdown: Face-Off Round The top teams battle it out with
              impromptu challenges and cross-questioning.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14 ">
          EVENT RULES:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-none  text-2xl space-y-8 font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white">
            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              TEAM SIZE = 2-4 MEMBERS
            </li>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              1. Team Structure & Speaking Order
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>
                Debate teams usually consist of two to four members per side.
              </li>
              <li>The two sides are:</li>
              <ul className="list-disc pl-10 text-lg">
                <li>Affirmative/Proposition (supports the motion)</li>
                <li>Negative/Opposition (opposes the motion)</li>
              </ul>
              <li>
                Each speaker is given a set time to present arguments,
                rebuttals, and conclusions.
              </li>
            </ul>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              2. SPEECH TIMING
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>
                Each speaker gets a fixed time limit (e.g., 3–7 minutes per
                speech).
              </li>
              <li>
                Rebuttal speeches are usually shorter than constructive
                speeches.
              </li>
              <li>Exceeding the time limit may result in penalties.</li>
            </ul>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              3. SPEAKING RULES
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>
                Speakers must respect time limits and follow the order of
                speeches.
              </li>
              <li>
                No interruptions are allowed except for structured
                interjections.
              </li>
              <li>Arguments must be fact-based and logically structured.</li>
            </ul>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              4. REBUTTAL & CROSS-EXAMINATION
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>
                Teams must respond to opponents' arguments through rebuttals.
              </li>
              <li>
                Some formats allow cross-examination where teams ask direct
                questions to opponents.
              </li>
              <li>Attacks should focus on arguments, not personal attacks.</li>
            </ul>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              5. USE OF EVIDENCE
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>Debaters should cite sources for factual claims.</li>
              <li>
                Misrepresentation or fabrication of evidence is strictly
                prohibited.
              </li>
            </ul>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              6. POINTS OF INFORMATION (POI) & INTERRUPTIONS
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>
                In some formats, debaters can raise POIs during opponents’
                speeches.
              </li>
              <li>The speaker may accept or reject POIs.</li>
            </ul>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              7. CODE OF CONDUCT & ETHICS
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>Respect for judges, opponents, and audience is mandatory.</li>
              <li>
                No offensive language, discrimination, or personal attacks.
              </li>
              <li>Plagiarism or using pre-written speeches is not allowed.</li>
            </ul>

            <li className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-bold">
              8. DECISION & SCORING
            </li>
            <ul className="list-decimal pl-10 text-xl space-y-2">
              <li>
                Judges score based on content, delivery, rebuttals, and
                structure.
              </li>
              <li>The team with the higher overall score wins.</li>
              <li>
                In case of a tie, judges may re-evaluate key arguments or
                consider audience engagements.
              </li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          Judgement Criteria:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>Content: 40%</li>
            <li>Delivery: 30%</li>
            <li>Rebuttal and refutation: 20%</li>
            <li>Strategy and structure : 10%</li>
          </ul>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          EFFICIENT PRIZES:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-none pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>● First prize: 6000</li>
            <li>● Second prize:4000</li>
            <li>● Third prize:2000</li>
          </ul>
        </div>
      </section>

      <section>
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default page;
