import { Component } from "react";

export class RecipeGenerator extends Component {
  state = {
    ingredients: "9640744182",
    instructions: "Vijay",

    preferences: function () {},
  };
  render() {
    return (
      <div>
        <p>{this.state.ingredients}</p>
        <p>{this.state.instructions}</p>
      </div>
    );
  }
}
