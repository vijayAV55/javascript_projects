import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import { Suspense } from "react";

const User = React.lazy(() => import("./User"));
const PageNotfound = React.lazy(() => import("./PageNotfound"));
const UserDetails = React.lazy(() => import("./UserDetails"));
const Login = React.lazy(() => import("./Login"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const Products = React.lazy(() => import("./Products"));
const Projects = React.lazy(() => import("./Projects"));
const Reviews = React.lazy(() => import("./Reviews"));
const NavBar = React.lazy(() => import("./NavBar"));

const Main_Lazy = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={"Loading..."}>
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
        </Suspense>
      </Router>
    </div>
  );
};

export default Main_Lazy;
