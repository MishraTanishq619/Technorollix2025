import Image from "next/image";
import React from "react";

function Junoon() {
  return (
    <div className="h-[4000px] w-full">
      <div className="absolute top-0 left-0 w-full h-auto pointer-events-none -z-10">
        <Image
          src="/junoon.jpg"
          className="w-full h-auto opacity-100"
          alt="Scrolling Background"
        />
        .
      </div>
    </div>
  );
}

export default Junoon;
