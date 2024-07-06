import { useState } from "react";

export const FlightBookingSystem = () => {
  const [myname, setmyname] = useState("RR");
  const [userdetails, setuserdetails] = useState({
    flightnumber: "44182",
    departurecity: "Vijay",
    arrivalcity: "th",
    departuretime: "hm",
  });
  const chengemyname = () => {
    setmyname("hm");
  };

  const [usersInfo, setusersInfo] = useState(["H", "J"]);
  const chengeuserdetails = () => {
    setuserdetails({
      flightnumber: "009988",
      departurecity: "Ram",
      arrivalcity: "oo",
      departuretime: "10/30/4000",
    });
  };
  const chengeuser = () => {
    setusersInfo(["I", "N"]);
  };
  return (
    <div>
      <h2> FlightBookingSystem Component</h2>
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
