// export class HotelReservationSystem extends Component {
//   state = {
//     posttitle: "pk",
//     person: {

//     },
import { useState } from "react";

export const HotelReservationSystem = () => {
  const [myname, setmyname] = useState("DARk");
  const [userdetails, setuserdetails] = useState({
    roomnumber: "9640744182",
    guestname: "Vijay",
    checkindate: "12/3/2009",
    checkoutdate: "3/4/2009",
  });
  const chengemyname = () => {
    setmyname("Hani");
  };

  const [usersInfo, setusersInfo] = useState(["Ganesh", "Giri"]);
  const chengeuserdetails = () => {
    setuserdetails({
      roomnumber: "9640744182",
      guestname: "Guna",
      checkindate: "12/3/000",
      checkoutdate: "3/4/000",
    });
  };
  const chengeuser = () => {
    setusersInfo(["Hari", "Dyantej"]);
  };
  return (
    <div>
      <h2> HotelReservationSystem Component</h2>
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
