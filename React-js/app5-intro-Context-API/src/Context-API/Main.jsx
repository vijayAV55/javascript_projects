import React, { useState } from "react";
import "./Main.css";
import GrandParent from "./GrandParent";
import { User_ContextProvider } from "./User_Context";

function Main() {
  const [message, setmessage] = useState("well come to API");
  const [greting, setgreting] = useState("Hello Form ....API");

  return (
    <div>
      {" "}
      <header className="App-header">
        <h1 id="Context_API">Contex-API</h1>
      </header>
      <div id="Main">
        <p>Mainparent</p>

        <User_ContextProvider value={greting}>
          <GrandParent message={message} />
        </User_ContextProvider>
      </div>
    </div>
  );
}

export default Main;
