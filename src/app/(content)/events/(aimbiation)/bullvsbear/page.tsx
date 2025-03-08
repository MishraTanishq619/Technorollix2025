import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import React from "react";

const BullvsBear = () => {
  const managers = [
    {
      imageUrl: "/dallE.png",
      name: "Badugu Karthik",
      contact: 6261741894,
    },
    { imageUrl: "/dallE.png", name: "Snehlata", contact: 8102210327 },
  ];
  const rules = [
    "Each participant will receive virtual capital to start trading.",
    "Only the designated trading platform should be used.",
    "No external assistance (real-money trades) is allowed.",
    "Trading should be within market hours as specified by event organizers.",
    "Risk management is key – reckless trading may lead to disqualification.",
    "Top traders will qualify for the final round based on portfolio value and strategy.",
  ];
  return (
    <div className="mt-8">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>
      <EventIntro
        imageUrl="/aimbiation-events-logo/bullvsbear.png"
        title="BullvsBear"
        registrations={0}
        pricepool={12000}
        description="Virtual trading is a simulation where you can practice buying and selling stocks without using real money. It helps you learn how the stock market works, test strategies, and gain confidence before investing real funds."
        time={"4:00 PM"}
        venue={"LIVE CLASSROOM"}
      />

      <section className="my-32">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          ABOUT THE EVENT
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc text-2xl space-y-4 font-['Inter'] leading-[32px] tracking-[3.75px] text-[#EDE0E0]">
            <li>
              <b>“Bull vs Bears&quot;</b> is an exciting virtual trading competition
              where participants step into the shoes of real traders and
              investors. This event simulates a live stock market environment,
              allowing players to test their trading skills, risk management,
              and market analysis in real-time. Participants will compete to
              build the most valuable portfolio within the given time frame.
            </li>
            <li>
              Whether you’re a bull (optimistic investor) or a bear (cautious
              trader), this challenge will put your market instincts to the
              test.
            </li>
          </ul>
        </div>
      </section>

      <RulesAndRegulation rules={rules} />

      <section className="mb-24">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          JUDGEMENT CRITERIA
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-4 font-['Inter'] leading-[29px] tracking-[3.75px] text-white">
            <li className="list-none text-3xl font-bold">Winners will be judged based on:</li>
            <br />
            <li>
              ✅ <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Portfolio Value:</b> Final virtual portfolio worth at the end of
              the competition.
            </li>
            <li>
              ✅ <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Risk Management:</b> How well participants balanced their trades to
              minimize losses.
            </li>
            <li>
              ✅ <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Diversification:</b> A well-structured portfolio, not just random
              stock picks.
            </li>
            <li>
              ✅ <b  className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">Decision-Making Skills:</b> How traders react to news, volatility,
              and sudden changes.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          EFFICIENT PRIZES
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc text-2xl space-y-4  font-['Inter'] leading-[32px] tracking-[3.75px] text-white">
            <li className="list-none text-3xl font-bold">Winners will be judged based on:</li>
            <li>First prize: ₹6000</li>
            <li>Second prize: ₹4000</li>
            <li>Third prize: ₹2000</li>
            <li>Total prize worth: ₹12000</li>
          </ul>
        </div>
      </section>

      <EventManagers managers={managers} />
    </div>
  );
};

export default BullvsBear;
