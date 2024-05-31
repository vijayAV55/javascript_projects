import { useState } from "react";

export const LanguageLearningApp = () => {
  const [myname, setmyname] = useState("Kushi");
  const [userdetails, setuserdetails] = useState({
    vocabularywords: "aeiou",
    definitions: "60%",
    examplesentences: "6000",
  });
  const chengemyname = () => {
    setmyname("VIshnu");
  };

  const [usersInfo, setusersInfo] = useState(["PIn", "pream"]);
  const chengeuserdetails = () => {
    setuserdetails({
      vocabularywords: "man",
      definitions: "90%",
      examplesentences: "0000",
    });
  };
  const chengeuser = () => {
    setusersInfo(["Murali", "Naidu"]);
  };
  return (
    <div>
      <h2> LanguageLearningApp Component</h2>
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
