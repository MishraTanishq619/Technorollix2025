import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import { FaCode, FaPenNib } from "react-icons/fa6";
import EventManagers from "@/components/sub-component/event-managers";
import WhyParticipate from "@/components/sub-component/why-participate";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";

const Page = () => {
  const rules = [
    "Arrive at the venue one hour before the event for setup.",
    "Tables and electricity connections will be provided.",
    "No exhibit should be dismantled before the event ends.",
    "First Round: 25 questions, time limit – 30 min.",
    "Qualification: The number of participants advancing will be decided on the spot based on total participation.",
    "Second Round: Solve any 3 out of 5 problems (time limit announced on the spot).",
    "Third Round: Solve all 3 questions (time limit announced on the spot).",
    "Participants must maintain event decorum.",
    "The judging panel's decision is final.",
  ];

  const reasons = [
    "Exciting prizes worth ₹20,000",
    "Funding opportunity for innovative prototypes (subject to OPJU Innovation Centre terms)",
    "Recognition certificates for all participating universities",
    "Participation certificates for all participants Special category-wise winning prizes",
    "Hands-on experience in new-age innovations",
    "Reimbursement of one-way Sleeper class fare for outside participants",
  ];

  const managers = [
    { imageUrl: "/dallE.png", name: "Nikhil Patel", contact: 8305216569 },
    { imageUrl: "/dallE.png", name: "Rahul Dubey", contact: 1234567891 },
    { imageUrl: "/dallE.png", name: "Sangana Sahu", contact: 9876543210 },
  ];
  return (
    <div className="flex flex-col space-y-10">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-100"
          alt="Scrolling Background"
        />
      </div>
      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/techno-events-logo/codigo.png"
          title="Codigo"
          registrations={0}
          pricepool={20000}
          description="Unlock your coding potential at our University’s premier Coding Event!! Participate in challenges, network with peers, and enhance your skills. Whether you are a beginner or a pro, join us for an unforgettable experience of innovation and collaboration."
          time="20-03-25 , 11:00 am"
          venue="TB 09"
        />
      </section>
      <br />
      <br />

      {/* Theme section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-transparent mb-10 bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium tracking-[3.75px] text-center">
          THEME
        </h2>
        <div className="text-white text-2xl font-medium text-center tracking-[3.75px]">
          <p>Dream your Fantasy, Code it in your Reality!!!</p>
        </div>
      </section>
      {/* Sub-Events Section */}
      <section>
        {/* Sub-Events section */}
        <section className="flex flex-col items-center justify-center mt-10">
          <div className="w-[324.06px] h-[85px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            sub-events
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[3.75px]">
            The following are the sub-events of this main event. Read the
            details carefully and choose the ones that best match your interests
            and expertise. Don&apos;t miss your chance to participate and
            showcase your skills!
          </div>
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-evenly m-20">
            <SubEventCard
              Icon={FaCode}
              title="code competition"
              description="Showcase your problem-solving skills, logic, and speed as you tackle challenging coding problems. Whether you're a beginner or a pro, this is your chance to impress the judges and compete with the best. Write efficient code, optimize solutions, and prove your mastery—let the challenge begin!"
            />
            <SubEventCard
              Icon={FaPenNib}
              title="design challenge"
              description="Unleash your creativity and craft intuitive, user-friendly designs that stand out. Whether it’s wireframes or full-fledged prototypes, this is your chance to impress the judges and wow the audience. Showcase your design thinking, usability skills, and aesthetic vision—let the challenge begin!"
            />
          </div>
        </section>

        <WhyParticipate reasons={reasons} />
        <RulesAndRegulation rules={rules} />
        <EventManagers managers={managers} />
      </section>

      {/* Event Managers Section */}
    </div>
  );
};

export default Page;
