import { Component } from "react";

export class SubscriptionService extends Component {
  state = {
    posttitle: "li",
    person: {
      name: "vijay",
      ingredients: "9640744182",
      instructions: "Vijay",
      age: "23",
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
          <p>{this.state.person.name}</p>
          <p>{this.state.person.age}</p>
          <p>{this.state.person.ingredients}</p>
          <p>{this.state.person.instructions}</p>
        </ul>
      </div>
    );
  }
}
