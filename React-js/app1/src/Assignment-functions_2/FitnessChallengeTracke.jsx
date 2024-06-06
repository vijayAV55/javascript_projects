// export class FitnessChallengeTracke extends Component {
//   state = {
//     posttitle: "lk",
//     person: {

//     },
import { useState } from "react";

export const FitnessChallengeTracke = () => {
  const [myname, setmyname] = useState("RR");
  const [userdetails, setuserdetails] = useState({
    challengename: "ram",
    startdate: "how can",
    enddate: "yu",
    tags: "love you",
  });
  const chengemyname = () => {
    setmyname("hm");
  };

  const [usersInfo, setusersInfo] = useState(["Rcb", "HRB"]);
  const chengeuserdetails = () => {
    setuserdetails({
      challengename: "tm",
      startdate: "how can you",
      enddate: "12:90",
      tags: "hm hmhhm",
    });
  };
  const chengeuser = () => {
    setusersInfo(["CSS", "KKR"]);
  };
  return (
    <div>
      <h2>FitnessChallengeTracke Component</h2>
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
