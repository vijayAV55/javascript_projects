import { Component } from "react"



export class ProjectManagementTool extends Component{
   state={
        projectname: "java",
        description:"javascript",
        teammembers:"hima,ram,vijay",
        deadlines:"",
      

        createprojects: function () { }, 
        assigntasks: function () { }, 
        trackprogress: function () { }, 

             
    }
    render(){
        return <div>
            <p>{this.state.projectname}</p>
            <p>{this.state.description}</p>
            <p>{this.state.deadlines}</p>
            <p>{this.state.teammembers}</p>

        </div>
    }
    }