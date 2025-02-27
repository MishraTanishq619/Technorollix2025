import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import WhyParticipate from "@/components/sub-component/why-participate";
import EventManagers from "@/components/sub-component/event-managers";
import { FaMusic, FaFilm, FaMicrophone, FaRunning } from "react-icons/fa";

const Antaragni = () => {
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
  const reasons = ["Exciting prizes worth ₹ 20000", "Funding opportunity for innovative artistic projects (as per OPJU Innovation Centre terms)", "Recognition certificates for all participating universities", "Participation certificates for all participants", "Special category-wise winning prizes","Hands-on experience in creativity, performance, and storytelling","Reimbursement of one-way Sleeper class fare for outside participants"];
  const managers = [
    { imageUrl: "/dallE.png", name: "Nikhil Patel", contact: 8305216569 },
    { imageUrl: "/dallE.png", name: "Rahul Dubey", contact: 1234567891 },
    { imageUrl: "/dallE.png", name: "Sangana Sahu", contact: 9876543210 },
  ];

  return (
    <div className="flex flex-col space-y-10">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <img
            src="/Eventdedicatedbg.svg"
            className="w-full h-auto opacity-150"
            alt="Scrolling Background"
          />
        </div>
      {/* Event Intro Section */}
      <section>

        <EventIntro
          imageUrl="/techno-events-logo/antaragni.png"
          title="Antaragni"
          registrations={20}
          pricepool={20000}
          description="This event is a vibrant platform for students to showcase their creative talents in a meaningful way. From dancing,
                       singing, and rapping to short film-making and fusion performances, it brings together a variety of art forms on
                       one stage. It is a celebration of passion, creativity, and cultural diversity, allowing students to express themselves
                       through music, movement, and storytelling. Whether performing solo or in groups, participants get a chance to
                       shine, entertain, and inspire."
          time="20-03-25 , 7:30 pm"
          venue="UNIVERSITY PLAYGROUND"
        />
      </section>

      {/* Theme section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="w-[397px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h2>
        <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px] uppercase">
          Fusion Fiesta
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
              Icon={FaRunning}
              title="DANCE COMPETITION"
              description="Unleash your passion for dance at antaragni the ultimate dance competition!  Show off your moves, rhythm, and expression as you captivate the audience with your performance. Whether you specialize in classical, hip-hop, contemporary, or freestyle, this is your chance to shine on stage. Impress the judges and crowd with your energy, creativity, and stage presence!"
            />
            <SubEventCard
              Icon={FaMusic}
              title="SINGING COMPETITION"
              description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
            />
          </div>
          <div className="flex justify-around m-20">
            <SubEventCard
              Icon={FaFilm}
              title="SHORT FILM PRESENTATION"
              description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
            />
            <SubEventCard
              Icon={FaMicrophone}
              title="RAP BATTLE"
              description="A Treasure Hunt is an engaging activity where participants follow a series of clues or challenges to locate hidden objects or specific destinations. Designed to foster teamwork, problem-solving, and exploration, treasure hunts can be tailored for various settings and audiences."
            />
          </div>
        </section>
      </section>
      <section>
      <div className="grid grid-cols-2 gap-6 p-8 m-auto">
        {[
          { title: "ROUND 1", subtitle: "AUDITION - 1", detail: "(INTERNAL)" },
          { title: "ROUND 2", subtitle: "AUDITION - 2", detail: "(OUTSIDERS)" },
          { title: "ROUND 3", subtitle: "SCREENING", detail: "" },
          { title: "ROUND 4", subtitle: "FINAL DEMO", detail: "" },
        ].map((round, index) => (
          <div
            key={index}
            className="border-2 border-yellow-500 p-6 rounded-lg text-center text-white bg-opacity-20 bg-black"
          >
            <h2 className="text-2xl text-[#EDE0E0] font-bold mb-5">{round.title}</h2>
            <p className="text-xl text-[#EDE0E0] tracking-widest font-['Inter'] mt-2">{round.subtitle}</p>
            {round.detail && <p className="text-xl font-['Inter'] tracking-[6px] text-[#EDE0E0] mt-1">{round.detail}</p>}
          </div>
        ))}
      </div>
      </section>

      <section>
        <WhyParticipate reasons={reasons} />
        <RulesAndRegulation rules={rules} />
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Antaragni;
