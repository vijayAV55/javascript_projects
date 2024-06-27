import { Component } from "react";
import { RecipeGeneratorchildcomponent } from "./RecipeGeneratorchildcomponent";

export class RecipeGenerator extends Component {
  state = {
    persons: [
      {
        ingredients: "9640744182",
        instructions: "Vijay",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>RecipeGenerator-component</h1>
        {this.state.persons.map((persons, i) => {
          return <RecipeGeneratorchildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
