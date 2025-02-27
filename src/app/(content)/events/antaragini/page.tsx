import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import WhyParticipate from "@/components/sub-component/why-participate";
import EventManagers from "@/components/sub-component/event-managers";

const Antaragini = () => {
  const rules = [
    "All participants must arrive at least 30 minutes before the event starts. Latecomers will not be allowed to perform",
    " No student can directly participate in the final round without clearing the previous rounds",
    "Inappropriate or vulgar clothing and songs are not allowed.",
    " Participants must submit their chosen song and background video to the event coordinator one day before their audition and performance.",
    "Students should be fully prepared with their song and outfit before the event.",
    "Performances will be judged based on talent, decency, and discipline.",
    " The judges' decision is final and must be accepted by all participants. No appeals or objections will be entertained.",
    "Participants will be eliminated after each round based on the judges' evaluation.",
    "Participants must respect event coordinators, judges, and fellow contestants at all times. Any misbehavior may lead to disqualification.",
  ];
  const reasons = ["Reason 1", "Reason 2", "Reason 3", "Reason 4", "Reason 5"];
  const managers = [
    { imageUrl: "/dallE.png", name: "Nikhil Patel", contact: 8305216569 },
    { imageUrl: "/dallE.png", name: "Rahul Dubey", contact: 1234567891 },
    { imageUrl: "/dallE.png", name: "Sangana Sahu", contact: 9876543210 },
  ];

  return (
    <div className="flex flex-col space-y-10">
      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/antaragini.png"
          title="Antaragni"
          registrations={20}
          pricepool={30000}
<<<<<<< HEAD
          time="8:00 am"
          venue="Bapuji Chawk"
          description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
        />
=======
          description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences." time={""} venue={""}        />
>>>>>>> 0e8f3e869c4c00178e4fba94a0f8d70d044f5ce6
      </section>

      {/* Theme section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="w-[397px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h2>
        <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px]">
          BOLLYWOOD
        </div>
      </section>

      <section>
        {/* Sub-Events section */}
        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            sub-events
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
            The following are the sub-events of this main event. Read the
            details carefully and choose the ones that best match your interests
            and expertise. Don't miss your chance to participate and showcase
            your skills!
          </div>
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="/Vector.svg"
              title="Dance Competition"
              description="Unleash your passion for dance at antaragni the ultimate dance competition!  Show off your moves, rhythm, and expression as you captivate the audience with your performance. Whether you specialize in classical, hip-hop, contemporary, or freestyle, this is your chance to shine on stage. Impress the judges and crowd with your energy, creativity, and stage presence!"
            />
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="Antaragni"
              description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
            />
          </div>
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="Antaragni"
              description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
            />
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="Antaragni"
              description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
            />
          </div>
        </section>
      </section>

      <section>
        <WhyParticipate reasons={reasons} />
        <RulesAndRegulation rules={rules} />
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Antaragini;
