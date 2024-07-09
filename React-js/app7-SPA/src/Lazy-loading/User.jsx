import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [userDetails, setuserdetails] = useState([]);
  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then();
    const users = await response.json();
    setuserdetails(users);
  };
  return (
    <div>
      {userDetails.map((usr, i) => (
        <p key={i}>
          <Link to={`${usr.id}`}>{usr.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default User;
