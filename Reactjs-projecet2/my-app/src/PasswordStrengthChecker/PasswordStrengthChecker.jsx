import React, { useState } from "react";
import "./PasswordStrengthChecker.css";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length === 0) {
      setStrength("");
    } else if (value.length < 4) {
      setStrength("weak");
    } else if (value.length >= 4 && value.length < 8) {
      setStrength("medium");
    } else if (value.length >= 8) {
      setStrength("strong");
    }
  };

  const getStrengthColor = () => {
    if (strength === "weak") return "#ff5925";
    if (strength === "medium") return "yellow";
    if (strength === "strong") return "#26d730";
    return "";
  };

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="password"
          style={{ borderColor: getStrengthColor() }}
        />

        {password && (
          <p id="message" style={{ color: getStrengthColor() }}>
            password is <span id="strength">{strength}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
