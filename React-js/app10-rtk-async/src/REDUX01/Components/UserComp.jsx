import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserFromServer,
  deleteUserFromServer,
  getUserFormServer,
} from "../UserSlice";

const UserComp = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.usersState.users);

  const handleGetusers = () => {
    dispatch(getUserFormServer());
  };
  const handledelete = (user) => {
    dispatch(deleteUserFromServer(user));
  };
  const handlecreateuser = () => {
    const userInfo = {
      fname: "vijay",
      id: "070d",
      age: "96",
      lname: "kumar",
      email: "kumar@gmail.com",
    };
    dispatch(createUserFromServer(userInfo));
  };
  return (
    <div>
      <button onClick={handleGetusers}>Get Users</button>
      <button onClick={handlecreateuser}>Createuser</button>
      <ul>
        {userDetails.map((user, i) => (
          <li key={i}>
            {user.fname}{" "}
            <button onClick={handledelete(user)}>Delete User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComp;
