import { Component } from "react"



export class GameCharacter extends Component{
    state = {
        name:"Ram",
        level: "200",
        healthpoints :"10%",

        attack: function () { },
        defend: function () { },
        levelup: function () { },
       
    }
    render(){
        return <div>
            <p>{this.state.name}</p>
            <p>{this.state.level}</p>
            <p>{this.state.healthpoints}</p>

        </div>
    }
    }