import React from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import SubEventCard from '@/components/sub-component/sub-event-card';
import ButtonLanding from '@/components/sub-component/button-landing';
import { BsAward } from "react-icons/bs";

const Page = () => {
  return (
    <div className="Adomania">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      <EventIntro
        imageUrl="/aimbiation-events-logo/adomania.jpg"
        title="Adomania"
        registrations={300}
        pricepool={12000}
        time='20-03-2025, 11:30 AM'
        venue='Live Class Room(G-15)'
        description="A creative marketing competition where teams must design and present an advertisement or marketing campaign for a given product or brand.
"
      /><br/><br/>
      <section className="flex flex-col items-center gap-8">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              SUB EVENT
            </h2>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <SubEventCard
                  Icon={BsAward}
                  title="ROUND1: GENUINE COMPANY "
                  description="Name of genuine company will be given to each team on which they have to make an advertisement. The Products name will be given on the spot

Time to Present: 30-60s
Time for Preparation: 15 minutes

Company:

Nescafe, Coffee; Maggie; Birla Opus Paints; HP Computers; IPhone 16; Dominos; Coca Cola; BOAT Earbuds; Britannia; Cake; Glow & Lovely; Policy Bazar; Lens kart.

Judgment Criteria, On the basis of (10) Creativity, (10) Originality, (10) Own Tagline and (20) Presentation.
Total Points: 50
These points can be used in the next Round.

(ONY 6-8 Teams will be selected for Next Round Based on Points)

"
                />
                <SubEventCard
                  Icon={BsAward}
                  title="ROUND 2 "
                  description="Name of a product will be provided through chit system to each team on which they have to make a full-fledged advertisement which will show all important features of the product. 

Time to Present: 60 sec
Time for Preparation: One Day

Products:

Sunglasses; Protein shake; Matrimonial site; Cosmetic and Beauty Product; Travelling bags; Clothing Brands; Home Cleaning Chemical; Electronic Appliance; Men Care Products; Shoes.

Judgment Criteria: On the basis of (10) Creativity, (10) Originality, (10) Presentation, (10) Tag line, (10) Brand name
Total Points: 50
"
                />
              </div>
            </div>
          </section>
          <br/><br/>
      {/* Event Managers */}
      <div className="text-center text-[#ffad3c] text-5xl font-medium uppercase">
        EVENT MANAGERS
      </div>
      <br/><br/>
      <div className="text-center text-white text-2xl font-normal">
        For any queries regarding the event, feel free to reach out to any of the managers listed below.
      </div>

      {/* Manager Images */}
      <div className="flex justify-center space-x-4 mt-6">
        <img src="/Group 37147.png" alt="profile" />
        <img src="/Group 37147.png" alt="profile" />
        <img src="/Group 37147.png" alt="profile" />
      </div>

      <div className='mb-10'><ButtonLanding label='Register Now' link='/dashboard'/></div>

      


    </div>
  );
};

export default Page;
