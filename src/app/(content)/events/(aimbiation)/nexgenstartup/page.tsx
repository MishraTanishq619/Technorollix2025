import ButtonLanding from '@/components/sub-component/button-landing'
import EventIntro from '@/components/sub-component/event-intro'
import ManagerCard from '@/components/sub-component/manager-card'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      <EventIntro 
        imageUrl="/aimbiation-events-logo/nexgenstartup.png"
        title="Nexgen Start-up"
        registrations={0}
        pricepool={8000}
        description="Empowering Startups:  Your Gateway to Success. Dive into our event tailored for entrepreneurs like you. Discover insider tips, forge valuable connections, and kickstart your business journey. From startup dreams to tangible results, this event is your ultimate resource. Seize this opportunity to fuel your passion and unlock the potential of your startup."
        time={'2:30 PM'}
        venue={'LIVE CLASSROOM'} 
      />
      <br/><br/>
      <section className="mt-20 mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        ABOUT THE EVENT
        </h2>
        <div className="flex justify-center mt-7">
  <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[5.28px]">
    • We invite you to participate in an exclusive event tailored for aspiring entrepreneurs. This event provides a platform to gain expert insights, establish valuable connections, and translate innovative business ideas into reality. From conceptualization to execution, this initiative serves as a crucial stepping stone toward entrepreneurial success. Seize this opportunity to refine your vision and advance your startup to new heights.
  </div>
</div>
      </section>
      
      <section className="mt-20 mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        RULES AND REGULATIONS
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>1.	The competition is open for teams comprising graduate & postgraduate students</li>
            <li>2.	No change of team structure is permitted after the team is registered. </li>
            <li>3.	One participant cannot be part of more than one team. </li>
            <li>4.	One of the team members should be registered as the team leader. </li>
            <li>5.	The business plan should not exceed 15 pages. Excluding executive summary, cover page & index. </li>
            <li>6.	A maximum of 15 slides of power point presentation is allowed in the final round. </li>
            <li>7.	The participants must follow the font size of 12 in Times New Roman for the main text and 14 for headings with a line spacing of 1.5".</li>
            <li>8.	A maximum of 15 minutes for a team will be allowed to present the business idea. </li>
            <li>9.	Participants must carry their data back up in a laptop or USB drive.</li>
            </ul>
            </div>
            </section>

            <section className="mt-20 mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        JUDGEMENT CRITERIA (100%)
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-none pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>• Business Description: (15%)</li>
            <li>Clear, reasonable, and scalable concept explanation. </li>
            <li>•	Market Analysis: (10%) </li>
            <li>Identifies genuine need; well-defined target market. </li>
            <li>Market size and growth discussed. </li>
            <li>Consumer demand and willingness to pay addressed.</li>
            <li>•	Product or Service Analysis: (10%)</li>
            <li>Clear description, feasibility analyzed. </li>
            <li>Evaluation of potential duplication and substitutes.</li>
            <li>•	Competition: (10%)</li>
            <li>Identification of competitors, strengths, and weaknesses analyzed effectively.</li>
            <li>•	Marketing Strategy: (10%)</li>
            <li>Well-defined plan covering price, product, place, and promotion.</li>
            <li>Appropriate resource allocation.</li>
            <li>•	Operations: (10%)</li>
            <li>Discussion on securing resources and maintaining competitive operations.</li>
            <li>•	Investment Proposal: (10%)</li>
            <li>Detailed funding explanation, clear terms and returns.</li>
            <li>Realistic valuation and feasible exit strategy.</li>
            <li>•	Innovation and Creativity: (10%)</li>
            <li>Unique and original idea with a creative approach.</li>
            <li>Potential to disrupt the market.</li>
            <li>•	Sustainability and Social Impact: (5%)</li>
            <li>Consideration of environmental and social impact.</li>
            <li>Long-term sustainability of the business model.</li>
            <li>•	Presentation: (20%)</li>
            <li>Engaging, well-managed time, confident delivery, and impactful conclusion.</li>
            </ul>
            </div>
            </section>

            <section className="mt-20 mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        PRIZE DETAILS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-none pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>•	Winner: Cash prize of ₹5000 + Incubation Support + Mentorship from industry experts.</li>
            <li>•	Runner up: Cash prize of ₹3000 + Mentorship.</li>
            <li>•	Special Category Awards: Best Social Impact Startup, Most Innovative Idea, and Best Pitch Presentation (prizes and benefits to be announced).</li>
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
            <ManagerCard imageUrl="/dallE.png" name="KIRAN VERMA" contact={7999509911}/>
            <ManagerCard imageUrl="/dallE.png" name="RIYA SHARMA" contact={7987064912}/>
          </div>
          <div className="mb-10">
          <ButtonLanding label="Register Now" link="/dashboard" />

            </div>
        </div>
      </section>

    </div>
  )
}

export default page
