import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createuser, deleteuser, updateuser } from "./UsersSlice";
import "./Redux1.css";

const Main_Redux1 = () => {
  const [username, setusername] = useState("");
  const [age, setAge] = useState("");
  const [index, setIndex] = useState(null);

  const users = useSelector((state) => state.usersDetails.users);

  const dispatch = useDispatch();
  const handlecreateuser = () => {
    dispatch(createuser({ username, age }));
    setAge("");
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
    dispatch(updateuser({ index: index, newuser: { username, age } }));
    setAge("");
  };

  return (
    <div>
      <hr />
      <form action="">
        <label htmlFor="">User Name</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handlechenge}
        />{" "}
        <br />
        <label htmlFor="">Age</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">User Name</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handlechenge}
        />{" "}
        <br />
        <label htmlFor="">User Name</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handlechenge}
        />{" "}
        <br />
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

export default Main_Redux1;
