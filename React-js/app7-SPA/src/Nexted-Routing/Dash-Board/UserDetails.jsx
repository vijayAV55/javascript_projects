import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setuser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const userDate = await response.json();
    console.log(userDate);
    setuser(userDate);
  };

  return (
    <div>
      <h1>Wellcome details</h1>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.username}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
