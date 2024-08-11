import React, { useState } from "react";
import "./Age.css";
function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (!birthDate) return;

    let birthDateObj = new Date(birthDate);
    let d1 = birthDateObj.getDate();
    let m1 = birthDateObj.getMonth() + 1;
    let y1 = birthDateObj.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    setAge(`You are ${y3} years, ${m3} months, and ${d3} days old.`);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>
          React <br />
          <span> Age Calculator</span>
        </h1>
        <div className="input-box">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
          />
          <button onClick={calculateAge}>Calculate</button>
        </div>
        <p id="result">{age}</p>
      </div>
    </div>
  );
}

export default AgeCalculator;
