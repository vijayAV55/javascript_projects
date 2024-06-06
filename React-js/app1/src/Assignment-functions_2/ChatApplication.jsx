// ChatApplication
import { useState } from "react";

export const ChatApplication = () => {
  const [myname, setmyname] = useState("hemanth");
  const [userdetails, setuserdetails] = useState({
    sender: "vijay",
    receiver: "Jaipal",
    message: "hi ram !!...hello ",
  });
  const chengemyname = () => {
    setmyname("mom");
  };

  const [usersInfo, setusersInfo] = useState(["guru", "ram"]);
  const chengeuserdetails = () => {
    setuserdetails({
      sender: "kl",
      receiver: "tam",
      message: "hi ram !!...vijay...were ",
    });
  };
  const chengeuser = () => {
    setusersInfo(["cm", "pm"]);
  };
  return (
    <div>
      <h2>ChatApplication Component</h2>
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
