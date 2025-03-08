"use client"
import ButtonLanding from '@/components/sub-component/button-landing'
import React from 'react'
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import WhyParticipate from '@/components/sub-component/why-participate';
import RulesAndRegulation from '@/components/sub-component/rule-regulation';
import ManagerCard from '@/components/sub-component/manager-card';
import { BsAward } from "react-icons/bs";

const Page = () => {
  const rules = [  "1. Teams need to register themselves before or till the registration last date. After which no registrations would be entertained.",
    "2. Only the team leader will be able to register his/her team through unstop.",
    "3. Teams can be formed with minimum 3 members and maximum 4 members.",
    "4. The online quiz will consist of objective type or short answer type questions.",
    "5. The questions will revolve around business knowledge.",
    "6. Only team leaders can register and play the online quiz round on the team's behalf.",
    "7. All the questions have to be answered within 15 mins. However, there is no negative marking.",
    "8. The participants are requested to secure a good and reliable internet connection for participating successfully in the online round, any delay in submission due to the same will not be entertained.",
    "9. If any of the participants is found using unfair means to win the competition or committing any kind of misconduct, his/her team will be disqualified. It is up to the discretion of the Core Team of Biz - E - Sawaal, OPJU and their word will be Final.",
    "10. All disputes will be resolved by the Core Team of Biz-E-Sawaal, OPJU and their decision will be considered final.",];
  const reasons =    [ "Enhancing Business Acumen and Critical Thinking: The quiz aims to deepen participants' knowledge of business, finance, and corporate affairs while fostering critical thinking, decision-making, and awareness of current economic trends",
    "Encouraging Competitive Learning and Networking: By promoting a spirit of healthy competition, teamwork, and public speaking, the event provides a platform for students, professionals, and business enthusiasts to connect, showcase their talent, and gain recognition",];
  return (
    <div className="flex flex-col space-y-10">
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
          imageUrl="/aimbiation-events-logo/bizesawaal.png"
          title="Biz E Sawaal"
          registrations={0}
          pricepool={6000}
          description="Biz E Sawaal is an engaging and competitive quiz event designed to test participants' knowledge
of the business world, including finance, economics, startups, and corporate trends."
          time="1:00 PM."
          venue="MP Hall"
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
        {/* <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            sub-events
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
            The following are the sub-events of this main event. Read the
            details carefully and choose the ones that best match your interests
            and expertise. Don't miss your chance to participate and showcase
            your skills!
          </div>
        </section> */}

        <section className='mt-10'>
        <WhyParticipate reasons={reasons} />
        <RulesAndRegulation rules={rules} />
      </section>

        {/* Sub-Events Cards Section */}
        <section className="flex flex-col items-center justify-center">
          <div className=" text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Rounds
          </div>
          <div className="flex justify-around gap-10 m-20 mt-8">
            <SubEventCard
              Icon={BsAward}
              title="Round 1"
              description="Introduction + outfit Intro"
            />
            <SubEventCard
              Icon={BsAward}
              title="Round 2"
              description="Introduction + outfit Intro"
            />
          </div>
          </section>
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
            <ManagerCard imageUrl="/dallE.png" name="Om Kumar Singh " contact={7999425422 }/>
            <ManagerCard imageUrl="/dallE.png" name="Satyendra Vishwakarma" contact={7024332255}/>
        </div>
        <ButtonLanding label="Register Now" link='/dashboard'/>
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