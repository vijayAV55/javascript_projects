import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Dineshform from "./Dinesh_Form";
import Dinesh_table from "./Dinesh_Table";
import axios from "axios";

const Dineshuser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dateofjoind: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsersFromServer();
  }, []);
  const createUser = () => {
    axios.post("http://localhost:4200/dinesh_user", user).then(() => {
      console.log("User Added Successfully !!!");
      clearUser();
      getUsersFromServer();
    });
  };
  const editUser = (usr) => {
    setUser(usr);
    setIsEdit(true);
  };
  const deleteUser = (usr) => {
    axios.delete("http://localhost:4200/dinesh_user" + usr.id).then(() => {
      getUsersFromServer();
    });
  };
  const updateUser = () => {
    axios.put("http://localhost:4200/dinesh_user" + user.id, user).then(() => {
      getUsersFromServer();
      clearUser();
      setIsEdit(false);
    });
  };
  const clearUser = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      dateofjoind: "",
    });
  };
  const getUsersFromServer = () => {
    axios.get(" http://localhost:4200/dinesh_user  ").then(({ data }) => {
      setAllUsers(data);
    });
  };
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Dineshform
            handleChange={handleChange}
            user={user}
            createUser={createUser}
            isEdit={isEdit}
            updateUser={updateUser}
          />
        </div>
        <div className="col-8">
          <Dinesh_table
            allUsers={allUsers}
            editUser={editUser}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Dineshuser;
