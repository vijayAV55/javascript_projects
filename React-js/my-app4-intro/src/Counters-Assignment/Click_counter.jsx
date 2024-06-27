import { useState } from "react";

function Click_counter({ count, handleIncreament }) {
  //   const [count, setcount] = useState(0);

  //   const handleIncreament = () => {
  //     setcount(count + 1);
  //   };
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
export default Click_counter;
