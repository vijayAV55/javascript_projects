import React, { useEffect, useState } from "react";
import Volleyball from "./Volleyball_Form";

import Volleyball_Table from "./Volleyball_Table";
import axios from "axios";

function Hari_user() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    fname: "",
    age: "",
    Grade: "",
  });
  const [allUsers, setallUser] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsersFromServer();
  }, []);

  const addUser = () => {
    axios.post("http://localhost:4200/Hari", user).then(() => {
      console.log("user Add sfy");
      getUsersFromServer();
      clearUser();
    });
  };
  const editUser = (usr) => {
    setUser(usr);
    setIsEdit(true);
  };
  const deleteUser = (usr) => {
    axios.delete("http://localhost:4200/Hari/" + usr.id).then(() => {
      getUsersFromServer();
    });
  };
  const updateuser = () => {
    axios.put("http://localhost:4200/Hari/" + user.id, user).then(() => {
      getUsersFromServer();
      clearUser();
      setIsEdit(false);
    });
  };
  const clearUser = () => {
    setUser({ fname: "", lname: "", age: "", Grade: "" });
  };
  const handleChange = (e) => {
    console.log(e);
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
  };
  const getUsersFromServer = () => {
    axios.get("http://localhost:4200/Hari ").then(({ data }) => {
      console.log(data);
      setallUser(data);
    });
  };

  return (
    <div>
      <Volleyball
        handleChange={handleChange}
        isEdit={isEdit}
        addUser={addUser}
        user={user}
        updateuser={updateuser}
      />
      {/* <Volleyball_Table
        allusers={allUsers}
        deleteuser={deleteUser}
        edituser={editUser}
      /> */}
      {/* <Volleyball_Table allusers={allUsers} /> */}
      {/* <Vtable allUsers={allUsers} edituser={editUser} /> */}
      <Volleyball_Table
        allUsers={allUsers}
        edituser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default Hari_user;
