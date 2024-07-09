import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import UserDetails from "./UserDetails";
import Login from "./Login";
import User from "./User";
import PageNotfound from "./PageNotfound";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Projects from "./Projects";
import Reviews from "./Reviews";

const Main_Dashboard = () => {
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

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="products" element={<Products />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>

          <Route path="*" element={<PageNotfound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main_Dashboard;
