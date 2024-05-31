import { useState } from "react";

export const GameCharacter = () => {
  const [myname, setmyname] = useState("RR");
  const [userdetails, setuserdetails] = useState({
    name: "Ram",
    level: "200",
    healthpoints: "10%",
  });
  const chengemyname = () => {
    setmyname("hm");
  };

  const [usersInfo, setusersInfo] = useState(["K", "L"]);
  const chengeuserdetails = () => {
    setuserdetails({
      name: "kumar",
      level: "400",
      healthpoints: "100%",
    });
  };
  const chengeuser = () => {
    setusersInfo(["M", "N"]);
  };
  return (
    <div>
      <h2> GameCharacter Component</h2>
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
