import { Component } from "react";

export class MusicPlayer extends Component {
  state = {
    posttitle: "pk",
    person: {
      currentsong: "tamil",
      playlist: 543,
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  play = () => {
    const newstate = { ...this.state };
    newstate.student.push("l,m,n,o,p");
    this.setState(newstate);
  };

  skip = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "telugu songs");
    this.setState(newstate);
  };
  pause = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.play}>play</button> <br />
        <br />
        <button onClick={this.skip}>skip</button>
        <br /> <br />
        <button onClick={this.pause}> pause</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.currentsong}</p>
          <p>{this.state.person.playlist}</p>
        </ul>
      </div>
    );
  }
}
