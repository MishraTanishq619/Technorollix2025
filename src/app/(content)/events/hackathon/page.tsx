import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import ManagerCard from '@/components/sub-component/manager-card';

const Page = () => {
  return (
    <div className="Hackathon">
      <EventIntro
        imageUrl=""
        title="hackathon"
        registrations={300}
        pricepool={60000}
        time='8 am'
        venue='Opju'
        description="The OPJU HackSprint 2025 is a hackathon event at OP Jindal University that aims to inspire students to use their creativity to develop innovative, cost-effective, and practical solutions with code, creating a sustainable impact through technology."
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          {/* Problem Statements */}
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              PROBLEM STATEMENT
            </h2>

            <h3 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              PID 2405 (DISASTER MANAGEMENT)
            </h3>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <p className="text-2xl uppercase tracking-[6.72px]">
                Projection of the extent of inundation corresponding to the forecasts of flood levels in a river.
                Many states in India experience regular flooding, especially during the monsoon season. The Central
                Water Commission (CWC) issues flood warnings based on water gauge levels, but assessing the spatial
                extent of flooding remains a challenge. Participants are expected to develop an AI-ML-based GIS
                application to process flood imagery and predict inundation levels using open-source software.
              </p>
            </div>
          </section>

          {/* Other Problem Statements */}
          <section className="mb-20">
            <h3 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              PID 2402 (HEALTH & FITNESS)
            </h3>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <p className="text-2xl uppercase tracking-[6.72px]">
                Fitness or Exercise Assistant. Create a digital assistant that provides personalized workout plans,
                tracks progress, offers nutritional guidance, and motivates users to stay active.
              </p>
            </div>
          </section>

          {/* Why Participate */}
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              WHY PARTICIPATE
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl uppercase tracking-[6.72px]">
                <li>Win ₹35,000 – Compete for a big cash prize!</li>
                <li>Boost Skills – Enhance coding, AI-ML, GIS, and problem-solving abilities.</li>
                <li>Real-World Impact – Solve critical issues in disaster management, mental health, fitness, and education.</li>
                <li>Networking – Connect with experts, mentors, and fellow innovators.</li>
                <li>Resume Boost – Stand out with a prestigious hackathon achievement.</li>
                <li>Challenge Yourself – Work on innovative solutions under time constraints.</li>
              </ul>
            </div>
          </section>

          {/* Rules & Regulations */}
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              RULES & REGULATIONS
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl uppercase tracking-[6.72px]">
                <li>Team Size – 2 to 3 members per team.</li>
                <li>Working Solutions Only – Non-functional ideas won’t be considered.</li>
                <li>3 Rounds – Progress must be presented via PPT in each round.</li>
                <li>No Plagiarism – Code will be checked for originality.</li>
                <li>Uniqueness – Solutions must be innovative.</li>
                <li>One Winner per Problem – Only one team wins per problem statement.</li>
                <li>Final Round at Technorollix – Solutions presented before a jury.</li>
                <li>Invited Judges – Top teams will pitch to expert judges.</li>
              </ul>
            </div>
          </section>

          {/* Rounds */}
          <section className="flex flex-col items-center gap-8">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              ROUNDS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SubEventCard
                imageUrl=""
                title="ROUND 1 - PRESENTATION"
                description="Solution Idea – Define the problem & basic solution.
                Innovation – Highlight uniqueness & creativity.
                Solution Approach – Outline the development roadmap.
                Feasibility – Show technical strength & viability.
                Execution Timeline – Provide a clear prototype schedule."
              />
              <SubEventCard
                imageUrl=""
                title="ROUND 2 - PROTOTYPE"
                description="Prototype Development - Progress in building a working model.
                Improvements - Enhancements from mentor feedback.
                Integration - How well different components work together.
                Usability - User-friendliness & ease of adoption.
                Teamwork - Effective collaboration & individual contributions."
              />
              <SubEventCard
                imageUrl=""
                title="ROUND 3 - FUNCTIONALITY"
                description="Functionality/Relevance - How well it meets requirements.
                Performance/Final Demo - Real-world effectiveness.
                User Experience & Design - Interaction quality & aesthetics.
                Market Readiness & Impact - Viability for real-world use.
                Implementation & Future Scope - Deployment strategy & future growth."
              />
            </div>
          </section>
        </div>
      </div>

      {/* Event Managers */}
      <div className="text-center text-[#ffad3c] text-5xl font-medium uppercase">
        EVENT MANAGERS
      </div>
      <div className="text-center text-white text-2xl font-normal">
        For any queries regarding the event, feel free to reach out to any of the managers listed below.
      </div>

      {/* Manager Images */}
      <div className="flex justify-center space-x-4 mt-6">
        <img src="/Group 37147.png" alt="profile" />
        <img src="/Group 37147.png" alt="profile" />
        <img src="/Group 37147.png" alt="profile" />
      </div>
    </div>
  );
};

export default Page;
