import React from "react";
import "./SPA2.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainForm from "./MainForm";
import Navigastion from "./Navigastion";
import TableRegister from "./TableRegister";
import RegisterForm from "./RegisterForm";

const Main_Component = () => {
  return (
    <div>
      <h1 className="main">Main-Component</h1>
      <Router>
        <Navigastion />
        <Routes>
          <Route path="/mainform" element={<MainForm />}></Route>
          <Route path="/table" element={<TableRegister />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main_Component;
