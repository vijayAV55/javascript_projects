import React from "react";
import SAP from "./SAP.css";
import { Link } from "react-router-dom";
const Nav_bar = () => {
  return (
    <div>
      <div id="nav">
        <ul>
          <li className="nav-item">
            <Link to={"/"} className="nav-item">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-item">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-item">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/form"} className="nav-item">
              Form{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-item">
              login
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link to={"/table"} className="nav-item">
              Table{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav_bar;
