import { useState } from "react";

export const MovieDatabase = () => {
  const [myname, setmyname] = useState("Rammohan");
  const [userdetails, setuserdetails] = useState({
    movietitle: "Devara",
    director: "Jaipal",
    releaseyear: 2005,
  });
  const chengemyname = () => {
    setmyname("KA pal");
  };

  const [usersInfo, setusersInfo] = useState(["Kamal", "Laxmi"]);
  const chengeuserdetails = () => {
    setuserdetails({
      movietitle: "surya",
      director: "Jaipal",
      releaseyear: 9005,
    });
  };
  const chengeuser = () => {
    setusersInfo(["Mirudha", "Narayana"]);
  };
  return (
    <div>
      <h2> MovieDatabase Component</h2>
      <button onClick={chengemyname}>chenge my name</button>
      <h2>my name is {myname}</h2>
      <br />
      <hr />
      <br />
      <button onClick={chengeuserdetails}>chengeuserdetails</button>
      <ul>
        {Object.values(userdetails).map((val) => (
          <li>{val}</li>
        ))}
      </ul>
      <br />
      <hr />
      <button onClick={chengeuser}>chengeuser</button>
      <br />
      <ul>
        {usersInfo.map((val) => (
          <li>{val}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
