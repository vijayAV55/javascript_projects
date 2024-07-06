import { useState } from "react";

export const RecipeGenerator = () => {
  const [myname, setmyname] = useState("KAVYA");
  const [userdetails, setuserdetails] = useState({
    ingredients: "9640744182",
    instructions: "Vijay",
  });
  const chengemyname = () => {
    setmyname("KANNI");
  };

  const [usersInfo, setusersInfo] = useState(["SRAVAN", "VIJAY"]);
  const chengeuserdetails = () => {
    setuserdetails({
      ingredients: "9640744182",
      instructions: "PREM",
    });
  };
  const chengeuser = () => {
    setusersInfo(["VIJAYAKUMARI", "LIKITHA"]);
  };
  return (
    <div>
      <h2> RecipeGenerator Component</h2>
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
