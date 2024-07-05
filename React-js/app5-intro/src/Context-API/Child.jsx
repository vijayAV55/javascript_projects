import React from "react";
import { User_Contextconsumer } from "./User_Context";

function Child({ message }) {
  return (
    <div id="Child">
      <User_Contextconsumer>
        {(value) => {
          return <h2>{value}</h2>;
        }}
      </User_Contextconsumer>

      <h2>{message}</h2>
    </div>
  );
}

export default Child;
