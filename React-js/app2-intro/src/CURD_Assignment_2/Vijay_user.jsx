import React, { useEffect, useState } from "react";
import Vijay_Form from "./Vijay_Form";
import Vijay_Table from "./Vijay_Table";
import axios from "axios";

export default function Vijay_user() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    investment: "",
    dateofjoined: "",
    active: "",
  });
  const [allUsers, setallUser] = useState([]);

  const [isEdit, setIsedit] = useState(false);

  useEffect(() => {
    getUserFromServer();
  }, []);

  const addUser = () => {
    axios.post("http://localhost:4200/vijay_user", user).then(() => {
      console.log("User Added Successfully !!!");
      clearUser();
    });
  };
  const editUser = (usr) => {
    setuser(usr);
    setIsedit(true);
  };
  const deleteUser = (usr) => {
    axios.delete("http://localhost:4200/vijay_user" + usr.id).then(() => {
      getUserFromServer();
    });
  };
  const updeteUser = () => {
    axios.put("http://localhost:4200/vijay_user" + user.id, user).then(() => {
      getUserFromServer();
      clearUser();
      setIsedit(false);
    });
  };
  const clearUser = () => {
    setuser({
      name: "",
      email: "",
      investment: "",
      dateofjoined: "",
      active: "",
    });
  };
  const getUserFromServer = () => {
    axios.get("http://localhost:4200/vijay_user").then((data) => {
      setallUser(data);
    });
  };
  const handleChange = (e) => {
    console.log(e);
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setuser(newuser);
  };

  return (
    <div>
      <h1>Vijay_application</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Vijay_Form
              handleChange={handleChange}
              user={user}
              isEdit={isEdit}
              updeteUser={updeteUser}
              addUser={addUser}
            />
          </div>
          <div className="col-8">
            <Vijay_Table
              allUsers={allUsers}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
