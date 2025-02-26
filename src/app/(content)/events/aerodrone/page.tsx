import EventConclusion from "@/components/sub-component/event-conclusion";
import EventIntro from "@/components/sub-component/event-intro";
import React from "react";

const Aerodrone = () => {
  return (
    <div>
      <EventIntro
        imageUrl="/Rectangle 197.png"
        title="Aerodrone"
        registrations={300}
        pricepool={30000}
        description=""
      />
      <div>
        <h1 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            THEME
        </h1>
        <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white text-center">  
              <li> “Innovation, transformation, and vitalizing equipment, knowledge, and skill” </li>
              </ul>
        </div>
      <div>
        <h3 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">EVENTS ROUNDS</h3>
        <p className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white text-center">
        Here are the exciting rounds of this event! Read the details carefully and select the ones that align with your interests and expertise. Seize the opportunity to participate and shine!
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Accuracy Test */}
          <div className="bg-red-800 p-6 rounded-2xl shadow-lg border border-yellow-500">
            <div className="text-2xl font-semibold">Accuracy Test</div>
            <p className="mt-2 text-gray-200 text-sm">
              Evaluates drone movement—forward, backward, elevation, and
              descent.
            </p>
          </div>

          {/* Obstacle Avoiding Test */}
          <div className="bg-red-800 p-6 rounded-2xl shadow-lg border border-yellow-500">
            <div className="text-2xl font-semibold">Obstacle Avoiding Test</div>
            <p className="mt-2 text-gray-200 text-sm">
              Measures how efficiently the drone avoids obstacles and reaches
              its destination.
            </p>
          </div>

          {/* Final Round */}
          <div className="bg-red-800 p-6 rounded-2xl shadow-lg border border-yellow-500">
            <div className="text-2xl font-semibold">Final Round</div>
            <p className="mt-2 text-gray-200 text-sm">
              A race where drones compete to complete the track in the shortest
              time.
            </p>
          </div>
        </div>
      </div>
      <EventConclusion />
    </div>
  );
};

export default Aerodrone;
