import { useState } from "react";

export const EcommerceCart = () => {
  const [myname, setmyname] = useState("vijayram");
  const [userdetails, setuserdetails] = useState({
    items: "Carrom",
    quantity: "60%",
    price: "6000",
  });
  const chengemyname = () => {
    setmyname("dd");
  };

  const [usersInfo, setusersInfo] = useState(["c", "d"]);
  const chengeuserdetails = () => {
    setuserdetails({
      items: "cricket",
      quantity: "10%",
      price: "600000",
    });
  };
  const chengeuser = () => {
    setusersInfo(["a", "b"]);
  };
  return (
    <div>
      <h2>EcommerceCart Component</h2>
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
