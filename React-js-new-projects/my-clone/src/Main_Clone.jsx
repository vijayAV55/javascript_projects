import React from "react";
import gptLogo from "./assets/chatgpt.svg";
import AddBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";

const Main_Clone = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="upersidetop">
            <img src={gptLogo} alt="" className="logo" />{" "}
            <span className="brand">ChatGPT</span> <br />
            <button className="midBtn">
              <img src={AddBtn} alt="" className="addBtn" />
              New Chat
            </button>
            <div className="uppersideBottom">
              <button className="query">
                <img src={msgIcon} alt="" />
                What is programming
              </button>
              <button className="query">
                <img src={msgIcon} alt="" />
                How to use an API
              </button>
            </div>
          </div>
        </div>
        <div className="lowerside">
          <div className="listitems">
            <img src={home} alt="" className="listitemsimg" />
            Home
          </div>
          <div className="listitems">
            <img src={saved} alt="" className="listitemsimg" />
            Saved
          </div>
          <div className="listitems">
            <img src={rocket} alt="" className="listitemsimg" />
            Upgrate
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Main_Clone;
