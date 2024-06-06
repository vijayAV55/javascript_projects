import { Component } from "react";

export class RecipeBook extends Component {
  state = {
    posttitle: "li",
    person: {
      recipename: "check",
      ingredients: "no",
      instructions: "follow the rules",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  newrecipes = () => {
    const newstate = { ...this.state };
    newstate.student.push("out", "inout");
    this.setState(newstate);
  };

  listingsbycriteria = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "backup");
    this.setState(newstate);
  };
  removelistings = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.newrecipes}>newrecipes</button> <br />
        <br />
        <button onClick={this.listingsbycriteria}>listingsbycriteria</button>
        <br /> <br />
        <button onClick={this.removelistings}> removelistings</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.recipename}</p>
          <p>{this.state.person.ingredients}</p>
          <p>{this.state.person.instructions}</p>
        </ul>
      </div>
    );
  }
}
