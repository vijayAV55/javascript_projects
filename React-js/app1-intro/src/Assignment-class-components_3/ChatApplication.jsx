import { Component } from "react";

export class ChatApplication extends Component {
  state = {
    posttitle: "pushpa",
    person: {
      sender: "vijay",
      receiver: "Jaipal",
      message: "hi ram !!...hello ",
    },
    student: ["hk", "li", "ui", "tm"],
    date: ["4,0"],
  };
  sendmessages = () => {
    const newstate = { ...this.state };
    newstate.student.push("hi ram i am vijay!!! thank you for java");
    this.setState(newstate);
  };

  searchformessages = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "surch for vijaytram");
    this.setState(newstate);
  };
  deletemessages = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.sendmessages}>sendmessages</button> <br />
        <br />
        <button onClick={this.searchformessages}>searchformessages</button>
        <br /> <br />
        <button onClick={this.deletemessages}> deletemessages</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.sender}</p>
          <p>{this.state.person.receiver}</p>
          <p>{this.state.person.message}</p>
        </ul>
      </div>
    );
  }
}
