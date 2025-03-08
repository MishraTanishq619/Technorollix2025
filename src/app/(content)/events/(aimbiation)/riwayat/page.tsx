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
      name: "Somya Yadav",
      contact: 7389067920,
    },
    {
      imageUrl: "/managers/riwayat/priyasinghriwayat.jpg",
      name: "Priya Singh",
      contact: 9893723614,
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
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
          time="20-03-25, 7:00 pm"
          venue="Final Round ,GROUND"
        />
      </section>
      <br />

      <section>
        {/* Why Part */}

        <section className="mb-20">
          <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-14">
            WHY PARTICIPATE:
          </h2>

          <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
            <ul className="list-disc pl-5 text-2xl font-inter leading-[29.08px] tracking-wide text-white space-y-4">
              {[
                {
                  title: "Skill Enhancement",
                  description:
                    "Engage in creative challenges that refine your design, modeling, and event coordination abilities.",
                },
                {
                  title: "Exposure and Recognition",
                  description:
                    "Showcase your talent to a broader audience, gaining visibility and potential accolades.",
                },
                {
                  title: "Networking Opportunities",
                  description:
                    "Connect with industry professionals, peers, and mentors, fostering valuable relationships.",
                },
                {
                  title: "Personal Growth",
                  description:
                    "Build confidence, resilience, and adaptability by stepping out of your comfort zone.",
                },
                {
                  title: "Career Advancement",
                  description:
                    "Achievements in such events can enhance your portfolio, making you stand out to potential employers or collaborators.",
                },
              ].map((item, index) => (
                <li key={index}>
                  <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                    {item.title}:
                  </b>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium font-['Poppins'] uppercase tracking-[3.75px]">
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


        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default page;
