import { useState } from "react";

export const RealEstateListings = () => {
  const [myname, setmyname] = useState("MEENA");
  const [userdetails, setuserdetails] = useState({
    propertytype: "building",
    price: "5000000",
    location: "chittoor",
  });
  const chengemyname = () => {
    setmyname("HARI");
  };

  const [usersInfo, setusersInfo] = useState(["TEJA", "POOJA"]);
  const chengeuserdetails = () => {
    setuserdetails({
      propertytype: "AREA",
      price: "9000000",
      location: "THEERTAM",
    });
  };
  const chengeuser = () => {
    setusersInfo(["LEELA", "ANJALI"]);
  };
  return (
    <div>
      <h2> RealEstateListings Component</h2>
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
