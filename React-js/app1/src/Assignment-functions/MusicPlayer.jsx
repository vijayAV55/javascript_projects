import { useState } from "react";

export const MusicPlayer = () => {
  const [myname, setmyname] = useState("Mbbu");
  const [userdetails, setuserdetails] = useState({
    currentsong: "tamil",
    playlist: 543,
  });
  const chengemyname = () => {
    setmyname("Middu");
  };

  const [usersInfo, setusersInfo] = useState(["SUKUNYA", "MANALI"]);
  const chengeuserdetails = () => {
    setuserdetails({
      currentsong: "Kanada",
      playlist: 110,
    });
  };
  const chengeuser = () => {
    setusersInfo(["MALA", "MAYA"]);
  };
  return (
    <div>
      <h2> MusicPlayer Component</h2>
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
