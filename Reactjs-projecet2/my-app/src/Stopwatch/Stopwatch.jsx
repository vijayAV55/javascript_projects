import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{time}s</h1>
      <button onClick={handleStartStop} style={styles.button}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset} style={styles.button}>
        Reset
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  time: {
    fontSize: "48px",
    margin: "20px 0",
  },
  button: {
    fontSize: "20px",
    margin: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default Stopwatch;
