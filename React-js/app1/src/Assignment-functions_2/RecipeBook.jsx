import { useState } from "react";

export const RecipeBook = () => {
  const [myname, setmyname] = useState("RAMA");
  const [userdetails, setuserdetails] = useState({
    recipename: "check",
    ingredients: "no",
    instructions: "follow the rules",
  });
  const chengemyname = () => {
    setmyname("ROOPA");
  };

  const [usersInfo, setusersInfo] = useState(["SEENU", "VENU"]);
  const chengeuserdetails = () => {
    setuserdetails({
      recipename: "HOW",
      ingredients: "CEN",
      instructions: "follow the rules",
    });
  };
  const chengeuser = () => {
    setusersInfo(["MWWNA", "MEERA"]);
  };
  return (
    <div>
      <h2> RecipeBook Component</h2>
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
