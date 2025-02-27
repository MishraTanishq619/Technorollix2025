import ButtonLanding from '@/components/sub-component/button-landing'
import EventIntro from '@/components/sub-component/event-intro'
import ManagerCard from '@/components/sub-component/manager-card'
import React from 'react'

const BullvsBear = () => {
  return (
    <div className='mb-10'>
      <EventIntro
        imageUrl="/antaragini.png"
        title="BullvsBear"
        registrations={20}
        pricepool={30000}
        description="Virtual trading is a simulation where you can practice buying and selling stocks without using real money. It helps you learn how the stock market works, test strategies, and gain confidence before investing real funds."
        time={''}
        venue={''} 
      />
      
      <section className="mt-20 mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          ABOUT THE EVENT
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>
              “Bull vs Bears" is an exciting virtual trading competition where participants step into the shoes of real traders and investors. 
              This event simulates a live stock market environment, allowing players to test their trading skills, risk management, and market analysis in real-time. 
              Participants will compete to build the most valuable portfolio within the given time frame.
            </li>
            <li>
              Whether you’re a bull (optimistic investor) or a bear (cautious trader), this challenge will put your market instincts to the test.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          RULES AND REGULATIONS
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>Each participant will receive virtual capital to start trading.</li>
            <li>Only the designated trading platform should be used.</li>
            <li>No external assistance (real-money trades) is allowed.</li>
            <li>Trading should be within market hours as specified by event organizers.</li>
            <li>Risk management is key – reckless trading may lead to disqualification.</li>
            <li>Top traders will qualify for the final round based on portfolio value and strategy. </li>
          </ul>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          JUDGEMENT CRITERIA
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>Winners will be judged based on:</li>
            <li>✅ Portfolio Value: Final virtual portfolio worth at the end of the competition.</li>
            <li>✅ Risk Management: How well participants balanced their trades to minimize losses.</li>
            <li>✅ Diversification: A well-structured portfolio, not just random stock picks.</li>
            <li>✅ Decision-Making Skills: How traders react to news, volatility, and sudden changes.</li>
          </ul>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EFFICIENT PRIZES
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-6 uppercase font-['Inter'] leading-[32px] tracking-[6.72px] text-white">
            <li>Winners will be judged based on:</li>
            <li>First prize: ₹6000</li>
            <li>Second prize: ₹4000</li>
            <li>Third prize: ₹2000</li>
            <li>Total prize worth: ₹12000</li>
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
            <ManagerCard imageUrl="/dallE.png" name="Badugu Karthik Kumar" contact={6261741894}/>
            <ManagerCard imageUrl="/dallE.png" name="Snehlata" contact={8102210327}/>
          </div>
          <ButtonLanding label="Register Now" />
        </div>
      </section>
    </div>
  )
}

export default BullvsBear;
