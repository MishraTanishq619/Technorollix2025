import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date(2025, 2, 20, 0, 0, 0).getTime();

  const [timeLeft, setTimeLeft] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          Minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          Seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-8 mt-10">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center ">
          <div
            className="h-32 w-[110px] flex flex-col items-center justify-center "
            style={{ background: "url(./card.png)", backgroundSize: "cover" }}
          >
            <p className="text-center text-[#ffad3c] text-5xl font-bold font-['Inria Serif'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              {value < 10 ? `0${value}` : value}
            </p>
          </div>
          <p className="text-center text-[#aea8a8] text-2xl font-normal font-['Poppins'] tracking-[2.64px] ">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
