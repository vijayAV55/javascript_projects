import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Saitable from "./Sai_Table";
import Saiform from "./Sai_form";

const Saiuser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    course: "",
    number: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsersFromServer();
  }, []);
  const createUser = () => {
    axios.post("http://localhost:4200/Sai_user", user).then(() => {
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
    axios.delete("http://localhost:4200/Sai_user" + usr.id).then(() => {
      getUsersFromServer();
    });
  };
  const updateUser = () => {
    axios.put("http://localhost:4200/Sai_user" + user.id, user).then(() => {
      getUsersFromServer();
      clearUser();
      setIsEdit(false);
    });
  };
  const clearUser = () => {
    setUser({
      name: "",
      email: "",
      course: "",
      number: "",
    });
  };
  const getUsersFromServer = () => {
    axios.get("http://localhost:4200/Sai_user ").then(({ data }) => {
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
          <Saiform
            handleChange={handleChange}
            user={user}
            createUser={createUser}
            isEdit={isEdit}
            updateUser={updateUser}
          />
        </div>
        <div className="col-8">
          <Saitable
            allUsers={allUsers}
            editUser={editUser}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Saiuser;
