"use client"
import ButtonLanding from '@/components/sub-component/button-landing'
import React from 'react'
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import WhyParticipate from '@/components/sub-component/why-participate';
import RulesAndRegulation from '@/components/sub-component/rule-regulation';
import ManagerCard from '@/components/sub-component/manager-card';

const Page = () => {
  const rules = [  "All the exhibits must reach the venue one hour before the prescribed time to install all the necessary components for their model.",
"A maximum of 4 participants are allowed in each team.",
"The exhibit should be a creation of the student, which either illustrates or demonstrates a novel cause.",
"Robo cars or drones should perform some task or exhibit some innovation to be included in the technical model presentation.",
"Exhibits must be confined to an area. Tables and Electricity connection will be provided.",
"No exhibits should be dismantled or removed till the end of the competition.",
"Highly flammable and toxic substances are not allowed, if so, the application must be submitted prior.",
"Every participant must maintain the decorum of the event.",
"External and Internal judges panel will take the final call.",];
  const reasons =    [ "Exciting prizes for the winners worth ₹45,000.","Funding opportunity for innovative prototypes*.","Recognition certificates for all participating Universities from OPJU innovation centre*.","Participation Certificates will be given to all the participants.","Special category-wise winning prizes.","Time to get new-age experience and innovation.","Reimbursement of a one-way Sleeper class fair for all the outside participants of Tech Lab.","*Subjected to terms and conditions of OPJU Innovation Centre."];
  return (
    <div className="flex flex-col space-y-10">
      {/* Event Intro Section */}

      <section>
        <EventIntro
          imageUrl="/antaragni.png"
          title="TECH LAB"
          registrations={20}
          pricepool={45000}
          description="Tech lab is the flagship event of the biggest tech festival in central India, TECHNOROLLIX. It’s a vibrant showcase of innovation and ingenuity, where the brightest minds from various universities unleash their creative potential through their self-developed models. Creating a technical model presentation involves effectively communicating the details, functionality, and significance of a technical model to a diverse audience, which may include technical and non-technical stakeholders. This platform also opens doors to better funding opportunities for these innovative minds, paving the way to a future breakthrough."
          time="8:00 a.m."
          venue="BABUJI CHOWK"
        />
      </section>

      {/* Theme section
      <section className="flex flex-col items-center justify-center">
        <h2 className="w-[397px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h2>
        <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px]">
          BOLLYWOOD
        </div>
      </section> */}

      <section>
        {/* Sub-Events section */}
        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            sub-events
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
            The following are the sub-events of this main event. Read the
            details carefully and choose the ones that best match your interests
            and expertise. Don't miss your chance to participate and showcase
            your skills!
          </div>
        </section>

        {/* Sub-Events Cards Section */}
        <section className="">
          <div className="flex justify-around m-20">
            <SubEventCard
              // imageUrl="/Vector.svg"
              title="POSTER PRESENTATION"
              description="Showcase your innovative ideas and research in TechVision, the ultimate technical poster presentation event. Present your findings, prototypes, and groundbreaking concepts in a visually compelling format. Impress judges and peers with your creativity, clarity, and technical expertise."
            />
            <SubEventCard
              // imageUrl="./Rectangle 197.png"
              title="WORKING MODEL PRESENTATION"
              description="Showcase your innovative ideas and research in TechVision, the ultimate technical poster presentation event. Present your findings, prototypes, and groundbreaking concepts in a visually compelling format. Impress judges and peers with your creativity, clarity, and technical expertise."
            />
          </div>
          <div className="flex justify-around m-20">
            <SubEventCard
              // imageUrl="./Rectangle 197.png"
              title="PROTOTYPE PRESENTATION"
              description="Showcase your innovative ideas and research in TechVision, the ultimate technical poster presentation event. Present your findings, prototypes, and groundbreaking concepts in a visually compelling format. Impress judges and peers with your creativity, clarity, and technical expertise."
            />
            <SubEventCard
              // imageUrl="./Rectangle 197.png"
              title="APP PRESENTATION"
              description="Showcase your innovative ideas and research in TechVision, the ultimate technical poster presentation event. Present your findings, prototypes, and groundbreaking concepts in a visually compelling format. Impress judges and peers with your creativity, clarity, and technical expertise."
            />
          </div>
        </section>
      </section>

      <section>
        <WhyParticipate reasons={reasons} />
        <RulesAndRegulation rules={rules} />
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
            <ManagerCard imageUrl="/dallE.png" name="Shruti Sharma" contact={8102012514}/>
            <ManagerCard imageUrl="/dallE.png" name="Shruti Kumari" contact={9165245727}/>
            <ManagerCard imageUrl="/dallE.png" name="Ashish Kumar" contact={9122132979}/>
            <ManagerCard imageUrl="/dallE.png" name="Priya Kumari" contact={9234531358}/>
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
  );}

export default Page;