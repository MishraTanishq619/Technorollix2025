import ButtonLanding from "@/components/sub-component/button-landing";
import EventConclusion from "@/components/sub-component/event-conclusion";
import EventIntro from "@/components/sub-component/event-intro";
import ManagerCard from "@/components/sub-component/manager-card";
import React from "react";

const page = () => {
  return (
    <div>
      <EventIntro
        imageUrl="/Rectangle 197.png"
        title="Master-Chef"
        registrations={346}
        pricepool={30000}
        description="Unleash your inner chef at our university's ultimate MasterChef event! Showcase your culinary skills, experiment with flavors, and compete in exciting challenges. Whether you're a kitchen novice or a seasoned cook, join us for a thrilling experience of creativity, taste, and teamwork!"
      />
      <div className="mt-16 mb-16">
        <h1 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h1>
        <p className="text-2xl font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white text-center max-w-4xl mx-auto">
          A recipe has no soul; you as the cook must bring soul to the recipe.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          WHY PARTICIPATE
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            <li>Exciting prizes worth ₹</li>
            <li>
              Opportunity for funding innovative culinary creations (as per OPJU
              Innovation Centre terms)
            </li>
            <li>Recognition certificates for all participating universities</li>
            <li>Participation certificates for all participants</li>
            <li>Special category-wise winning prizes</li>
            <li>
              Hands-on experience in creativity, presentation, and culinary
              mastery
            </li>
            <li>
              Reimbursement of one-way sleeper class fare for outside
              participants
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          RULES & REGULATION
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            <li>Two chances are given in case of battery or part failure.</li>
            <li>Maximum battery capacity: 3 4 A cell (2200 3000 mah)</li>
            <li>Drone Weight: 2KG.</li>
            <li>Drone size: 4 to 8 inches.</li>
            <li>Factory made drones are not allowed</li>
            <li>Participants must arrive 30 minutes before the event starts.</li>
          </ul>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT MANAGERS
        </div>
        <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of
          the managers listed below. They are here to help and ensure a smooth
          experience for you!
        </div>

        <ManagerCard />

        <ButtonLanding label="Register Now" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ManagerCard />
        <EventConclusion />
      </div>
    </div>
  );
};

export default page;
