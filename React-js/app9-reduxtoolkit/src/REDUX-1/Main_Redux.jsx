import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createuser, deleteuser, updateuser } from "./UsersSlice";
import "./Redux1.css";

const Main_Redux = () => {
  const [username, setusername] = useState("");
  const [index, setIndex] = useState(null);

  const users = useSelector((state) => state.usersDetails.users);

  const dispatch = useDispatch();
  const handlecreateuser = () => {
    dispatch(createuser(username));
  };

  const handledelete = (usr) => {
    dispatch(deleteuser(usr));
  };

  const handlechenge = (e) => {
    setusername(e.target.value);
  };
  const handleEdit = (usr, i) => {
    setusername(usr);
    setIndex(i);
  };

  const handleupdateuser = (i) => {
    dispatch(updateuser({ index: index, newuser: username }));
  };

  return (
    <div>
      <form action="">
        <label htmlFor="">User:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handlechenge}
        />
      </form>
      {index === null ? (
        <button id="ram" className="btn btn-primary" onClick={handlecreateuser}>
          Createuser
        </button>
      ) : (
        <button id="ram" className="btn btn-danger" onClick={handleupdateuser}>
          Updateuser
        </button>
      )}

      <ul>
        {users.map((usr, i) => (
          <li key={i}>
            {usr}
            <button
              className="name"
              onClick={() => {
                handleEdit(usr, i);
              }}
            >
              Edit
            </button>
            <button
              className="name"
              onClick={() => {
                handledelete(usr, i);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main_Redux;
