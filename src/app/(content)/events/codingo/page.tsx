import EventConclusion from "@/components/sub-component/event-conclusion";
import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import ButtonLanding from "@/components/sub-component/button-landing";
import CardwithImage from "@/components/sub-component/card-with-image";
import Image from "next/image";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import WhyParticipate from "@/components/sub-component/why-participate";

const page = () => {
  const rules = ["Rule 3","Rule 3","Rule 3","Rule 3","Rule 3","Rule 3"];
  const reasons = ["Reason 1","Reason 2","Reason 3","Reason 4","Reason 5"]

  return (
    <div className="flex flex-col space-y-10">
      {/* Event Intro Section */}


      <section>
        <EventIntro
          imageUrl="/antaragni.png"
          title="Codingo"
          registrations={20}
          pricepool={30000}
          description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
        />
      </section>

      {/* Theme section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="w-[397px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h2>
        <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px]">
          <p>  Embracing Diversity: Uniting Through Technology </p>
        </div>
      </section>

      <section>
        {/* Sub-Events section */}
        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            sub-events
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          The following are the sub-events of this main event. Read the details carefully and choose the ones that best match your interests and expertise. Don't miss your chance to participate and showcase your skills!
          </div>
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="./Vector.svg"
              title="code competition"
              description="Showcase your problem-solving skills, logic, and speed as you tackle challenging coding problems. Whether you're a beginner or a pro, this is your chance to impress the judges and compete with the best. Write efficient code, optimize solutions, and prove your mastery—let the challenge begin!"
            />
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="design challenge"
              description="Unleash your creativity and craft intuitive, user-friendly designs that stand out. Whether it’s wireframes or full-fledged prototypes, this is your chance to impress the judges and wow the audience. Showcase your design thinking, usability skills, and aesthetic vision—let the challenge begin!"
            />
          </div>
        
        </section>
        <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              WHY PARTICIPATE
            </h2>


            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
                <li>Exciting prizes worth ₹20,000</li>
                <li>Funding opportunity for innovative prototypes (subject to OPJU Innovation Centre terms)</li>
                <li>Recognition certificates for all participating universities</li>
                <li>Participation certificates for all participants
                Special category-wise winning prizes</li>
                <li>Hands-on experience in new-age innovations</li>
                <li>Reimbursement of one-way Sleeper class fare for outside participants</li>
              </ul>
                
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              RULES & REGULATION
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
                <li>Arrive at the venue one hour before the event for setup.</li>
                <li>Tables and electricity connections will be provided.</li>
                <li>No exhibit should be dismantled before the event ends.</li>
                <li>First Round:25 questions, time limit– 30 min. </li>
                <li>Qualification: The number of participants advancing will be decided on the spot based on total participation.</li>
                <li>Second Round: Solve any 3 out of 5 problems (time limit announced on the spot).</li>
                <li>Third Round:   Solve all 3 questions (time limit announced on the spot).</li>
                <li>Participants must maintain event decorum.</li>
                <li>The judging panel's decision is final.</li>
              </ul>
            </div>
          </section>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            EVENT MANAGERS
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
            For any queries regarding the event, feel free to reach out to any of
            the managers listed below. They are here to help and ensure a smooth
            experience for you!
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
          <img src="/Group 37147.png" alt="profile" />
          <img src="/Group 37147.png" alt="profile" />
          <img src="/Group 37147.png" alt="profile" />
        </div>
     </section>

    </div>
  );
};

export default page;
