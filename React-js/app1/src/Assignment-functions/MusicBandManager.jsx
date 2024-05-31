import { useState } from "react";

export const MusicBandManager = () => {
  const [myname, setmyname] = useState("Chandu");
  const [userdetails, setuserdetails] = useState({
    bandmembers: "240",
    upcominggigs: "ios",
    setlist: "mange",
  });
  const chengemyname = () => {
    setmyname("King");
  };

  const [usersInfo, setusersInfo] = useState(["Madhina", "Kala"]);
  const chengeuserdetails = () => {
    setuserdetails({
      bandmembers: "182",
      upcominggigs: "ios",
      setlist: "kerala",
    });
  };
  const chengeuser = () => {
    setusersInfo(["Bhuna", "mamatha"]);
  };
  return (
    <div>
      <h2> MusicBandManager Component</h2>
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
