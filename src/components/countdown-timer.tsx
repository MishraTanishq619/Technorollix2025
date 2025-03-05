import { useState,useEffect,useMemo } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });
  
  useEffect(() => {
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

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);  // empty dependency array ensures this runs only once on the client

  const boxStyle: React.CSSProperties = useMemo(() => ({
    height: "128px",
    width: "110px",
    display: "flex",
    flexDirection: "column" as const, 
    alignItems: "center" as const, 
    justifyContent: "center" as const, 
    backgroundImage: "url('/card.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }), []);

  const textStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#ffad3c",
    fontSize: "3rem",
    letterSpacing : "3.75px",
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
