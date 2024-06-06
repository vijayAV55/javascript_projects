import { useState } from "react";

export const ProjectManagementTool = () => {
  const [myname, setmyname] = useState("VIJAY");
  const [userdetails, setuserdetails] = useState({
    projectname: "java",
    description: "javascript",
    teammembers: "hima,ram,vijay",
    deadlines: "",
  });
  const chengemyname = () => {
    setmyname("SUNIL");
  };

  const [usersInfo, setusersInfo] = useState(["MANI", "MUNI"]);
  const chengeuserdetails = () => {
    setuserdetails({
      projectname: "HTML",
      description: "CSS",
      teammembers: "RAM,KUMAR,TAHALA",
      deadlines: "",
    });
  };
  const chengeuser = () => {
    setusersInfo(["MATHI", "MAYAURI"]);
  };
  return (
    <div>
      <h2> ProjectManagementTool Component</h2>
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
