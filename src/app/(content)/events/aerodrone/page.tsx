import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import WhyParticipate from "@/components/sub-component/why-participate";
import ManagerCard from "@/components/sub-component/manager-card";
import ButtonLanding from "@/components/sub-component/button-landing";
import React from "react";

const Aerodrone = () => {
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
  const reasons = [""];
  const managers = [
    { imageUrl: "/dallE.png", name: "Nikhil Patel", contact: 8305216569 },
    { imageUrl: "/dallE.png", name: "Rahul Dubey", contact: 1234567891 },
    { imageUrl: "/dallE.png", name: "Sangana Sahu", contact: 9876543210 },
  ];

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      <EventIntro
        imageUrl="/techno-events-logo/aerodrone.png"
        title="Aerodrone"
        registrations={0}
        pricepool={20000}
        description="A drone racing event that tests Mechanical, Electrical, and CS skills. Participants' drones will undergo rigorous testing in multiple rounds to showcase their UAVs' full potential.."
        time="22-03-25 , 4:00 pm"
        venue="Volley Ball Court"
      />
      <section className="flex flex-col items-center justify-center m-40">
        <h2 className="w-[397px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h2>
        <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px] uppercase">
          “Innovation, transformation, and vitalizing equipment, knowledge, and
          skill”
        </div>
      </section>

      <div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Accuracy Test */}
          <div className="bg-red-800 p-6 rounded-2xl shadow-lg border border-yellow-500">
            <div className="text-2xl font-semibold">Accuracy Test</div>
            <p className="mt-2 text-gray-200 text-sm">
              Evaluates drone movement—forward, backward, elevation, and
              descent.
            </p>
          </div>

          {/* Obstacle Avoiding Test */}
          <div className="bg-red-800 p-6 rounded-2xl shadow-lg border border-yellow-500">
            <div className="text-2xl font-semibold">Obstacle Avoiding Test</div>
            <p className="mt-2 text-gray-200 text-sm">
              Measures how efficiently the drone avoids obstacles and reaches
              its destination.
            </p>
          </div>

          {/* Final Round */}
          <div className="bg-red-800 p-6 rounded-2xl shadow-lg border border-yellow-500">
            <div className="text-2xl font-semibold">Final Round</div>
            <p className="mt-2 text-gray-200 text-sm">
              A race where drones compete to complete the track in the shortest
              time.
            </p>
          </div>
        </div>
      </div><br/><br/>

      <section className="mb-20">
    <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
    WHY PARTICIPATE IN AERODRONE:
    </h2>

    <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <p className="list-decimal pl-5 text-2xl space-y-4 font-['Inter']  leading-10 tracking-[3.75px] text-white">
        Skill Enhancement: Engage in creative challenges that refine your design, modeling, and event coordination abilities.
        Exposure and Recognition: Showcase your talent to a broader audience, gaining visibility and potential accolades.
        Networking Opportunities: Connect with industry professionals, peers, and mentors, fostering valuable relationships.
        Personal Growth: Build confidence, resilience, and adaptability by stepping out of your comfort zone.<br/><br/>
        
        </p>
    </div>
</section>

      <RulesAndRegulation rules={rules} />

            {/* Event Managers Section */}
            <section className="flex flex-col items-center justify-center">
            <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT MANAGERS
        </h2>
        <div className="text-white text-2xl text-center tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of the managers listed below.
        </div>
        <div className="flex justify-center space-x-40 items-center mt-20">
          <ManagerCard imageUrl="/Event-MAnagers/Ankit Mandal Aerodrone.jpg" name="Ankit Mandal " contact={9693407573} />
        </div>
        <div className="mb-10">
          <ButtonLanding label="Register Now" link="/dashboard"/>
        </div>
      </section>

    </div>
  );
};

export default Aerodrone;
