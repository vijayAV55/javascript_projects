import React, { useState } from "react";

function Counter(props) {
  const [count, setcount] = useState(0);

  const handleIncreament = () => {
    setcount(count + 1);
  };

  return <div>{props.render(count, handleIncreament)}</div>;
}

export default Counter;
