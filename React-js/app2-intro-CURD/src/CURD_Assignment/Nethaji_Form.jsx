import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Nethaform from "./Nethaji__ form";
import Nethajitable from "./Nethaji_table";
const Nethaji = () => {
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
    axios.post("http://localhost:4200/Nethaji_Form", user).then(() => {
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
    axios.delete("http://localhost:4200/Nethaji_Form" + usr.id).then(() => {
      getUsersFromServer();
    });
  };
  const updateUser = () => {
    axios.put("http://localhost:4200/Nethaji_Form" + user.id, user).then(() => {
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
    axios.get(" http://localhost:4200/Nethaji_Form  ").then(({ data }) => {
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
          <Nethaform
            handleChange={handleChange}
            user={user}
            createUser={createUser}
            isEdit={isEdit}
            updateUser={updateUser}
          />
        </div>
        <div className="col-8">
          <Nethajitable
            allUsers={allUsers}
            editUser={editUser}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Nethaji;
