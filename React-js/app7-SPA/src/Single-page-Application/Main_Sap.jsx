import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav_bar from "./Nav_bar";
import Table_page from "./Table_page";
import Form_Page from "./Form_Page";
import Login from "./Login";

const Main_Sap = () => {
  return (
    <div>
      <Router>
        <Nav_bar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/form" element={<Form_Page />}></Route>
          <Route path="*" element={<Table_page />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main_Sap;
