import React from "react";
import Child from "./Child";

function GrandChild({ message }) {
  return (
    <div id="GrandChild">
      <Child message={message} />
    </div>
  );
}

export default GrandChild;
