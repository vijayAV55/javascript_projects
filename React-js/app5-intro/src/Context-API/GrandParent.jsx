import React from "react";
import Parent from "./Parent";

function GrandParent({ message }) {
  return (
    <div id="GrandParent">
      <p>GrandParent</p>
      <Parent message={message} />
    </div>
  );
}

export default GrandParent;
