import React, { useState } from "react";
import Click_counter from "./Click_counter";
import Hover_Counter from "./Hover_Counter";
import Counter from "./Counter";

function Counter_component() {
  const [count, setcount] = useState(0);

  const handleIncreament = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h1>Counter_component</h1>
      <Counter
        render={
          <Click_counter count={count} handleIncreament={handleIncreament} />
        }
      />{" "}
      <hr />
      <Counter
        render={
          <Hover_Counter count={count} handleIncreament={handleIncreament} />
        }
      />
    </div>
  );
}

export default Counter_component;
