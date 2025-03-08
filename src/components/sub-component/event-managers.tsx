import React from "react";
import ButtonLanding from "./button-landing";
import ManagerCard from "./manager-card";

interface Manager {
  imageUrl: string;
  name: string;
  contact: number;
}

interface EventManagersProps {
  managers: Manager[];
}

const EventManagers: React.FC<EventManagersProps> = ({ managers }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="w-[577.70px] h-[85px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium font-['Poppins'] uppercase tracking-[3.75px]">
        EVENT MANAGERS
      </div>
      <div className="w-[1023px] max-w-full px-4 text-center text-white text-2xl font-normal font-['Inter'] tracking-[3.75px]">
        For any queries regarding the event, feel free to reach out to any of
        the managers listed below. They are here to help and ensure a smooth
        experience for you!
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-20">
        {managers.map((manager, index) => (
          <ManagerCard
            key={index}
            imageUrl={manager.imageUrl}
            name={manager.name}
            contact={manager.contact}
          />
        ))}
      </div>

      <ButtonLanding label="Register Now" link="/dashboard" />
    </div>
  );
};

export default EventManagers;
