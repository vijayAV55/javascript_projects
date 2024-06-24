import React from "react";

const Saitable = ({ allUsers, editUser, deleteUser }) => {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>course</th>
            <th>number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.course}</td>
                <td>{usr.number}</td>

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
                    onClick={() => {
                      deleteUser(usr);
                    }}
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
  );
};

export default Saitable;
