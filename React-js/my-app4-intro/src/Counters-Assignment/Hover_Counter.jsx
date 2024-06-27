import React, { useState } from "react";

function Hover_Counter({ count, handleIncreament }) {
  // const [count, setcount] = useState(0);

  // const handleIncreament = () => {
  //   setcount(count + 1);
  // };

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

export default Hover_Counter;
