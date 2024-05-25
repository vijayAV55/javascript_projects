import { Component } from "react"


export class RecipeBook extends Component{
    state={
        recipename: "check",
        ingredients: "no",
        instructions: "follow the rules",
        newrecipes: function () { },
        removerecipes: function () { },

    }
    render(){
        return <div>
            <p>{this.state.recipename}</p>
            <p>{this.state.ingredients}</p>
            <p>{this.state.instructions}</p>
        </div>
    }

}

