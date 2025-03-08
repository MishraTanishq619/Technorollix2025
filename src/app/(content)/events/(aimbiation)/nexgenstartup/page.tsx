import React from "react";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";

const Page: React.FC = () => {
  const rules = [
    "The competition is open for teams comprising graduate & postgraduate students.",
    "No change of team structure is permitted after the team is registered.",
    "One participant cannot be part of more than one team.",
    "One of the team members should be registered as the team leader.",
    "The business plan should not exceed 15 pages. Excluding executive summary, cover page & index.",
    "A maximum of 15 slides of power point presentation is allowed in the final round.",
    'The participants must follow the font size of 12 in Times New Roman for the main text and 14 for headings with a line spacing of 1.5".',
    "A maximum of 15 minutes for a team will be allowed to present the business idea.",
    "Participants must carry their data back up in a laptop or USB drive.",
  ];

  const managers = [
    { imageUrl: "/dallE.png", name: "KIRAN VERMA", contact: 7999509911 },
    { imageUrl: "/dallE.png", name: "RIYA SHARMA", contact: 7987064912 },
  ];

  const judgementCriteria = [
    {
      title: "Business Description",
      percentage: 15,
      description: "Clear, reasonable, and scalable concept explanation.",
    },
    {
      title: "Market Analysis",
      percentage: 10,
      description:
        "Identifies genuine need; well-defined target market. Market size and growth discussed. Consumer demand and willingness to pay addressed.",
    },
    {
      title: "Product or Service Analysis",
      percentage: 10,
      description:
        "Clear description, feasibility analyzed. Evaluation of potential duplication and substitutes.",
    },
    {
      title: "Competition",
      percentage: 10,
      description:
        "Identification of competitors, strengths, and weaknesses analyzed effectively.",
    },
    {
      title: "Marketing Strategy",
      percentage: 10,
      description:
        "Well-defined plan covering price, product, place, and promotion. Appropriate resource allocation.",
    },
    {
      title: "Operations",
      percentage: 10,
      description:
        "Discussion on securing resources and maintaining competitive operations.",
    },
    {
      title: "Investment Proposal",
      percentage: 10,
      description:
        "Detailed funding explanation, clear terms and returns. Realistic valuation and feasible exit strategy.",
    },
    {
      title: "Innovation and Creativity",
      percentage: 10,
      description:
        "Unique and original idea with a creative approach. Potential to disrupt the market.",
    },
    {
      title: "Sustainability and Social Impact",
      percentage: 5,
      description:
        "Consideration of environmental and social impact. Long-term sustainability of the business model.",
    },
    {
      title: "Presentation",
      percentage: 20,
      description:
        "Engaging, well-managed time, confident delivery, and impactful conclusion.",
    },
  ];

  return (
    <div className="mt-10">
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
        description="Empowering Startups: Your Gateway to Success. Dive into our event tailored for entrepreneurs like you. Discover insider tips, forge valuable connections, and kickstart your business journey. From startup dreams to tangible results, this event is your ultimate resource. Seize this opportunity to fuel your passion and unlock the potential of your startup."
        time={"2:30 PM"}
        venue={"LIVE CLASSROOM"}
      />

      <section className="my-32">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          ABOUT THE EVENT
        </h2>
        <div className="flex justify-center mt-7">
          <div className="w-[1023px] text-center text-white text-2xl font-medium font-['Inter'] tracking-[3.75px]">
            We invite you to participate in an exclusive event tailored for
            aspiring entrepreneurs. This event provides a platform to gain
            expert insights, establish valuable connections, and translate
            innovative business ideas into reality. From conceptualization to
            execution, this initiative serves as a crucial stepping stone toward
            entrepreneurial success. Seize this opportunity to refine your
            vision and advance your startup to new heights.
          </div>
        </div>
      </section>

      <section className="py-32">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          JUDGEMENT CRITERIA (100%)
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto text-white">
          <ul className="list-disc text-2xl leading-9 tracking-[3.75px] space-y-8">
            {judgementCriteria.map((criteria, index) => (
              <li key={index}>
                <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                  {criteria.title} ({criteria.percentage}%):
                </b>{" "}
                {criteria.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
          PRIZE DETAILS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-decimal pl-5 text-2xl space-y-6  font-['Inter'] leading-[32px] tracking-[3.75px] text-white">
            <li>
              Winner: Cash prize of ₹5000 + Incubation Support + Mentorship from
              industry experts.
            </li>
            <li>Runner up: Cash prize of ₹3000 + Mentorship.</li>
            <li>
              Special Category Awards: Best Social Impact Startup, Most
              Innovative Idea, and Best Pitch Presentation (prizes and benefits
              to be announced).
            </li>
          </ul>
        </div>
      </section>

      <RulesAndRegulation rules={rules} />
      <EventManagers managers={managers} />
    </div>
  );
};

export default Page;
