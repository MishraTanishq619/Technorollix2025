import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import EventManagers from "@/components/sub-component/event-managers";
import { BsAward } from "react-icons/bs";

const page = () => {
  // const rules = ["Rule 3","Rule 3","Rule 3","Rule 3","Rule 3","Rule 3"];
  // const reasons = ["Reason 1","Reason 2","Reason 3","Reason 4","Reason 5"]
  const managers = [
    {
      imageUrl: "/managers/riwayat/soumyayadavriwayat.jpg",
      name: "Soumya Yadav",
      contact: 7389067920,
    },
    {
      imageUrl: "/managers/riwayat/priyasinghriwayat.jpg",
      name: "Priya Singh",
      contact: 9893723614,
    },
  ];

  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      {/* Event Intro Section */}


      <section>
        <EventIntro
          imageUrl="/aimbiation-events-logo/riwayat.png"
          title="Riwayat: The Fashion Show"
          registrations={0}
          pricepool={18000}
          description="The fashion show is a fashion show that celebrates the perfect blend of style and intellect. It displays fashion as a symbol of confidence, creativity, and empowerment. A platform to display your talent and creativity and present yourself as a perfect example of beauty with brain."
          time = "7:00 PM"
          venue= "GROUND"
        />
      </section><br/>


      <section>
        {/* Why Part */}
        

        <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            WHY PARTICIPATE:
            </h2>


            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
             <p className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
             Skill Enhancement: Engage in creative challenges that refine your design, modeling, and event coordination abilities.
Exposure and Recognition: Showcase your talent to a broader audience, gaining visibility and potential accolades.
Networking Opportunities: Connect with industry professionals, peers, and mentors, fostering valuable relationships.
Personal Growth: Build confidence, resilience, and adaptability by stepping out of your comfort zone.<br/><br/>
Career Advancement: Achievements in such events can enhance your portfolio, making you stand out to potential employers or collaborators
             </p>
                
            </div>
          </section>

       


        

          <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          Rounds:
          </div>
          
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              Icon={BsAward}
              title="Round-1"
              description="Introduction + Outfit Info"
            />

            <SubEventCard
              Icon={BsAward}
              title="Round-2:"
              description="Introduction + Outfit Info + Task "
            />
            <SubEventCard
              Icon={BsAward}
              title="Round-3:"
              description="Ramp walk"
            />
          </div>
        
        </section>
        
        <div className="flex flex-col items-center justify-center">
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            EVENT MANAGERS
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
            For any queries regarding the event, feel free to reach out to any of
            the managers listed below. They are here to help and ensure a smooth
            experience for you!
          </div>

          {/* <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Priya Singh" contact={7389067920}/>
            <ManagerCard imageUrl="/dallE.png" name="Somya Yadav" contact={9893723614}/>
          </div> */}
          <EventManagers managers={managers} />
        </div>
      </div>

     </section>

    </div>
    
  );
};


      


export default page;


