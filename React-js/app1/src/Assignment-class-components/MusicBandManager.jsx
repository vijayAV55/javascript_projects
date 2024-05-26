import { Component } from "react";

export class MusicBandManager extends Component {
  state = {
    posttitle: "pk",
    person: {
      bandmembers: "82",
      upcominggigs: "ios",
      setlist: "",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  addmembers = () => {
    const newstate = { ...this.state };
    newstate.student.push("l56", "45");
    this.setState(newstate);
  };

  schedulegigs = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "l,k,j,h,g,f");
    this.setState(newstate);
  };
  schedulegigs = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.addmembers}>addmembers</button> <br />
        <br />
        <button onClick={this.schedulegigs}>schedulegigs</button>
        <br /> <br />
        <button onClick={this.schedulegigs}> schedulegigs</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.bandmembers}</p>
          <p>{this.state.person.upcominggigs}</p>
          <p>{this.state.person.setlist}</p>
        </ul>
      </div>
    );
  }
}
