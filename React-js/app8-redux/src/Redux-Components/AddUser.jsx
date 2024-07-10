import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userActions";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name,
    };
    dispatch(addUser(newUser));
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
