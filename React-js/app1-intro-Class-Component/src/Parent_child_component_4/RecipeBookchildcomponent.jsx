import { Component } from "react";

export class RecipeBookchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.ingredients}</li>
          <li>{newperson.recipename}</li>
          <li>{newperson.instructions}</li>
        </ul>
      </div>
    );
  }
}
