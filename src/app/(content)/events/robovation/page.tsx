import ButtonLanding from "@/components/sub-component/button-landing";
import EventIntro from "@/components/sub-component/event-intro";
import ManagerCard from "@/components/sub-component/manager-card";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import SubEventCard from "@/components/sub-component/sub-event-card";
import WhyParticipate from "@/components/sub-component/why-participate";
import React from "react";
import { BsRobot } from "react-icons/bs";
import { FaFlagCheckered } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";

const page = () => {
  const rules = [
    " This is a racing event so the fastest and most balanced robot will win. ",
    "Robot should be as per the given specifications.",
    "Each team can have a maximum of Four members.",
    "Students from different institutes can form a team.",
    "Each member of the team must contain the identity card of his/her respective institute.",
    "The robot should not damage the arena.",
    "No test practice will be allowed in the arena.",
    "The robot must not leave behind any of its parts during the run; else it will result in disqualification.",
    "Unethical behavior could lead to disqualification. Faculty coordinators have all the rights to take final decisions for any matter during the event. and Judge's decision will be considered final.",
    "Certificates of Participation will be given to all the teams participating in the event ,but not to the teams that get disqualified due to disobeying any of the competition rules.Coordination committee reserves the right to add or update any rule.",
  ];

  return (
    <div>

      
      <EventIntro
        venue=" BAPUJI CHOWK (OPJU)"
        time={"21-03-25 , 10:00 am"}
        imageUrl="/techno-events-logo/robovation.png"
        title="Robovation"
        registrations={0}
        pricepool={40000}
        description="OPJU invites you to an extraordinary culinary battleground, where flavors meet creativity and passion transforms into perfection. Step into MasterChef and let the world savor your signature taste!."
      />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>
      <div className="mt-16 mb-16"></div>
      <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        SUB EVENTS
      </h1>
      <p className="text-2xl font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white text-center max-w-4xl mx-auto">
        Robovation features three exciting sub-events. Robo Race tests speed and
        precision as robots navigate an obstacle-filled track. Robo Soccer
        challenges teams to score goals using their self-built bots. Robo War is
        a fierce battle where combat robots fight to dominate the arena.
      </p>
      <div className="flex justify-evenly m-20">
        <SubEventCard
          Icon={BsRobot}
          title="ROBO WAR"
          description="Robo war is the most exciting challenge of this event It celebrates the sport of Robotic Combat through a contest of 
battling machines. This game gives the opportunity to youngsters to design, build and control combat robots to 
demonstrate their creativity, engineering skills and driving ability. 
The most rewarding part of designing bots is that students have fun, and work together as a team."
        />
        <SubEventCard
          Icon={FaFlagCheckered}
          title="ROBO RACE"
          description="Design a robot wireless or Bluetooth control within the specified dimensions that can be operated 
manually and can travel through all turns of the track. The robot that will complete the specified task in the 
least time will be the winner. and not allowed to skip any obstacles or hurdles."
        />
      </div>
      <div className="flex justify-evenly m-20">
        <SubEventCard
          Icon={IoFootballOutline}
          title="FAST LINE FOLLOWER"
          description="Team to build own autonomous robot within the specified dimensions to achieve the maximum speed on                              
given track and reach the destination in minimum time. The robot must start behind the starting point and is considered to have 
crossed the finishing line if any part of the robot crosses it in a full lap of the course. The robot must follow the black line. The 
competition area has a special place defined for the robot’s operation."
        />
        <SubEventCard
          Icon={BsRobot}
          title="ROBO SOCCER"
          description="DESCRIPTION: 
Robo soccer is one of the Famous challenges of robovation in this event teams comes with single 
robot and chase ball around the big size of arena with the aim to kick more goals than the opponent 
these games give opportunity to youngsters to solve robotic challenges, built creative bots while 
learning engineering technology. the most rewarding part of designing bots is that student have fun, 
work together as a team and robot specially design for robo soccer match. the event is aimed at 
testing the flipping, kicking maneuvering skills and control of the robot. The event mainly consists of 
ROUND 1 AND ROUND 2."
        />
      </div>
      {/* <section className="mb-20">
        <WhyParticipate reasons={reasons} />
      </section> */}

      <section className="mt-20">
        <RulesAndRegulation rules={rules} />
      </section>

      <section className="flex flex-col items-center justify-center">
      <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT MANAGERS
        </h2>
        <div className="text-white text-2xl text-center tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of the managers listed below.
        </div>
        <div className="flex justify-center space-x-40 items-center mt-20">
          <ManagerCard imageUrl="/Event-Managers/Harsh tiwari ( robovation)_.jpg" name="Harsh verma" contact={7389245531} />
          <ManagerCard imageUrl="/Event-Managers/udit vardhan singh( robovation)_.jpg" name="Udit Vardhan Singh" contact={8298558875} />
          <ManagerCard imageUrl="/dallE.png" name="Amrit Kumar" contact={8235993302} />
          <ManagerCard imageUrl="/dallE.png" name="Kushal Kumar Barsiwal " contact={7987829224} />
        </div>
        <div className="mb-10">
          <ButtonLanding label="Register Now" link="/dashboard"/>
        </div>
      </section>
    </div>
  );
};

export default page;
