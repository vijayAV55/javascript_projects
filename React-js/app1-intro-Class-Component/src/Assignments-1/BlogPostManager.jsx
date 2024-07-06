import { useState } from "react";

export const BlogPostManage = () => {
  const [myname, setmyname] = useState("vijayram");
  const [userdetails, setuserdetails] = useState({
    posttitle: "pushpa",
    author: "vijay",
    content: "cenima",
  });

  const [UsersInfo] = useState[("ram", "vijay", "guna", "hima")];

  const chengemyname = () => {
    setmyname("raguram");
  };

  const chengeuesredetails = () => {
    setuserdetails({
      posttitle: "gunda",
      author: "hema",
      content: "song",
    });
  };

  return (
    <div>
      <h1>hii ram!!</h1>
      <button onClick={chengemyname}>chenge my name </button>
      <h2>my name is {myname}</h2>
      <br />
      <hr />
      <br />
      <button onClick={chengeuesredetails}>chenge user detailes</button>
      <ul>
        {Object.values(userdetails).map((val) => (
          <li>{val}</li>
        ))}
      </ul>
      <br />
      <hr />
      <ul>
        {UsersInfo.map((val) => (
          <li>{val}</li>
        ))}
      </ul>
    </div>
  );
};
