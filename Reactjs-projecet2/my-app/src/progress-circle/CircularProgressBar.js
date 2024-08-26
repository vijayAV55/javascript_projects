import React, { useState } from "react";
import CircularProgressBar from "./CircularProgressBar";
import "./CircularProgressBar.css";

function App() {
  const [progress, setProgress] = useState(50);

  return (
    <div className="App">
      <h1>Circular Progress Bar</h1>
      <CircularProgressBar progress={progress} size={200} />
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
    </div>
  );
}

export default App;
