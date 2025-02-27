"use client";
import ButtonLanding from "@/components/sub-component/button-landing";
import React from "react";
import EventIntro from "@/components/sub-component/event-intro";
import SubEventCard from "@/components/sub-component/sub-event-card";
import WhyParticipate from "@/components/sub-component/why-participate";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import ManagerCard from "@/components/sub-component/manager-card";

const Page = () => {
  const rules = [
    "No third party tools or hacks are allowed in the game. If anyone caught in suspicious activity or act his/her team will be disqualified from the game immediately.",
    "In case if any person is caught in using third party tools, the whole match will be replayed again.",
    "Kindly bring your own headsets and earphones, organizing committee won’t provide headsets and all.",
    "Please stick to the timings, organizing committee won’t wait for the late teams, if facing issuewhile joining the lobby please contact the coordinators accordingly.",
    "Room ID and Password will be shared on the Whatsapp Group of the BGMI/FreeFire group.",
    "No emulator or tablet players are allowed in this tournament for BGMI/Freefire.",
    "Every match results will be shared on the Whatsapp Group after the match.",
    "Overall Points Table will be shared on the group after all the matches. ",
    "For Valorant, every participants have to bring his/her own laptops.",
  ];
  const reasons = [
    "Exciting prizes upto ₹20000",
    "Opportunity for funding innovative gaming projects (as per OPJU Innovation Centre terms)",
    "Recognition certificates for all participating universities",
    "Participation certificates for all gamers.",
    "Special category-wise winning prizes",
    "Hands-on experience in competitive gaming, strategy, and teamwork",
    "Reimbursement of one-way Sleeper class fare for outside participants",
  ];

  return (
    <div className="flex flex-col space-y-10">
      {/* Event Intro Section */}

      <section>
        <EventIntro
          imageUrl="/techno-events-logo/gamefusion.png"
          title="GAME FUSION"
          registrations={0}
          pricepool={20000}
          description="The Lan Event is a high-energy gaming extravaganza designed to
bring together the gaming community within our college. It's an immersive experience
that transcends traditional gaming, creating a platform for participants to showcase their
skills, engage in friendly competition, and celebrate the spirit of gaming."
          time="21-03-25 , 12:00 pm"
          venue="TB01 , TB05 , TB07 "
        />
      </section>

      {/* Theme section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="w-[397px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h2>
        <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px]">
          Unleash the Gaming Warriors: A Battle for Supremacy in the Virtual
          Realm of Gaming!
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
              imageUrl="/gamefusion/bgmi.png"
              title="BGMI"
              description="Show off your shooting skills, tactical gameplay, and survival instincts in an intense battle royale. Whether you're a lone wolf or part of a squad, this is your chance to impress the judges and thrill the crowd. Loot, strategize, and outlast your opponents—let the battle begin!"
            />
            <SubEventCard
              imageUrl="/gamefusion/freefire.png"
              title="FREEFIRE"
              description="Show off your shooting skills, tactical gameplay, and survival instincts in an intense battle royale. Whether you're a lone wolf or part of a squad, this is your chance to impress the judges and thrill the crowd. Loot, strategize, and outlast your opponents—let the battle begin!"
            />
          </div>
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="/gamefusion/valorant.png"
              title="VALORANT"
              description="Show off your shooting skills, tactical gameplay, and survival instincts in an intense battle royale. Whether you're a lone wolf or part of a squad, this is your chance to impress the judges and thrill the crowd. Loot, strategize, and outlast your opponents—let the battle begin!"
            />
          </div>
        </section>
      </section>
      <section>
      <div className="flex justify-evenly p-8">
        {[
          { title: "ROUND 1", subtitle: "QUALIFICATION ROUND" },
          { title: "ROUND 2", subtitle: "FINAL ROUND"},
         
        ].map((round, index) => (
          <div
            key={index}
            className="border-2 border-yellow-500 p-6 rounded-lg text-center w-96 text-white bg-opacity-20 bg-black"
          >
            <h2 className="text-lg font-bold">{round.title}</h2>
            <p className="text-sm mt-2">{round.subtitle}</p>
          </div>
        ))}
      </div>
      </section>
      <section>
        <WhyParticipate reasons={reasons} />
        <RulesAndRegulation rules={rules} />
      </section>
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            EVENT MANAGERS
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
            For any queries regarding the event, feel free to reach out to any
            of the managers listed below. They are here to help and ensure a
            smooth experience for you!
          </div>

          <div className="flex justify-center space-x-10 items-center mt-20">
            <ManagerCard
              imageUrl="/dallE.png"
              name="Saket Bhagat"
              contact={6203182795}
            />
            <ManagerCard
              imageUrl="/dallE.png"
              name="Sarvesh Rathore"
              contact={8349374721}
            />
            <ManagerCard
              imageUrl="/dallE.png"
              name="Shubham Singh Baghel"
              contact={6296507314}
            />
            <ManagerCard
              imageUrl="/dallE.png"
              name="Rohan Prasad"
              contact={7903654631}
            />
            <ManagerCard
              imageUrl="/dallE.png"
              name="Devwrat"
              contact={6263757750}
            />
          </div>
          <ButtonLanding label="Register Now" />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Page;
