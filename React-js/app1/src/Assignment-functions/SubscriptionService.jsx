// export class SubscriptionService extends Component {
//   state = {
//     posttitle: "li",
//     person: {

//     },
import { useState } from "react";

export const SubscriptionService = () => {
  const [myname, setmyname] = useState("RAMA");
  const [userdetails, setuserdetails] = useState({
    name: "vijay",
    ingredients: "9640744182",
    instructions: "Vijay",
    age: "23",
  });
  const chengemyname = () => {
    setmyname("ROOPA");
  };

  const [usersInfo, setusersInfo] = useState(["SEENU", "VENU"]);
  const chengeuserdetails = () => {
    setuserdetails({
      name: "vijay",
      ingredients: "9640744182",
      instructions: "Vijay",
      age: "23",
    });
  };
  const chengeuser = () => {
    setusersInfo(["MWWNA", "MEERA"]);
  };
  return (
    <div>
      <h2> SubscriptionService Component</h2>
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
