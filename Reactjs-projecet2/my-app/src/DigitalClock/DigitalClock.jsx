import React, { useState, useEffect } from "react";
import "./DigitalClock.css";
const DigitalClock = () => {
  const [time, setTime] = useState({
    hrs: "00",
    min: "00",
    sec: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hrs: now.getHours().toString().padStart(2, "0"),
        min: now.getMinutes().toString().padStart(2, "0"),
        sec: now.getSeconds().toString().padStart(2, "0"),
      });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="clock">
          <span id="hrs">{time.hrs}</span>
          <span>:</span>
          <span id="min">{time.min}</span>
          <span>:</span>
          <span id="sec">{time.sec}</span>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
