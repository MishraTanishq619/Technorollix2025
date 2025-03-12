import React from "react";
import EventIntro from "@/components/sub-component/event-intro";
import SubEventCard from "@/components/sub-component/sub-event-card";
import { IoIosCamera } from "react-icons/io";
import EventManagers from "@/components/sub-component/event-managers";
import { GiOverInfinity } from "react-icons/gi";
import Image from "next/image";
import { GiBowTieRibbon } from "react-icons/gi";
import { PiFlowerBold } from "react-icons/pi";
import { FaFlipboard } from "react-icons/fa6";
import { TbBottleFilled } from "react-icons/tb";
import RoundSection from "@/components/sub-component/RoundSection";




const KalaKriti = () => {
  const managers = [
    { imageUrl: "/managers/Kalakriti/Aditi.jpg", name: "Aditi", contact: 8839171099 },
    { imageUrl: "/managers/Kalakriti/AnkitK.jpeg", name: "Ankit", contact: 8839171099 },
    { imageUrl: "/managers/Kalakriti/Bhavya.jpg", name: "Bhavya", contact: 8839171099 },
    { imageUrl: "/managers/Kalakriti/Mohini.jpg", name: "Mohini", contact: 8839171099 },
    { imageUrl: "/managers/Kalakriti/pranav.webp", name: "Pranav", contact: 8839171099 },
  ];
  const rounds=[
    {
        title: "Pradarshini (Exhibition)",
        description: "▣ Theme: All Kinds of Art and Collection. ▣ About: Imagine what life would have been without colors, art and aesthetics—boring, right? And what Techno would be without an art exhibition? But don't worry, we would not give you a millisecond of it. So, to dazzle your eyes we have Pradarshini, an art exhibition by Kalakriti, to quench the thirst of your imagination and take you on a bewildering journey worth remembering. Get yourself a pair of sunglasses and come engulf yourself in art and aesthetics. ▣ Venue: OPJU Library\n ▣ Rules:\n1. All participants must register before the event.\n2. Submit your Artistic Piece, Art or Craft 2-3 days before the event.\n3. Last-minute changes, if necessary, can be made.\n ▣ Rounds: 1 Round\n ▣ Judgement Criteria: No Grading"
      },
      {
        title: "Drishyaam (Decoration)",
        description: "▣ Theme: Festivals of India\n▣ About: India is a land of diverse cultures, reflected in its vibrant array of festivals, with major celebrations including Holi, Diwali, Ganesh Chaturthi, Durga Puja, Onam, and Maha Shivratri; each marked by unique rituals, food, and festivities across the country—showcasing India's rich heritage and unity in diversity.\n▣ Venue: OPJU Campus\n▣ Rules:\n1. The competition theme is restricted to “Festivals of India.”\n2. Groups must have a minimum of 4 and a maximum of 6 members; boys’ participation is mandatory.\n3. There will be only one round.\n4. All materials are provided by the organizers.\n5. Participants must decorate their respective sets on or before the 1st day of Technorollix.\n6. Cash prizes will be awarded to the top three positions along with Certificates of Achievement. All participants receive a Certificate of Participation.\n7. Adhere strictly to timings.\n8. The decision of the jury is final.\n9. Last-minute changes, if necessary, can be made.\n▣ Rounds: 1 Round\n▣ Judgement Criteria: Judges’ marks"
      },
      {
        title: "Photorollix",
        description: "▣ Theme: Raigarh, JSP, OPJU Campus, and Nature\n▣ About: Photorollix is a recreational event where participants showcase their 'third eye' skills. As they say, the picture you take is the imagination you want to create with reality. It will be a hall of fame featuring beautiful moments captured by photographers—allowing you to relive amazing memories.\n▣ Venue: Online\n▣ Rules:\n1. The event will take place in 2 rounds over two days.\n2. 1st round before 1st Mar and 2nd round before 2nd Feb 2023.\n3. Each participant submits one photo via Google Form at the end of the day, which will be framed in the gallery.\n4. Last-minute changes, if necessary, can be made.\n▣ Rounds: 2 Rounds\n▣ Judgement Criteria: Judges"
      },
      {
        title: "Rangoli",
        description: "▣ Theme: On the Spot\n▣ Venue: Library Lawn & opposite Chemistry Lab.\n▣ Rounds: 1 Round\n▣ Rules and Regulations:\n1. Groups must have 4 to 6 members; boys’ participation is mandatory.\n2. Only one round of competition.\n3. Participants bring their own materials (except colors, provided by organizers).\n4. Participants have 2 hours to create the rangoli. No extra time.\n5. Prizes for top three positions along with certificates; all receive a participation certificate.\n6. Strict adherence to timings.\n▣ Judgement Criteria: Judges’ marks"
      },
      {
        title: "Colour Painting / Sketching",
        description: "▣ Theme: On the Spot\n▣ About: In order to create, we draw from our inner well—our artistic reservoir. If we neglect to nurture it, our creativity may stagnate. As artists, we must replenish our creative resources. Let your brush or pencil speak on canvas.\n▣ Venue: Library\n▣ Rules:\n1. The theme is restricted to “On the Spot.”\n2. Only one round.\n3. Participants must bring their own materials; paper/canvas provided by organizers.\n4. 2 hours allotted—no extra time.\n5. Prizes for the top three positions along with Certificates of Achievement; all receive a participation certificate.\n6. Strict adherence to timings.\n7. Jury’s decision is final.\n8. Last-minute changes, if necessary, can be made.\n▣ Rounds: 1 Round"
      },
      {
        title: "Bottle Painting",
        description: "Bottle Painting transforms the ordinary into art. Let your creativity flow as you turn simple bottles into vibrant masterpieces, blending colors with imagination!"
      }   
  ]

  return (
    <div className="relative space-y-10 px-4 py-8">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <Image
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
          width={500}
          height={500}
        />
      </div>

      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/techno-events-logo/kalakriti.png"
          registrations={0}
          pricepool={23000}
          description="Craft is the vehicle for expressing your vision. Craft is the visible edge of Art. Here we are with 'Kalakriti,' which is a unique event driven by our artists' ideas, the context of space, season, and the vibes of the region. You will perceive 'Fiction turning into Reality.' You are going to witness a different field of abstract painting, fine arts photography, sculpture, and many more."
          time="21-03-25 , 11:00 am"
          venue="LIBRARY, LAWN, OPPOSITE TO CHEMISTRY LAB"
        />
      </section>

      {/* Sub-Events Section Header */}
      <section className="text-center space-y-4 mx-auto max-w-4xl px-4 my-12">
        <h2 className="w-full max-w-md mx-auto text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium font-['Poppins'] uppercase tracking-[3.75px]">
          Sub-events
        </h2>
        <p className="text-white text-2xl font-normal font-['Inter'] tracking-[3.75px]">
          KalaKriti brings you a vibrant celebration of art and creativity! Explore the exciting sub-events—Pradarshini (Exhibition), Drishyaam (Decoration), Photorollix, Rangoli, Colour Painting, and Bottle Painting. Unleash your imagination, showcase your artistic skills, and be part of this colorful extravaganza!
        </p>
      </section>

      {/* Sub-Events Cards Section */}
      <section className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SubEventCard
            Icon={GiOverInfinity}
            title="Pradarshini (Exhibition)"
            description="KalaKriti presents Pradarshini, an art exhibition where colors, creativity, and expression come to life. Immerse yourself in a world of art that captivates."
          />
          <SubEventCard
            Icon={GiBowTieRibbon}
            title="Drishyaam (Decoration)"
            description="India's rich heritage and vibrant culture come alive in Drishyaam by KalaKriti. Witness the essence of tradition through stunning artistic decor!"
          />
          <SubEventCard
            Icon={IoIosCamera}
            title="Photorollix"
            description="Photorollix is a celebration of captured moments and creative vision. Showcase your ‘third eye’ skills and bring imagination to life through the lens. Relive and cherish timeless memories!"
          />
          <SubEventCard
            Icon={PiFlowerBold}
            title="Rangoli"
            description="Rangoli is more than just art—it's a vibrant expression of joy, positivity, and tradition. Let your colors weave stories and welcome prosperity with every design!"
          />
          <SubEventCard
            Icon={FaFlipboard}
            title="Colour Painting"
            description="Colour Painting/Sketching is the art of bringing imagination to life. Dip into your creative reservoir and let your brush or pencil speak on canvas—express, create, and inspire."
          />
          <SubEventCard
            Icon={TbBottleFilled}
            title="Bottle Painting"
            description="Bottle Painting transforms the ordinary into art. Let your creativity flow as you turn simple bottles into vibrant masterpieces, blending colors with imagination!"
          />
        </div>
      </section>

      <section className="px-4">
        <RoundSection rounds={rounds} />
      </section>

      {/* Event Managers Section */}
      <EventManagers managers={managers} />
    </div>
  );
};

export default KalaKriti;