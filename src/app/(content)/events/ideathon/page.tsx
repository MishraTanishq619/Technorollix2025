import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card'; // Ensure this is the correct path

const Page = () => {
  return (
    <div className="Ideathon">
      <EventIntro
        imageUrl="/techno-events-logo/ideathon.png"
        title="Ideathon"
        registrations={300}
        pricepool={60000}
        description="An Ideathon is an engaging brainstorming event where individuals collaborate to address pressing challenges through innovative solutions. Participants work in teams, utilizing design thinking to develop viable ideas across diverse subjects like marketing, philosophy, and sci"
        time='8:00 am'
        venue='MP Hall'
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12 flex flex-col items-center space-y-32">
          <section className="my-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              WHY PARTICIPATE
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
              <li>Win ₹18,000 and gain recognition.</li>
                <li>Boost skills in problem-solving, design thinking, and presentation.</li>
                <li>Create real-world impact with innovative solutions.</li>
                <li>Network with experts and like-minded innovators.</li>
                <li>Enhance your resume with a standout achievement.</li>
                <li>Challenge yourself to think creatively under pressure.</li>
              </ul>
            </div>
          </section>
          <SubEventCard
            imageUrl="/subEventLogo.png" // Updated path
            title="Pradarshini (Exhibition)"
            description={
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Theme:</strong> All Kinds of Art and Collection.</li>
                <li><strong>Venue:</strong> Central Library</li>
                <li><strong>Rounds:</strong> 1 round</li>
                <li><strong>Rules and Regulations:</strong></li>
                <li>1. All participants must register before the event.</li>
                <li>2. All should submit their artistic piece, art, or craft 2 to 3 days before the event.</li>
                <li>3. Last-minute changes in the above rules may be made by the organizers.</li>
              </ul>
            }
          />

          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              RULES & REGULATION
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
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
        </div>
        <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            JUDGING CRITERIA
          </h2>
          <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
            <p className="mb-4 text-2xl text-white uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
              Each idea is evaluated on the following criteria, with a maximum of 20 points per category (Total 100 points):
            </p>
            <ul className="list-disc pl-5 text-2xl text-white space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
              <li>Uniqueness of the idea</li>
              <li>Feasibility of the proposed solution</li>
              <li>Presentation style</li>
              <li>Response to questions from judges</li>
              <li>Scalability of the idea</li>
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

export default Page;