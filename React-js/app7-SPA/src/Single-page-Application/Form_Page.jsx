import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form_Page = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    dateofjoind: "",
  });
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    navigate("/login", { state: user });
  };

  return (
    <div className="">
      <h1>Form_Page</h1>
      <form className="form">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handlechange}
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
            value={user.password}
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Date Of Joind
          </label>
          <input
            type="text"
            className="form-control"
            name="dateofjoind"
            value={user.dateofjoind}
            onChange={handlechange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form_Page;
