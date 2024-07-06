import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Himadeep_Form from "./Hima_Form";
import Himadeep_Table from "./Hima_Table";

const Himadeep_user = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsersFromServer();
  }, []);
  const createUser = () => {
    axios.post("http://localhost:4200/himadeep_user", user).then(() => {
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
    axios.delete("http://localhost:4200/himadeep_user" + usr.id).then(() => {
      getUsersFromServer();
    });
  };
  const updateUser = () => {
    axios
      .put("http://localhost:4200/himadeep_user" + user.id, user)
      .then(() => {
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
      number: "",
    });
  };
  const getUsersFromServer = () => {
    axios.get(" http://localhost:4200/himadeep_user ").then(({ data }) => {
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
          <Himadeep_Form
            handleChange={handleChange}
            user={user}
            createUser={createUser}
            isEdit={isEdit}
            updateUser={updateUser}
          />
        </div>
        <div className="col-8">
          <Himadeep_Table
            allUsers={allUsers}
            editUser={editUser}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Himadeep_user;
