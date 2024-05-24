import { useState } from "react"


export function ProjectManagementTool(){
    const [ProjectManagementTool] = useState ({
        projectname: "java",
        description:"javascript",
        teammembers:"hima,ram,vijay",
        deadlines:"",
      

        createprojects: function () { }, 
        assigntasks: function () { }, 
        trackprogress: function () { }, 

             
    })

    return <div>
        <ul>
            {Object.keys(ProjectManagementTool).map((key) => {
                return <li>{ProjectManagementTool[key]}</li>
            })}
        </ul>
    </div>
    }