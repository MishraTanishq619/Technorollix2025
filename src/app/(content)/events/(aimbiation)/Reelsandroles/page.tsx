import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";
import ButtonLanding from "@/components/sub-component/button-landing";
import CardwithImage from "@/components/sub-component/card-with-image";
import Image from "next/image";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import WhyParticipate from "@/components/sub-component/why-participate";
import ManagerCard from "@/components/sub-component/manager-card";

const page = () => {
  const rules = ["Rule 3","Rule 3","Rule 3","Rule 3","Rule 3","Rule 3"];
  const reasons = ["Reason 1","Reason 2","Reason 3","Reason 4","Reason 5"]

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
          imageUrl="/antaragni.png"
          title="Reels & Roles play"
          registrations={20}
          pricepool={30000}
          description="The School of Management is thrilled to present Reels and Role Plays, an exciting event that combines creativity, photography,          cinematography,and management skills.
                       Reels and Role Plays is a unique event where participants will have the opportunity to showcase their photography and cinematography skills by creating short reels on various management-related themes. Additionally, participants will engage in role-plays that simulate real-world management scenarios, such as job interviews, board meetings, and shareholder meetings."
          time = "8:00 Am"
          venue= "Open Theatre"
        />
      </section><br/>


      <section>
        {/* Reels */}
        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Reels
          </div>
          
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="./Vector.svg"
              title="Round-1: A day at corporates"
              description="Make reels on corporate life from wearing formals to attending meetings formal / informal communication."
            />

            <SubEventCard
              imageUrl="./Vector.svg"
              title="Round-2: cinematic ads shooting –"
              description="Make cinematic adds of the product of your choice "
            />
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="Round-3: cinematic shoot of OPJU"
              description="Bring best out of the campus in a cinematic shoot"
            />
          </div>
        
        </section>


        <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Time duration of Reel:
            </h2>


            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
                <li>Minimum - 30sec</li>
                <li>Maximum - 1min</li>
                <li>Mode of submission: virtual mode </li>
                <li>Post the video on your id in collaboration with OPJU official Instagram account </li>
              </ul>
                
            </div>
          </section>



          <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Judgement
          </div>
          
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="./Vector.svg"
              title="Round-1"
              description="top 15 reels with highest likes will qualify for round 2."
            />

            <SubEventCard
              imageUrl="./Vector.svg"
              title="Round-2:"
              description="top 10 reels with best cinematography will qualify for round 3. "
            />
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="Round-3:"
              description="top 3 reels as decided by the judges will be the winners"
            />
          </div>
        
        </section>


        



        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          Role play 
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          </div>
        </section>


        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="./Vector.svg"
              title="Round 1 : Job interview "
              description="Job requirement and other background situations will be provided on the spot"
            />
            <SubEventCard
              imageUrl="./Rectangle 197.png"
              title="Round 2: Board Meeting / Shareholders meeting "
              description="Agenda will be provided at the spot"
            />

          </div>


          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Timing duration of role play:
            </h2>


            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
                <li>Minimum 3 min</li>
                <li>Maximum 5 min</li>
              </ul>
                
            </div>
          </section>
        
        </section>

        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Judgement
          </div>
          
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="./Vector.svg"
              title=""
              description="10 students with the best performance will qualify for round 2."
            />

            <SubEventCard
              imageUrl="./Vector.svg"
              title=""
              description="Winners will be declared by the judges  "
            />
          </div>
        
        </section>



        <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Items Required:
            </h2>


            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
                <li>Mic- 4</li>
                <li>Sound box-2</li>
                <li>Pencil-2</li>
                <li>Pen-4</li>
                <li>Paper-3</li>
                <li>Table chair</li>
                <li>Tent</li>
                <li>Water bottles</li>
              </ul>
                
            </div>
          </section>


          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Prize Detail: 
            </h2>


            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
                <li>First prize: 6000</li>
                <li>Second prize:4000</li>
                <li>Third prize:2000</li>
              </ul>
                
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

          <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Sanjeet kumar Gourh" contact={6260294300}/>
            <ManagerCard imageUrl="/dallE.png" name="Shubham Narayan Singh" contact={ 6371745801}/>
            <ManagerCard imageUrl="/dallE.png" name="Nishika Agrawal " contact={7853032508}/>
          </div>
          <div className="mb-10">
          <ButtonLanding label="Register Now" link="/dashboard" />

            </div>
        </div>
      </div>

     </section>

    </div>
    
  );
};


      


export default page;

