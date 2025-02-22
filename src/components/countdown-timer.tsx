import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date(2025, 2, 20, 0, 0, 0).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 mt-10">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-red-700 to-orange-500 text-white px-6 py-4 text-3xl font-bold rounded-lg border-2 border-yellow-500 shadow-md">
            {value < 10 ? `0${value}` : value}
          </div>
          <p className="text-white mt-2 text-sm uppercase">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
