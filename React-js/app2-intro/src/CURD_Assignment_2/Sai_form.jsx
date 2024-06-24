import React from "react";

const Saiform = ({ handleChange, user, createUser, isEdit, updateUser }) => {
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            course
          </label>
          <input
            type="course"
            className="form-control"
            value={user.course}
            name="course"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Number
          </label>
          <input
            type="number"
            className="form-control"
            value={user.number}
            name="contact"
            onChange={handleChange}
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

export default Saiform;
