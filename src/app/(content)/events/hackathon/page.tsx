import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import { BsAward } from 'react-icons/bs';
import EventManagers from '@/components/sub-component/event-managers';

const Page = () => {
  const managers = [

    { imageUrl: "/managers/Hackathon/Satendra.jpeg", name: "Satendra Kumar", contact: 9301196473 }

  ];
  return (
    <div className="space-y-10">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>
      <EventIntro
        imageUrl="/techno-events-logo/hackathon.png"
        title="hackathon"
        registrations={0}
        pricepool={50000}
        time='21-03-25, 2:00 - 6:00 pm'
        venue=''
        description="Join us for University Hackathon, a thrilling coding competition where innovative minds come together to solve real-world challenges. Whether you're a beginner or an expert, this is your chance to showcase your skills, collaborate, and create impactful solutions."
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          {/* Rounds */}
          <section className="flex flex-col items-center gap-8">
            <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
              ROUNDS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SubEventCard
                Icon={BsAward}
                title="Round 1: Idea Submission"
                description="Participants submit problem statements and proposed solutions."
              />
              <SubEventCard
                Icon={BsAward}
                title="Round 2: Prototype Development"
                description="Shortlisted teams develop a working prototype."
              />
              <SubEventCard
                Icon={BsAward}
                title="Round 3: Functionality and Final Pitch"
                description="Teams present their solutions to a panel of judges."
              />
            </div>
          </section><br/><br/>

          {/* Evaluation Process */}
          <section className="my-20">
            <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
              EVALUATION PROCESS
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl  tracking-[3.75px]">
                <li>Innovation – Creativity and uniqueness of the solution</li>
                <li>Technical Implementation – Quality of code and feasibility</li>
                <li>Impact – Relevance and potential real-world application</li>
                <li>User Experience – Usability</li>
                <li>Presentation – Clarity and effectiveness of the final pitch</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Event Managers */}
      <EventManagers managers={managers} />
    </div>
  );
};

export default Page;