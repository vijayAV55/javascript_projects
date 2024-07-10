import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/actions/userActions";

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
