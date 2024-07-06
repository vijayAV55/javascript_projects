import React, { useState } from "react";

const User = () => {
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    rollno: "",
    id: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const handleChange = (e) => {
    const newUser = { ...userDetails };
    newUser[e.target.name] = e.target.value;
    setUserDetails(newUser);
  };

  const addUser = () => {
    const newAllUsers = [...allUsers];
    newAllUsers.push(userDetails);
    setAllUsers(newAllUsers);
    clearForm();
  };

  const editUser = (usr) => {
    setUserDetails(usr);
  };

  const deleteUser = (index) => {
    const newAllUsers = allUsers.filter((i) => i !== index);
    setAllUsers(newAllUsers);
  };

  const clearForm = () => {
    setUserDetails({
      fname: "",
      lname: "",
      email: "",
      rollno: "",
      id: "",
    });
  };

  const { fname, lname, email, rollno, id } = userDetails;

  return (
    <div>
      <hr /> <br />
      <br />
      <nav className="" data-bs-theme="dark">
        <h1>vijayram</h1>
      </nav>
      <br />
      <br />
      <div className="container ">
        <div className="row ">
          <div className="col-3 ">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  First Name
                </label>
                <input
                  type="fname"
                  className="form-control"
                  name="fname"
                  value={fname}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Last Name
                </label>
                <input
                  type="lname"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="lname"
                  value={lname}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="email"
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Rollno
                </label>
                <input
                  type="rollno"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="rollno"
                  value={rollno}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Id
                </label>
                <input
                  type="id"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="id"
                  value={id}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addUser}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-9">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Rollno</th>
                  <th>id</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((usr, index) => {
                  return (
                    <tr key={index}>
                      <td>{usr.fname}</td>
                      <td>{usr.lname}</td>
                      <td>{usr.email}</td>
                      <td>{usr.rollno}</td>
                      <td>{usr.id}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            editUser(usr);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
