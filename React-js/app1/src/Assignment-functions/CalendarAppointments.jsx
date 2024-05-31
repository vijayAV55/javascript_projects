import { useState } from "react";

export const CalendarAppointments = () => {
  const [myname, setmyname] = useState("vijayram");
  const [userdetails, setuserdetails] = useState({
    eventname: "therrtham",
    date: "23/4/2026",
    time: "9:30 am",
    location: "Bank",
  });
  const chengemyname = () => {
    setmyname("seenu");
  };

  const [usersInfo, setusersInfo] = useState(["guru", "ram"]);
  const chengeuserdetails = () => {
    setuserdetails({
      eventname: "dvd",
      date: "23/4/2023",
      time: "9:00am",
      location: "mnh",
    });
  };
  const chengeuser = () => {
    setusersInfo(["ram", "kumar"]);
  };
  return (
    <div>
      <h2>CalendarAppointments Component</h2>
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
      <br />
    </div>
  );
};
