import React from 'react';
import EventConclusion from '@/components/sub-component/event-conclusion';
import EventIntro from '@/components/sub-component/event-intro';
import ManagerCard from '@/components/sub-component/manager-card'; // Ensure this is the correct path

const Kalakriti = () => {
  const subEvents = [
    {
      title: "Pradarshini (Exhibition)",
      description: "Translates 'presence', Pradarshini is an art exhibition where cosmic creators showcase their artistry! Immerse yourself in a world of art that captivates.",
      image: "/subeventcard1.png" // Replace with actual image path
    },
    {
      title: "Drishyaam (Decoration)",
      description: "Drishyaam is rich in history and vibrant culture. Join us in describing art through the lens of traditional stunning artistic decor.",
      image: "/path/to/drishyaam.png" // Replace with actual image path
    },
    {
      title: "Photorollix",
      description: "Photorollix is a collection of curated moments and creative human expression, captured in stunning visual storytelling.",
      image: "/path/to/photorollix.png" // Replace with actual image path
    },
    {
      title: "Rangoli",
      description: "Rangoli is the Indian art form - a vivid expression of joy! Create art that decorates prosperity with every design.",
      image: "/path/to/rangoli.png" // Replace with actual image path
    },
    {
      title: "Colour Painting",
      description: "Colour Painting transforms the creativity of the imagination into art! Unleash your perception and create art with imagination.",
      image: "/path/to/colourpainting.png" // Replace with actual image path
    },
    {
      title: "Bottle Painting",
      description: "Bottle Painting takes creativity and transforms it into art, honoring every object around us and portraying beauty in everything.",
      image: "/path/to/bottlepainting.png" // Replace with actual image path
    }
  ];

  return (
    <div className="">
      <EventIntro
        imageUrl="/card.png"
        title="Kalakriti"
        registrations={300}
        pricepool={8000}
        description="Craft is the vehicle for expressing your vision. Craft is the visible edge of Art..."
      />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              SUB-EVENTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {subEvents.map((event, index) => (
                <div key={index} className=" text-white">
                  <img src={event.image} alt={event.title} className="mx-auto mb-4 w-[150px] h-[150px]" />
                  <h3 className="text-2xl mb-2">{event.title}</h3>
                  <p className="text-lg">{event.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Rest of the sections unchanged */}
        </div>
        
        {/* Manager section here */}
        
      </div>
    </div>
  );
};

export default Kalakriti;