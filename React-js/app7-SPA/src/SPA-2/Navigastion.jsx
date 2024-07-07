import React from "react";

import { Link } from "react-router-dom";

const Navigastion = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="bar">
          <li className="nav-item">
            <Link to={"/mainform"} className="nav-item">
              Main-Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/table"} className="nav-item">
              Table-Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} className="nav-item">
              RegisterForm{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigastion;
