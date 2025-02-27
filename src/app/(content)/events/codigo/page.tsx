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
          imageUrl="/techno-events-logo/codigo.png"
          title="Codigo"
          registrations={0}
          pricepool={20000}
          description="Unlock your coding potential at our University’s premier Coding Event!! Participate in challenges, network with peers, and enhance your skills. Whether you are a beginner or a pro, join us for an unforgettable experience of innovation and collaboration."
          time = "20-03-25 , 11:00 am"
          venue= "TB 09"
        />
      </section><br/><br/>

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
        {/* Sub-Events section */}
        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            sub-events
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          The following are the sub-events of this main event. Read the details carefully and choose the ones that best match your interests and expertise. Don't miss your chance to participate and showcase your skills!
          </div>
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-evenly m-20">


            <SubEventCard
              imageUrl="./Vector.svg"
              title="code competition"
              description="Showcase your problem-solving skills, logic, and speed as you tackle challenging coding problems. Whether you're a beginner or a pro, this is your chance to impress the judges and compete with the best. Write efficient code, optimize solutions, and prove your mastery—let the challenge begin!"
            />
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="design challenge"
              description="Unleash your creativity and craft intuitive, user-friendly designs that stand out. Whether it’s wireframes or full-fledged prototypes, this is your chance to impress the judges and wow the audience. Showcase your design thinking, usability skills, and aesthetic vision—let the challenge begin!"
            />
          </div>
        
        </section>
        
        <div className="flex flex-col items-center justify-center"></div>
        <div className="bg-transparent text-white p-6 md:p-12">
          <section className="mb-20">
            <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              WHY PARTICIPATE
            </h2>


            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-decimal pl-5 text-2xl space-y-2  font-['Inter'] leading-[29.08px] tracking-[3.75px]">
                <li>Exciting prizes worth ₹20,000</li>
                <li>Funding opportunity for innovative prototypes (subject to OPJU Innovation Centre terms)</li>
                <li>Recognition certificates for all participating universities</li>
                <li>Participation certificates for all participants
                Special category-wise winning prizes</li>
                <li>Hands-on experience in new-age innovations</li>
                <li>Reimbursement of one-way Sleeper class fare for outside participants</li>
              </ul>
                
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              RULES & REGULATION
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-decimal pl-5 text-2xl space-y-2  font-['Inter'] leading-[29.08px] tracking-[3.75px]">
                <li>Arrive at the venue one hour before the event for setup.</li>
                <li>Tables and electricity connections will be provided.</li>
                <li>No exhibit should be dismantled before the event ends.</li>
                <li>First Round:25 questions, time limit– 30 min. </li>
                <li>Qualification: The number of participants advancing will be decided on the spot based on total participation.</li>
                <li>Second Round: Solve any 3 out of 5 problems (time limit announced on the spot).</li>
                <li>Third Round:   Solve all 3 questions (time limit announced on the spot).</li>
                <li>Participants must maintain event decorum.</li>
                <li>The judging panel's decision is final.</li>
              </ul>
            </div>
          </section>
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
          <ButtonLanding label="Register Now" link="/dashboard"/>
        </div>
      </section>
    </div>
  );
};

export default Page;