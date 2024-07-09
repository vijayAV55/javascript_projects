import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Welcome to dashboard</h2>

      <ul>
        <li>
          <NavLink to={"products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"reviews"}>Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Dashboard;
