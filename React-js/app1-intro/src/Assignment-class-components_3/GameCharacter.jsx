import { Component } from "react";

export class GameCharacter extends Component {
  state = {
    posttitle: "li",
    person: {
      name: "Ram",
      level: "200",
      healthpoints: "10%",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  attack = () => {
    const newstate = { ...this.state };
    newstate.student.push("400", "100%");
    this.setState(newstate);
  };

  levelup = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "1000");
    this.setState(newstate);
  };
  defend = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.attack}>attack</button> <br />
        <br />
        <button onClick={this.levelup}>levelup</button>
        <br /> <br />
        <button onClick={this.defend}> defend</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.name}</p>
          <p>{this.state.person.level}</p>
          <p>{this.state.person.healthpoints}</p>
        </ul>
      </div>
    );
  }
}
