import { Component } from "react";

export class BlogPostManager extends Component {
  state = {
    posttitle: "pushpa",
    person: {
      author: "vijay",
      content: "cenima",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  CreateNewposts = () => {
    const newstate = { ...this.state };
    newstate.student.push("ajay", "tarun");
    this.setState(newstate);
  };

  Editposts = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "venky");
    this.setState(newstate);
  };
  Deleteposts = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.CreateNewposts}>CreateNewposts</button> <br />
        <br />
        <button onClick={this.Editposts}>Editposts</button>
        <br /> <br />
        <button onClick={this.Deleteposts}> Deleteposts</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.author}</p>
          <p>{this.state.person.content}</p>
          <p>{this.state.person.date}</p>
        </ul>
      </div>
    );
  }
}
