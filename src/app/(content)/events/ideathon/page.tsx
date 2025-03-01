import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card'; // Ensure the correct path
import ManagerCard from '@/components/sub-component/manager-card'; // Ensure the correct path
import ButtonLanding from '@/components/sub-component/button-landing'; // Ensure the correct path
import { IoMdArrowRoundForward } from "react-icons/io";

const Page = () => {
  return (
    <div className="Ideathon">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>
      <EventIntro
        imageUrl="/techno-events-logo/ideathon.png"
        title="Ideathon"
        registrations={300}
        pricepool={18000}
        description="An Ideathon is an engaging brainstorming event where individuals collaborate to address pressing challenges through innovative solutions. Participants work in teams, utilizing design thinking to develop viable ideas across diverse subjects like marketing, philosophy, and science."
        time='20-03-2025, 11:30 AM'
        venue='EE Seminar Hall(FB-14)'
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12 flex flex-col items-center space-y-32">
          <section className="my-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              WHY PARTICIPATE
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase">
                <li>Win ₹18,000 and gain recognition.</li>
                <li>Boost skills in problem-solving, design thinking, and presentation.</li>
                <li>Create real-world impact with innovative solutions.</li>
                <li>Network with experts and like-minded innovators.</li>
                <li>Enhance your resume with a standout achievement.</li>
                <li>Challenge yourself to think creatively under pressure.</li>
              </ul>
            </div>
          </section>
          
          <section className="flex flex-col items-center gap-8">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">ROUNDS</h2>
            <div className="flex justify-center w-full">
                <SubEventCard
                  Icon={IoMdArrowRoundForward}
                  title="ROUND 1"
                  description="There will be a single round."
                />
            </div>
          </section>
          
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              RULES & REGULATIONS
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase">
                <li>Arrive at the venue 15 minutes before the event starts.</li>
                <li>Submit an abstract (max 400 words) summarizing the idea before the event.</li>
                <li>The idea must be innovative and address existing problems.</li>
                <li>Participants can compete individually or in teams.</li>
                <li>Winners are determined based on points earned.</li>
                <li>Presentations must be completed within 8 minutes.</li>
                <li>A warning bell will ring at 6 minutes, signaling the last 2 minutes.</li>
                <li>A 2-minute query round follows each presentation.</li>
              </ul>
            </div>
          </section>
        
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              JUDGING CRITERIA
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <p className="mb-4 text-2xl text-white uppercase">
                Each idea is evaluated on the following criteria, with a maximum of 20 points per category (Total 100 points):
              </p>
              <ul className="list-disc pl-5 text-2xl text-white space-y-2 uppercase">
                <li>Uniqueness of the idea</li>
                <li>Feasibility of the proposed solution</li>
                <li>Presentation style</li>
                <li>Response to questions from judges</li>
                <li>Scalability of the idea</li>
              </ul>
            </div>
          </section>
        
          <section>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">EVENT MANAGERS</h2>
              <p className="w-[1023px] text-center text-white text-2xl font-normal tracking-[5.28px]">
                For any queries regarding the event, feel free to reach out to any of the managers listed below. They are here to help and ensure a smooth experience for you!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                <ManagerCard imageUrl="/Event-Managers/Aryan mishra(Ideathon).jpg" name="Aryan Mishra" contact={7205993715} />
                <ManagerCard imageUrl="/Event-Managers/Ashutosh sahu (ideathon).jpg" name="Ashutosh Sahu" contact={9776565942} />
                <ManagerCard imageUrl="/Event-Managers/Priyanka Sao (Ideathon). jpg" name="Priyanka Sao" contact={8305725196} />
                <ManagerCard imageUrl="/Event-Managers/Gitika sahu ( ideathon).jpg" name="Gitika Sahu" contact={6268858077} />
                <ManagerCard imageUrl="/Event-MAnagers/Kumkum singh( ideathon).jpg" name="Kumkum Singh" contact={8889702577} />
              </div>
              <div className="mb-10 mt-10">
              <ButtonLanding label="Register Now" link="/dashboard" />

              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
