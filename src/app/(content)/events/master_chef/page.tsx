import ButtonLanding from "@/components/sub-component/button-landing";
import EventIntro from "@/components/sub-component/event-intro";
import ManagerCard from "@/components/sub-component/manager-card";
import React from "react";

const page = () => {
  return (
    <div className="mb-10">
      <EventIntro
      venue={"Cafeteria, Ground Floor"}
      time={" "}
        imageUrl="/antaragni.png"
        title="MasterChef"
        registrations={346}
        pricepool={30000}
        description="OPJU invites you to an extraordinary culinary battleground, where flavors meet creativity and passion transforms into perfection. Step into MasterChef and let the world savor your signature taste!." time={""} venue={""}      />
      <div className="mt-16 mb-16">
        <h1 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h1>
        <p className="text-2xl font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white text-center max-w-4xl mx-auto">
          Every dish is a chapter, every bite a sentence, and every flavor a
          memory waiting to be told
        </p>
      </div>

      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          COMPITATION FORMAT
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            <li>
              Prizes:🏆 First, Second, and Third Place Winners, Three
              Consolation Prizes
            </li>
            <li>• Total Participants: 100 students</li>
            <li>• Teams: 25 teams (4 students per team)</li>
            <li>• Time & Number of Rounds: To be intimated later</li>
            <li>• Registration Fee: ₹100 per group.</li>
            <li>
              • Eligibility: UG & PG students (Age: 18 - Below 30) from any
              college/university.
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
            <li>1. Teams must register in groups of 4 members.</li>
            <li>2. This is open to other Institutions outside OPJU</li>
            <li>3. Each team must distribute tasks among members</li>
            <li>
              4. Abusive, offensive, politically driven, gender-biased, or
              personal remarks will be dealt strictly.{" "}
            </li>
            <li>5. Costumes should be suitable for the event.</li>
            <li>6. Registration is mandatory </li>
            <li>7. No outside ingredients are allowed</li>
            <li>8. Teams must finish within the given time.</li>
            <li>9. Points will be deducted for messy stations.</li>
            <li>
              10. Proper handling of knives, stoves, and other kitchen equipment
              is mandatory.
            </li>
            <li>
              11. Judging Criteria:
              <li>o Taste 40%</li>
              <li>o Creativity 30%</li>
              <li>o Presentation 20%</li>
              <li>o Cleanliness & Organization 10%</li>
            </li>
            <li>12. The judges' decision is final.</li>
            <li>13. Winners will be declared on the same day.</li>
          </ul>
        </div>
      </section>

      <section>
      <div className="flex flex-col items-center justify-center" >
        <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT MANAGERS
        </div>
        <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of
          the managers listed below. They are here to help and ensure a smooth
          experience for you!
        </div>

        <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
        </div>
        <ButtonLanding label="Register Now" />
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </div>
      </section>
    </div>
  );
};

export default page;
