import React, { useState, useEffect, useMemo } from "react";

const CountdownTimer = () => {
  const eventDate = new Date(2025, 2, 20, 0, 0, 0).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Memoized styles with TypeScript-safe values
  const boxStyle: React.CSSProperties = useMemo(() => ({
    height: "128px",
    width: "110px",
    display: "flex",
    flexDirection: "column" as const, // TypeScript fix
    alignItems: "center" as const, // TypeScript fix
    justifyContent: "center" as const, // TypeScript fix
    backgroundImage: "url('/card.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }), []);

  const textStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#ffad3c",
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "'Inria Serif', serif",
    textShadow: "0px 4px 10px rgba(0, 0, 0, 0.78)",
  };

  const labelStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#aea8a8",
    fontSize: "1.5rem",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "3.75px",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "40px" }}>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={boxStyle}>
            <p style={textStyle}>{value < 10 ? `0${value}` : value}</p>
          </div>
          <p style={labelStyle}>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
