"use client";
import React from "react";

interface RoundCardProps {
  title: string;
  description: string;
}

const RoundCard: React.FC<RoundCardProps> = ({ title, description }) => {
  return (
    <div className="border-2 border-yellow-500 p-6 rounded-lg text-center w-96 text-white bg-opacity-20 bg-black">
      <div className="text-lg font-bold">{title}</div>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

const RoundsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4 my-10">
      <h2 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[3.75px] mb-8">
        Rounds
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RoundCard
          title="Accuracy Test"
          description="Evaluates drone movement—forward, backward, elevation, and descent."
        />
        <RoundCard
          title="Obstacle Avoiding Test"
          description="Measures how efficiently the drone avoids obstacles and reaches its destination."
        />
        <RoundCard
          title="Final Round"
          description="A race where drones compete to complete the track in the shortest time."
        />
      </div>
    </section>
  );
};

export default RoundsSection;
