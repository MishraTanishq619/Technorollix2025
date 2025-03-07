import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import Image from "next/image";
import EventManagers from "@/components/sub-component/event-managers";

const Roadies = () => {
  const managers = [
    {
      imageUrl: "/dallE.png",
      name: "Praveen Raj Pandey",
      contact: 8839448700,
    },
    {
      imageUrl: "/dallE.png",
      name: "Naman Prabhakar",
      contact: 7011221036,
    },
    {
      imageUrl: "/dallE.png",
      name: "Naitik Sao",
      contact: 7880215792,
    },
    {
      imageUrl: "/dallE.png",
      name: "Somya Patel",
      contact: 9755593747,
    }
  ];
  return (
    <div className="flex flex-col space-y-8">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <Image
          src="/background.svg"
          alt="Scrolling Background"
          fill
          className="object-cover opacity-150"
        />
      </div>
      <EventIntro
        venue={"Bus Parking Area"}
        time={"20-03-25, 1:30 am "}
        imageUrl="/techno-events-logo/roadies.png"
        title="Roadies"
        registrations={0}
        pricepool={10000}
        description="Welcome to Roadies, the ultimate test of skill and endurance! Join us at the University for an adrenaline-packed event filled with sports-inspired challenges. From obstacle courses to team relays, Roadies promises to push your limits and ignite your competitive spirit. Are you ready to conquer the road ahead?"
      />
      <div>
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          THEME
        </h1>
        <p className="text-2xl font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white text-center max-w-4xl mx-auto">
          Adventure / Survival
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          ROUNDS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white">
            <li>There will be 5 rounds</li>
            <li>Tasks for each round will be declared on the spot.</li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8">
          JUDGEMENT CRITERIA:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 font-['Inter'] leading-[29.08px] tracking-[3.75px] text-white">
            <li>Evaluation will be based on the following parameters:</li>
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
            For any queries regarding the event, feel free to reach out to any of the managers listed below. They are here to help and ensure a smooth experience for you!
          </div>

          <div className="flex justify-center space-x-40 items-center mt-20">
            <EventManagers managers={managers}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadies;
