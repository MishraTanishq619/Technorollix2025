import React from 'react';
import EventConclusion from '@/components/sub-component/event-conclusion';
import EventIntro from '@/components/sub-component/event-intro';
import ManagerCard from '@/components/sub-component/manager-card'; // Ensure this is the correct path

const page = () => {
  return (
    <div className="">
      <EventIntro
        imageUrl="/card.png"
        title="Among-us" // Updated title
        registrations={300}
        pricepool={89000}
        description="Among Us in Real Life - College Fest Edition is a thrilling social deduction game where players become Crewmates or Impostors, completing tasks or secretly eliminating others. Designed for strategy, teamwork, and quick thinking, the event features multiple rounds, increasing challenges, and a competitive tournament format. It fosters engagement, problem-solving, and communication skills, making it a fun and immersive experience for all participants."
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              WHY PARTICIPATE
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <p>
              Craft is the vehicle for expressing your vision. Craft is the visible edge of Art. Here we are with "Kalakriti," which is a unique event driven by our artists' ideas, the context of space, season, and the vibes of the region. You will perceive "Fiction turning into Reality." You are going to witness a different field of abstract painting, fine arts photography, sculpture, and many more.

              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              RULES & REGULATION
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
                <li>No Running or Physical Contact – Walk only; impostors eliminate with a light tap.</li>
                <li>No Revealing Roles – Keep your identity secret until eliminated.</li>
                <li>Follow Task & Sabotage Rules – Crewmates complete tasks; impostors can briefly delay them.</li>
                <li>Emergency Meetings & Voting – Discussions happen only when a "dead body" is found.</li>
                <li>Game Master’s Decision is Final – Any rule violations or disputes will be handled by the Game Master.</li>
              </ul>
            </div>
          </section>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            EVENT MANAGERS
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
            For any queries regarding the event, feel free to reach out to any of
            the managers listed below. They are here to help and ensure a smooth
            experience for you!
          </div>
        </div>
      </div>

      <div
        className="w-[303px] h-[443px] flex items-center justify-center"
        style={{ backgroundImage: "url('./Rectangle 4317.png')" }}
      >
        <div className="flex justify-center space-x-4">
          <img src="/Group 37147.png" alt="profile" />
          <img src="/Group 37147.png" alt="profile" />
          <img src="/Group 37147.png" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default page;