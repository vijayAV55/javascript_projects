import { Component, useState } from "react"


export class TaskTracker extends Component{
 state ={
        taskname: "randoom",
        duedate:"27/6/2006",
        priority:"cam",


        addtasks: function () { },
        marktasksascomplete: function () { },
        filtertasksbypriority: function () { },       
    }
render(){
    return <div>
        <p>{this.state.taskname}</p>
        <p>{this.state.duedate}</p>
        <p>{this.state.priority}</p>
    </div>
}
    }