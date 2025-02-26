import React from "react";
import ButtonLanding from "./button-landing";
import ManagerCard from "./manager-card";

const EventManagers = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center" >
        <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT MANAGERS
        </div>
        <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of
          the managers listed below. They are here to help and ensure a smooth
          experience for you!
        </div>

        <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
        </div>
        <ButtonLanding label="Register Now" />
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
