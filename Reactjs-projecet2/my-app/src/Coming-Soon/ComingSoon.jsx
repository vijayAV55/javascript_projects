import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import triangle from "./triangle.png";
import rocket from "./rocket.png";
import "./ComingSoon.css";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("August 20, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="content">
        <p>Website is Under Maintenance</p>
        <h2>
          We're <span>Launching</span> Soon
        </h2>
        <div className="lunch-time">
          <div>
            <p id="days">{timeLeft.days}</p>
            <span>Days</span>
          </div>
          <div>
            <p id="hours">{timeLeft.hours}</p>
            <span>Hours</span>
          </div>
          <div>
            <p id="minutes">{timeLeft.minutes}</p>
            <span>Minutes</span>
          </div>
          <div>
            <p id="seconds">{timeLeft.seconds}</p>
            <span>Seconds</span>
          </div>
        </div>
        <button type="button">
          Learn More <img src={triangle} alt="Arrow" />
        </button>
      </div>
      <img src={rocket} alt="Rocket" className="rocket" />
    </div>
  );
};

export default ComingSoon;
