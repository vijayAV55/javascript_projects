import React from "react";

function Hover({ count, handleIncreament }) {
  return (
    <div>
      <h1>Hover_Counter</h1>
      <button className="btn btn-danger" onMouseOver={handleIncreament}>
        Hover on me
      </button>
      <br />
      <br />
      <h2> you hoverd {count} times</h2>
    </div>
  );
}

export default Hover;
