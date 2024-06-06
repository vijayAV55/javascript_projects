import { useState } from "react";

export const BlogPostManager = () => {
  const [myname, setmyname] = useState("vijayram");
  const [userdetails, setuserdetails] = useState({
    posttitle: "pushpa",
    author: "vijay",
    content: "cenima",
  });
  const chengemyname = () => {
    setmyname("vasu");
  };

  const [usersInfo, setusersInfo] = useState(["guru", "ram"]);
  const chengeuserdetails = () => {
    setuserdetails({
      posttitle: "veera",
      author: "sunil",
      content: "padd",
    });
  };
  const chengeuser = () => {
    setusersInfo(["vinu", "sathish"]);
  };
  return (
    <div>
      <h2>BlogPostManager Component </h2>
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
