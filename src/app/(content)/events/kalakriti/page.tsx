//import EventConclusion from "@/components/sub-component/event-conclusion";
import EventIntro from "@/components/sub-component/event-intro";
import React from "react";
import SubEventCard from "@/components/sub-component/sub-event-card";


interface SubEventCardProps {
  imageUrl: string;
  title: string;
  description: string | React.ReactNode; // Updated type
}

const page = () => {
  return (
    <div className="flex flex-col space-y-10">
      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/defaultImage.png" // Updated path
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
              imageUrl="/subeventcard1.png" // Updated path
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
              description="	Theme: All Kinds of Art and Collection.	About: Imagine what life would have been without colors, art and aesthetics boring right? And what Techno would be without an Art exhibition indeed boring. But don't worry we would not give you a millisecond of it. So, to dazzle your eyes we have Pradarshini, an art exhibition by Kalakriti. and to quench the thirst of your imagination and take you on a bewildering journey worth remembering. Get yourself a pair of sunglasses and come engulf yourself in the art and aesthetics.
              	Venue:OPJU Library
            	Rules:
                1.	All the participants must register before the event.
                2.	All should Submit their Artistic Piece, Art or craft 2-3 days before the event.
                3.	Last minute changes in the above rules, if necessary, can be made.

               	Rounds:1 Round
               	Judgement Criteria: No Grading"
            />
           

           <SubEventCard
              imageUrl="/defaultImage.png" // Updated path
              title="drishyaam (Decoration)"
              description=" 	Theme: Festivals of India
                 	About: India is a land of diverse cultures, reflected in its vibrant array of festivals, with major celebrations including Holi (Festival of Colors), Diwali (Festival of Lights), Ganesh Chaturthi (celebrating Lord Ganesha's birth), Durga Puja (worshipping Goddess Durga), Onam (Kerala harvest festival), and Maha Shivratri (dedicated to Lord Shiva), each marked by unique rituals, food, and festivities across the country; showcasing India's rich heritage and unity in diversity.  
                	Venue: OPJU Campus
                	Rules:
                  1.	Theme of the competition is restricted to “Festivals of India”.
                  2.	In group there must be minimum 4 and maximum 6 members and boys’ participation in a group is Mandatory.
                 3.	There will be only one round of competition.
                 4.	Everything Will be provided by Organizers. 
                 5.	The participants will have to Decorate their respective Sets On or before the 1st day of Technorollix. 
                6.	Cash prizes will be awarded to First, Second and Third position holders, along with Certificates of Achievement. A Certificate of Participation will be given to all present participants.
                7.	The participant strictly adhere to the timings.
                8.	The decision of jury shall remain final and no correspondence will be entertained.
                9.	Last minute changes in the above rules, if necessary, can be made.
                	Rounds: 1 Round
               	Judgement Criteria: Judges’ marks"


              
            />
          </div>
          <div className="flex justify-around m-20">
             <SubEventCard
                imageUrl="/subeventcard1.png" // Ensure this path is correct
               title="Photorollix"
                description="
                 • Theme: Raigarh, JSP, Opju campus and Nature
                 • About: Photorollix is a recreational event where participants are welcomed to openly participate to show their 'third eye handling skill.' As it is said, 'The picture that you took with your camera is the imagination you want to create with the reality.' It will be the hall of fame showcasing different beautiful moments captured by photographers. It will make you re-live amazing moments again and again.
                • Venue: Online.
                • Rules:<br/>
                1. The event will happen in 2 rounds and continue for two days.
                2. i.e., 1st round before 1st Mar. and 2nd round before 2nd Feb 2023.
                3. Every participant will have to submit a single photo at the end of the day via Google Form, which will be framed at the gallery.
                4. Last-minute changes in the above rules, if necessary, can be made.
                • Rounds: 2 Rounds.
                • Judgement Criteria: Judges"
              />

            <SubEventCard
              imageUrl="/subeventcard1.png" // Updated path
              title="Rangoli"
              description= "	Theme: On the Spot.
              	About: Rangoli is a very popular folk art that has several connotations across India. It is a spiritual distribution of colors Which represents the happiness, positivity and liveliness of a household, and is intended to welcome the goddess of wealth and Prosperity.
             	Venue: In front of Chemistry Lab / 
             	Rules:
             1.	Theme of the competition is restricted to “ ”.
             2.	In group there must be minimum 4 and maximum 6 members and boys’ participation in a group is Mandatory.
             3.	There will be only one round of competition.
             4.	The participants have to bring their own material which they require in making rangoli. Colors Will be provided by Organizers. 
             5.	The participants will be given 2hr for making rangoli. No extra time will be given in any case.
             6.	Prizes will be awarded to First, Second and Third position holders, along with Certificates of Achievement. A Certificate of Participation will be given to all present participants.
             7.	The participant must strictly adhere to the timings.
             8.	The decision of jury shall remain final and no correspondence will be entertained.
             9.	Last minute changes in the above rules, if necessary, can be made.
             	Rounds: 1 Round"

            />

          </div>

          <div className="flex justify-around m-20">
          <SubEventCard
              imageUrl="/subeventcard1.png" // Updated path
              title="Colour Painting /Sketching"
              description= "	Theme: On the Spot
                            	About:In order to create, we draw from our inner well. This inner well, an artistic reservoir, is ideally like a well-stocked fish pond… If we don’t give some attention to upkeep, our well is apt to become depleted, stagnant, or blocked…As artists, we must learn to be self-nourishing. We must become alert enough to consciously replenish our creative resources as we draw on them — to restock the trout pond, Speak up…. Just Speak up…. on Canvas….
                          	Venue: Library
                          	Rules:
                         1.	Theme of the competition is restricted to “ ”.
                         2.	There will be only one round of competition.
                         3.	The participants have to bring their own Requirements.Paper/Canvas Will be provided by Organizers. 
                          4.	The participants will be given 2 hr for making the Art No extra time will be given in any case.
                         5.	Prizes will be awarded to First, Second and Third position holders, along with Certificates of Achievement. A Certificate of Participation will be given to all present participants.
                        6.	The participant must strictly adhere to the timings.
                        7.	The decision of jury shall remain final and no correspondence will be entertained.
                        8.	Last minute changes in the above rules, if necessary, can be made.
                       	Rounds: 1 Round"
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

      <div className="flex justify-center space-x-4">
          <img src="/Group 37147.png" alt="profile" />
          <img src="/Group 37147.png" alt="profile" />
          <img src="/Group 37147.png" alt="profile" />
        </div>

      </section>
    </div>
  );
};

export default page;