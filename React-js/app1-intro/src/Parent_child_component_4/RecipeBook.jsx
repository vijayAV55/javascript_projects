import { Component } from "react";
import { RecipeBookchildcomponent } from "./RecipeBookchildcomponent";

export class RecipeBook extends Component {
  state = {
    persons: [
      {
        recipename: "check",
        ingredients: "no",
        instructions: "follow the rules",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>RecipeBook-component</h1>
        {this.state.persons.map((persons, i) => {
          return <RecipeBookchildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
