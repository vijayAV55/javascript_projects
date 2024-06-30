import React from "react";

const Himadeep_Form = ({
  handleChange,
  user,
  createUser,
  isEdit,
  updateUser,
}) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            name="name"
            onChange={handleChange}
            placeholder="Enter Your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter your E-mail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Number
          </label>
          <input
            type="text"
            className="form-control"
            value={user.number}
            name="contact"
            onChange={handleChange}
            placeholder="Enter your phone number "
          />
        </div>
        {isEdit ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateUser}
          >
            Update User
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={createUser}
          >
            Create User
          </button>
        )}
      </form>
    </div>
  );
};

export default Himadeep_Form;
