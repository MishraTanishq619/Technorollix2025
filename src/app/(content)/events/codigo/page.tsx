import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import ButtonLanding from "@/components/sub-component/button-landing";
import ManagerCard from "@/components/sub-component/manager-card";

const Page = () => {
  return (
    <div className="flex flex-col space-y-10">
      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/techno-events-logo/antaragini.png"
          title="Codigo"
          registrations={20}
          pricepool={30000}
          description="Unlock your coding potential at our University’s premier Coding Event!! Participate in challenges, network with peers, and enhance your skills. Whether you are a beginner or a pro, join us for an unforgettable experience of innovation and collaboration."
          time="8:00 AM"
          venue="MP Hall"
        />
      </section>

      {/* Theme section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-[#ffad3c] text-5xl font-medium tracking-[2.88px] text-center">
          THEME
        </h2>
        <div className="text-white text-2xl font-medium text-center tracking-[5.28px]">
          <p>Dream your Fantasy, Code it in your Reality!!!</p>
        </div>
      </section>

      {/* Sub-Events Section */}
      <section>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[#ffad3c] text-5xl font-medium tracking-[2.88px] text-center uppercase">
            Sub-events
          </h2>
          <div className="text-white text-2xl text-center tracking-[5.28px]">
            The following are the sub-events of this main event. Read the details carefully and choose the ones that best match your interests and expertise. Don't miss your chance to participate and showcase your skills!
          </div>
        </div>

        {/* Sub-Events Cards Section */}
        <div className="flex justify-around m-20">
          <SubEventCard
            imageUrl="./Vector.svg"
            title="Code Competition"
            description="Showcase your problem-solving skills, logic, and speed as you tackle challenging coding problems. Compete with the best and prove your mastery!"
          />
          <SubEventCard
            imageUrl="./Rectangle 197.png"
            title="Design Challenge"
            description="Unleash your creativity and craft intuitive, user-friendly designs that stand out. Showcase your design thinking and usability skills."
          />
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
          WHY PARTICIPATE
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 text-white">
            <li>Exciting prizes worth ₹20,000</li>
            <li>Funding opportunity for innovative prototypes</li>
            <li>Recognition certificates for all participating universities</li>
            <li>Hands-on experience in new-age innovations</li>
            <li>Reimbursement of one-way Sleeper class fare for outside participants</li>
          </ul>
        </div>
      </section>

      {/* Rules & Regulations Section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
          RULES & REGULATIONS
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 text-white">
            <li>Arrive at the venue one hour before the event for setup.</li>
            <li>No exhibit should be dismantled before the event ends.</li>
            <li>First Round: 25 questions, time limit – 30 min.</li>
            <li>Qualification: Based on total participation.</li>
            <li>Second & Third Rounds: Time limit announced on the spot.</li>
            <li>The judging panel's decision is final.</li>
          </ul>
        </div>
      </section>

      {/* Event Managers Section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
          EVENT MANAGERS
        </h2>
        <div className="text-white text-2xl text-center tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of the managers listed below.
        </div>
        <div className="flex justify-center space-x-40 items-center mt-20">
          <ManagerCard imageUrl="/dallE.png" name="Lorem" contact={6260294300} />
          <ManagerCard imageUrl="/dallE.png" name="Lorem" contact={6371745801} />
          <ManagerCard imageUrl="/dallE.png" name="Lorem" contact={7853032508} />
        </div>
        <div className="mb-10">
          <ButtonLanding label="Register Now" />
        </div>
      </section>
    </div>
  );
};

export default Page;