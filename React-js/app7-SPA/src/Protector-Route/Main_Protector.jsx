import React from "react";
import User from "./User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import PageNotfound from "./PageNotfound";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Logout from "./Logout";
import UserDetails from "./UserDetails";

const Main_Protector = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/users/:id" element={<UserDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/users" element={<User />}></Route>

          <Route path="*" element={<PageNotfound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main_Protector;
