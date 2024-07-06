import React from "react";

function Click({ count, handleIncreament }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={handleIncreament}>
        {" "}
        Click Me
      </button>{" "}
      <br />
      <br />
      <h2>you clicked {count} times</h2>
    </div>
  );
}

export default Click;
