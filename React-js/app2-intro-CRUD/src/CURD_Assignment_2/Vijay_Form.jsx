import React from "react";

export default function Vijay_Form({
  handleChange,
  user,
  addUser,
  updeteUser,
  isEdit,
}) {
  return (
    <div>
      {" "}
      <form>
        <div className="mb-3">
          <input
            type="name"
            className="form-control"
            name="Name"
            value={user.Name}
            placeholder="Your name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            placeholder="Your Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="dateofjoined"
            className="form-control"
            onChange={(e) => {
              handleChange(e);
            }}
            name="dateofjoined"
            value={user.dateofjoined}
            placeholder="Your phone Number"
          />
        </div>
        <div className="mb-3">
          <input
            type="investment"
            className="form-control"
            name="investment"
            value={user.investment}
            placeholder="Your Web Site Starts With http://"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="active"
            className="form-control"
            name="active"
            value={user.active}
            placeholder="Type Your messege here "
            onChange={handleChange}
          />
        </div>
        {isEdit ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={updeteUser}
          >
            update User
          </button>
        ) : (
          <button type="button" onClick={addUser}>
            addUser
          </button>
        )}
      </form>
    </div>
  );
}
