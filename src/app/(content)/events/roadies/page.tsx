import ButtonLanding from '@/components/sub-component/button-landing'
import EventIntro from '@/components/sub-component/event-intro'
import ManagerCard from '@/components/sub-component/manager-card'
import React from 'react'

const Roadies = () => {
  return (
    <div className="mb-10">
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>
      <EventIntro
      venue={"Bus Parking Area"}
      time={"1:30 PM "}
        imageUrl="/techno-events-logo/roadies.png"
        title="Roadies"
        registrations={0}
        pricepool={10000}
        description="Welcome to   Roadies  , the ultimate test of skill and endurance! Join us at the University for an adrenaline-packed event filled with sports-inspired challenges. From obstacle courses to team relays, Roadies promises to push your limits and ignite your competitive spirit. Are you ready to conquer the road ahead?"  />
       <div className="mt-16 mb-16">
        <h1 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          THEME
        </h1>
        <p className="text-2xl font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white text-center max-w-4xl mx-auto">
        Adventure / Survival
        </p>
      </div>
    
      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          WHY PARTICIPATE
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            <li>Exciting prizes worth ₹ 10,000</li>
            <li>
            Opportunity to showcase your strength, strategy, and endurance.
            </li>
            <li>Recognition certificates for all participating universities</li>
            <li>Participation certificates for all participants</li>
            <li>Special category-wise winning prizes</li>
            <li>
            Hands-on experience in  adventure, teamwork, and problem-solving
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
            <li>All participants must arrive  30 minutes before the event starts.</li>
            <li>Only those who fill out the audition form will be considered as participants.</li>
            <li>No student will be allowed direct participation in the final round; they must qualify through auditions.</li>
            <li>Participants must maintain discipline and avoid inappropriate behavior such as hooting, using slangs, or bullying.</li>
            <li>Proper sports attire is mandatory (trousers, t-shirts, sports shoes).</li>
            <li>Follow all instructions and guidelines provided by the event managers.</li>
            <li>Consumption of alcohol or illegal substances during the event is strictly prohibited for all.</li>
          </ul>
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          ROUNDS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            <li> There will be 5 rounds </li>
            <li>
            Tasks for each round will be declared on the spot.
        </li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          JUDGEMENT CRITERIA:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            <li> Evaluation will be based on the following parameters: </li>
            <li>Physical ability of the participant.</li>
            <li>Adaptability to different challenges.</li>
          </ul>
        </div>
      </section>
      
    
      <section>
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
            <ManagerCard imageUrl="/dallE.png" name="Praveen Raj Pandey" contact={8839448700}/>
            <ManagerCard imageUrl="/dallE.png" name="Naman prabhakar " contact={7011221036}/>
            <ManagerCard imageUrl="/dallE.png" name=" Naitik sao" contact={7880215792}/>
            <ManagerCard imageUrl="/dallE.png" name="Somya patel" contact={9755593747}/>

          </div>
          <div className="mb-10">
            <ButtonLanding label="Register Now" link={''} />
            </div>
        </div>
      </section>

    </div>

  )
}

export default Roadies
