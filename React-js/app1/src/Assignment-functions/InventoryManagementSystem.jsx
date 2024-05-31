import { useState } from "react";

export const InventoryManagementSystem = () => {
  const [myname, setmyname] = useState("MONI");
  const [userdetails, setuserdetails] = useState({
    productname: "Car",
    quantityavailable: "first",
    price: 100000,
  });
  const chengemyname = () => {
    setmyname("Hema");
  };

  const [usersInfo, setusersInfo] = useState(["vinu", "hari"]);
  const chengeuserdetails = () => {
    setuserdetails({
      productname: "Bike",
      quantityavailable: "first",
      price: 900000,
    });
  };
  const chengeuser = () => {
    setusersInfo(["Mohan", "Nandu"]);
  };
  return (
    <div>
      <h2> InventoryManagementSystem Component</h2>
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
