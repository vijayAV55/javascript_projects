import React from "react";

export default function Vijay_Table({ allUsers, editUser, deleteUser }) {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Investment</th>
            <th>Date Of Joined</th>
            <th>Active</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.Name}</td>
                <td>{usr.email}</td>
                <td>{usr.investment}</td>
                <td>{usr.dateofjoind}</td>
                <td>{usr.active}</td>

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
}
