import React, { useEffect, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handlechenge = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    localStorage.setItem("loggedInUser", JSON.stringify(formData));
  };

  return (
    <div>
      <form action="">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handlechenge}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handlechenge}
          />
        </div>
      </form>
      <button type="button" className="btn btn-primary" onClick={handlesubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
