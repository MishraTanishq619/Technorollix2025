import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import ManagerCard from '@/components/sub-component/manager-card';
import ButtonLanding from '@/components/sub-component/button-landing';

const Page = () => {
  return (
    <div className="Hackathon">
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
        registrations={300}
        pricepool={60000}
        time='8 am'
        venue='MP Hall'
        description="Join us for University Hackathon, a thrilling coding competition where innovative minds come together to solve real-world challenges. Whether you're a beginner or an expert, this is your chance to showcase your skills, collaborate, and create impactful solutions."
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          {/* Rounds */}
          <section className="flex flex-col items-center gap-8">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              ROUNDS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SubEventCard
                Icon={}
                title="Round 1: Idea Submission"
                description="Participants submit problem statements and proposed solutions."
              />
              <SubEventCard
                Icon={}
                title="Round 2: Prototype Development"
                description="Shortlisted teams develop a working prototype."
              />
              <SubEventCard
                Icon={}
                title="Round 3: Functionality and Final Pitch"
                description="Teams present their solutions to a panel of judges."
              />
            </div>
          </section><br/><br/>

          {/* Evaluation Process */}
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              EVALUATION PROCESS
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl uppercase tracking-[6.72px]">
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
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-[#ffad3c] text-5xl font-medium uppercase">
            EVENT MANAGERS
          </div><br/><br/>
          <div className="text-center text-white text-2xl font-normal">
            For any queries regarding the event, feel free to reach out to any of the managers listed below.
          </div>

          <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Bhavana Verma" contact={9407916405}/>
            <ManagerCard imageUrl="/dallE.png" name="Manisha Patel" contact={6268539090}/>
          </div>
          <div className="mb-10">
          <ButtonLanding label="Register Now" link="/dashboard" />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;