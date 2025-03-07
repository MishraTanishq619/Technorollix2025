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
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[577.70px] h-[85px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT MANAGERS
        </div>
        <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of
          the managers listed below. They are here to help and ensure a smooth
          experience for you!
        </div>

        <div className="flex justify-center space-x-40 items-center mt-20">
          {managers.map((manager, index) => (
            <ManagerCard
              key={index}
              imageUrl={manager.imageUrl}
              name={manager.name}
              contact={manager.contact}
            />
          ))}
        </div>
        <ButtonLanding label="Register Now" link="/dashboard"/>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default EventManagers;
