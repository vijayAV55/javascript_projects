import React from "react";
import GrandChild from "./GrandChild";

function Parent({ message }) {
  return (
    <div id="Parent">
      <p>Parent</p>
      <GrandChild message={message} />
    </div>
  );
}

export default Parent;
