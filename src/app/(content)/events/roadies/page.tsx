import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import WhyParticipate from "@/components/sub-component/why-participate";
import React from "react";

const Roadies = () => {
  const managers = [
    {
      imageUrl: "/dallE.png",
      name: "Praveen Raj Pandey",
      contact: 8839448700,
    },
    {
      imageUrl: "/dallE.png",
      name: "Naman Prabhakar",
      contact: 7011221036,
    },
    {
      imageUrl: "/dallE.png",
      name: "Naitik Sao",
      contact: 7880215792,
    },
    {
      imageUrl: "/dallE.png",
      name: "Somya Patel",
      contact: 9755593747,
    }
  ];
  const reasons = [
    "Exciting prizes worth ₹ 10,000",
    "Opportunity to showcase your strength, strategy, and endurance.",
    "Recognition certificates for all participating universities",
    "Participation certificates for all participants",
    "Special category-wise winning prizes",
    "Hands-on experience in adventure, teamwork, and problem-solving",
    "Reimbursement of one-way sleeper class fare for outside participants"
  ];
  const rules = [
    "All participants must arrive 30 minutes before the event starts.",
    "Only those who fill out the audition form will be considered as participants.",
    "No student will be allowed direct participation in the final round; they must qualify through auditions.",
    "Participants must maintain discipline and avoid inappropriate behavior such as hooting, using slangs, or bullying.",
    "Proper sports attire is mandatory (trousers, t-shirts, sports shoes).",
    "Follow all instructions and guidelines provided by the event managers.",
    "Consumption of alcohol or illegal substances during the event is strictly prohibited for all."
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
        venue={"Bus Parking Area"}
        time={"20-03-25, 1:30 am "}
        imageUrl="/techno-events-logo/roadies.png"
        title="Roadies"
        registrations={0}
        pricepool={10000}
        description="Welcome to   Roadies  , the ultimate test of skill and endurance! Join us at the University for an adrenaline-packed event filled with sports-inspired challenges. From obstacle courses to team relays, Roadies promises to push your limits and ignite your competitive spirit. Are you ready to conquer the road ahead?"
      />
      <div className="">
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          THEME
        </h1>
        <p className="text-2xl font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white text-center max-w-4xl mx-auto">
          Adventure / Survival
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          ROUNDS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2  font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white">
            <li> There will be 5 rounds </li>
            <li>Tasks for each round will be declared on the spot.</li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          JUDGEMENT CRITERIA:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2  font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white">
            <li> Evaluation will be based on the following parameters: </li>
            <li>Physical ability of the participant.</li>
            <li>Adaptability to different challenges.</li>
          </ul>
        </div>
      </section>

      <WhyParticipate reasons={reasons} />
      <RulesAndRegulation rules={rules} />
      <EventManagers managers={managers} />
    </div>
  );
};

export default Roadies;
