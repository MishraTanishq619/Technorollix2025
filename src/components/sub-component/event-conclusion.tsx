import React from "react";
import ManagerCard from "./manager-card";
import ButtonLanding from "./button-landing";

const EventConclusion = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-transparent text-white p-6 md:p-12">
        <section className="mb-20">
          <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            WHY PARTICIPATE
          </h2>
          <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
            <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
              <li>Exciting prizes worth ₹</li>
              <li>
                Funding opportunity for innovative artistic projects (as per
                OPJU Innovation Centre terms)
              </li>
              <li>
                Recognition certificates for all participating universities
              </li>
              <li>Participation certificates for all participants</li>
              <li>Special category-wise winning prizes</li>
              <li>
                Hands-on experience in creativity, performance, and storytelling
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
            <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
              <li>
                All participants must arrive at the venue 30 minutes before the
                event; latecomers will be disqualified.
              </li>
              <li>
                No direct participation is allowed in the final round without
                clearing auditions.
              </li>
              <li>No vulgarity in clothing or song selection is permitted.</li>
              <li>
                Participants must submit their selected song and background
                video to the event coordinator one day before auditions and
                performances.
              </li>
              <li>
                Participants must be prepared with their song and attire before
                the event.
              </li>
              <li>
                Performance scores will be based on six evaluation criteria.
              </li>
              <li>
                The judges' decisions are final and must be accepted by all
                participants.
              </li>
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

        <ManagerCard />

        <ButtonLanding label="Register Now" />
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </div>
    </div>
  );
};

export default EventConclusion;
