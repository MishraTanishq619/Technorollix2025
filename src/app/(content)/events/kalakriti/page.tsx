import EventConclusion from "@/components/sub-component/event-conclusion";
import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";

interface SubEventCardProps {
  imageUrl: string;
  title: string;
  description: string | React.ReactNode;
}

const page = () => {
  return (
    <div className="flex flex-col space-y-10">
      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/subeventcard1.png" // Updated path
          title="Kalakriti"
          registrations={200}
          pricepool={30000}
          description="Craft is the vehicle for expressing your vision. Craft is the visible edge of Art. Here we are with 'Kalakriti,' which is a unique event driven by our artists' ideas, the context of space, season, and the vibes of the region. You will perceive 'Fiction turning into Reality.' You are going to witness a different field of abstract painting, fine arts photography, sculpture, and many more."
        />
      </section>

      <section>
        {/* Sub-Events section */}
        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Sub-events
          </div>
          <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          KalaKriti brings you a vibrant celebration of art and creativity! Explore the exciting sub-events—Pradarshini (Exhibition), Drishyaam (Decoration), Photorollix, Rangoli, Colour Painting, and Bottle Painting. Unleash your imagination, showcase your artistic skills, and be part of this colorful extravaganza!
          </div>
        </section>

        {/* Sub-Events Cards Section */}
        <section>
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="/subEventLogo.png" // Updated path
              title="Pradarshini (Exhibition)"
              description="KalaKriti presents Pradarshini, an art exhibition where colors, creativity, and expression come to life. Immerse yourself in a world of art that captivates"
            />
            <SubEventCard
              imageUrl="/Rectangle 197.png" // Updated path
              title="Drishyaam (DecoratioN)"
              description="India's rich heritage and vibrant culture come alive in Drishyaam by KalaKriti. Witness the essence of tradition through stunning artistic decor!"
            />
          </div>
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="/Rectangle 197.png" // Updated path
              title="Photorollix"
              description="Photorollix is a celebration of captured moments and creative vision. Showcase your ‘third eye’ skills and bring imagination to life through the lens. Relive and cherish timeless memories!"
            />
            <SubEventCard
              imageUrl="/Rectangle 197.png" // Updated path
              title="Rangoli"
              description="Put your photography skills to the test in our exciting photography contest! Capture stunning images that tell a story and showcase your unique perspective."
            />
          </div>

          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="/Rectangle 197.png" // Updated path
              title="Colour Painting"
              description="Colour Painting/Sketching is the art of bringing imagination to life. Dip into your creative reservoir and let your brush or pencil speak on canvas—express, create, and inspire"
            />
            <SubEventCard
              imageUrl="/Rectangle 197.png" // Updated path
              title="Bottle Painting"
              description="Bottle Painting transforms the ordinary into art. Let your creativity flow as you turn simple bottles into vibrant masterpieces, blending colors with imagination!"
            />
          </div>
        </section>

        
      </section>

      
      <section>
        {/* Sub-Events details */}
        <section className="flex flex-col items-center justify-center">
          <div className="w-[324.06px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            Subevents-details
          </div>
          
        </section>

        {/* Sub-Events details */}
        <section>
          <div className="flex justify-around m-20">
            <SubEventCard
              imageUrl="/subEventLogo.png" // Updated path
              title="Pradarshini (Exhibition)"
              description={
                <>
                    <ul>
                      <li>Theme: All Kinds of Art and Collection.</li>
                      <li>Venue: Central Library </li>
                      <li>Rounds: 1 round</li>
                      <li>Rules and Regulations: </li>
                      <li>1.All participants must register before the event.</li>
                      <li>2.All should submit their artistic piece, art or craft 2 to 3 days before the event.    </li>
                      <li>3.Last  minute changes in the above rules, if </li>
                    </ul>
                </>
              }
            />
           

           <SubEventCard
              imageUrl="/subeventcard1.png" // Updated path
              title="drishyaam (Decoration)"
              description={
                <>
                    <ul>
                      <li>Theme: Cultural Heritage.</li>
                      <li>Venue: Library Lawn & opposite to Chemistry Lab </li>
                      <li>Rounds: 1 round </li>
                      <li>Rules and Regulations: </li>
                      <li>1.The theme of the competition is restricted to “Cultural Heritage.</li>
                      <li>2.In a group, there must be a minimum of 4 and a maximum of 6 members, and boys’ participation in a group is mandatory.</li>
                    </ul>
                </>
              }
            />
          </div>
          <div className="flex justify-around m-20">
          <SubEventCard
              imageUrl="/subeventcard1.png" // Updated path
              title="Photorollix"
              description={
                <>
                    <ul>
                      <li>Theme: Bird view, Fish view, Insect view, OPJU Campus, and Nature. </li>
                      <li>Venue:  Library Lawn & opposite to Chemistry Lab.</li>
                      <li>Rounds: 2 round</li>
                      <li>Rules and Regulations: </li>
                      <li>1.The event will happen in two rounds and continue for two days.</li>
                      <li>2.Every participant will have to submit a single photo at the end of the day via a Google Form, which will be framed at the gallery.</li>
                    </ul>
                </>
              }
            />
            <SubEventCard
              imageUrl="/subeventcard1.png" // Updated path
              title="Rangoli"
              description={
                <>
                    <ul>
                      <li>Theme: On the Spot. </li>
                      <li>Venue: Library Lawn & opposite to Chemistry Lab.</li>
                      <li>Rounds: 1 round</li>
                      <li>Rules and Regulations: </li>
                      <li>1.In a group, there must be a minimum of 4 and a maximum of 6 members, and boys’ participation in a group is mandatory.</li>
                      <li>2.There will be only one round of competition.</li>
                      <li>3.Participants have to bring their own</li>
                    </ul>
                </>
              }
            />
          </div>

          <div className="flex justify-around m-20">
          <SubEventCard
              imageUrl="/subeventcard1.png" // Updated path
              title="Colour Painting /Sketching"
              description={
                <>
                    <ul>
                      <li>Theme: On the Spot. </li>
                      <li>Venue: Central Library </li>
                      <li>Rounds: 1 round</li>
                      <li>Rules and Regulations: </li>
                      <li>1.In a group, there must be a minimum of 4 and a maximum of 6 members, and boys’ participation in a group is mandatory.</li>
                      <li>2.Participants have to bring their own requirements. Paper/</li>

                    </ul>
                </>
              }
            />
            <SubEventCard
              imageUrl="/subeventcard1.png" // Updated path
              title="Bottle painting"
              description= "ideas and research in TechVision, the ultimate technical poster presentation event. Present your findings, prototypes, and groundbreaking concepts in a visually compelling format. Impress judges and peers with your creativity, clarity, and technical expertise."
            />
          </div>
        </section>

        
      </section>

      <section>
        <EventConclusion />
      </section>
    </div>
  );
};

export default page;