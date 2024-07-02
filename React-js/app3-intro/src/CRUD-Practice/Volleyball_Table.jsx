function Volleyball_Table({ allUsers, deleteUser, edituser }) {
  console.log(allUsers);
  return (
    <div>
      <h1>Volleyball_Table</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {allUsers.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.age}</td>
                <td>{user.Grade}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      edituser(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user);
                    }}
                  >
                    delete
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

export default Volleyball_Table;
