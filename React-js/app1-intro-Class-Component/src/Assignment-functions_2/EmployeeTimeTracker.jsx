import { useState } from "react";

export const EmployeeTimeTracker = () => {
  const [myname, setmyname] = useState("RR");
  const [userdetails, setuserdetails] = useState({
    employeename: "dinesh",
    date: "27/6/2006",
    starttime: "10:00 am",
    endtime: "6:00 pm",
  });
  const chengemyname = () => {
    setmyname("hm");
  };

  const [usersInfo, setusersInfo] = useState(["e", "f"]);
  const chengeuserdetails = () => {
    setuserdetails({
      employeename: "Ramesh",
      date: "27/6/2009",
      starttime: "12:00 pm",
      endtime: "12:00 am",
    });
  };
  const chengeuser = () => {
    setusersInfo(["g", "h"]);
  };
  return (
    <div>
      <h2> EmployeeTimeTracker Component</h2>
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
