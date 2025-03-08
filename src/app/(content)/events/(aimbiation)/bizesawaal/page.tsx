"use client";
import React from "react";
import EventIntro from "@/components/sub-component/event-intro";
import SubEventCard from "@/components/sub-component/sub-event-card";
import WhyParticipate from "@/components/sub-component/why-participate";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import { BsAward } from "react-icons/bs";
import EventManagers from "@/components/sub-component/event-managers";

const Page = () => {
  const managers = [
    {
      imageUrl: "/dallE.png",
      name: "Om Kumar Singh",
      contact: 7999425422,
    },
    {
      imageUrl: "/dallE.png",
      name: "Satyendra Vishwakar",
      contact: 7024332255,
    },
  ];
  const rules = [
    "Teams need to register themselves before or till the registration last date. After which no registrations would be entertained.",
    "Only the team leader will be able to register his/her team through unstop.",
    "Teams can be formed with minimum 3 members and maximum 4 members.",
    "The online quiz will consist of objective type or short answer type questions.",
    "The questions will revolve around business knowledge.",
    "Only team leaders can register and play the online quiz round on the team's behalf.",
    "All the questions have to be answered within 15 mins. However, there is no negative marking.",
    "The participants are requested to secure a good and reliable internet connection for participating successfully in the online round, any delay in submission due to the same will not be entertained.",
    "If any of the participants is found using unfair means to win the competition or committing any kind of misconduct, his/her team will be disqualified. It is up to the discretion of the Core Team of Biz - E - Sawaal, OPJU and their word will be Final.",
    "All disputes will be resolved by the Core Team of Biz-E-Sawaal, OPJU and their decision will be considered final.",
  ];
  const reasons = [
    "Enhancing Business Acumen and Critical Thinking: The quiz aims to deepen participants' knowledge of business, finance, and corporate affairs while fostering critical thinking, decision-making, and awareness of current economic trends",
    "Encouraging Competitive Learning and Networking: By promoting a spirit of healthy competition, teamwork, and public speaking, the event provides a platform for students, professionals, and business enthusiasts to connect, showcase their talent, and gain recognition",
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

      {/* Event Intro Section */}

      <section>
        <EventIntro
          imageUrl="/aimbiation-events-logo/bizesawaal.png"
          title="Biz E Sawaal"
          registrations={0}
          pricepool={6000}
          description="Biz E Sawaal is an engaging and competitive quiz event designed to test participants' knowledge
of the business world, including finance, economics, startups, and corporate trends."
          time="1:00 PM."
          venue="MP Hall"
        />
      </section>
      {/* Sub-Events Cards Section */}
      <section className="flex flex-col items-center justify-center my-20">
        <div className=" text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium font-['Poppins'] uppercase tracking-[3.75px]">
          Rounds
        </div>
        <div className="flex justify-around gap-10 m-20 mt-8">
          <SubEventCard
            Icon={BsAward}
            title="Round 1"
            description="Online Quiz Round"
          />
          <SubEventCard
            Icon={BsAward}
            title="Round 2"
            description="Offline Round "
          />
        </div>
      </section>
      <section className="mb-24">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium uppercase text-center mb-14">
          Rewards and Prizes
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc text-2xl space-y-4 font-['Inter'] leading-[32px] tracking-[3.75px] text-white">
            <li className="text-3xl font-bold list-none">Prize Details:</li>
            <li>
              1st Prize - Rs. 3,000 + Goodies (worth Rs. 1,000) + Certificates
            </li>
            <li>
              2nd Prize - Rs. 2,000 + Goodies (worth Rs. 500) + Certificates
            </li>
            <li>
              3rd Prize - Rs. 1,000 + Goodies (worth Rs. 500) + Certificates
            </li>
            <li>
              Consolation Prizes to finalists - Goodies (Total worth Rs. 2,000)
            </li>
          </ul>
        </div>

      </section>

      <WhyParticipate reasons={reasons} />
      <RulesAndRegulation rules={rules} />
      <EventManagers managers={managers} />
    </div>
  );
};

export default Page;
