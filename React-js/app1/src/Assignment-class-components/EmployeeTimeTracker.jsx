import { Component } from "react";

export class EmployeeTimeTracker extends Component {
  state = {
    posttitle: "hm",
    person: {
      employeename: "dinesh",
      date: "27/6/2006",
      starttime: "10:00 am",
      endtime: "6:00 pm",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  clockin = () => {
    const newstate = { ...this.state };
    newstate.student.push("10:30");
    this.setState(newstate);
  };

  calculatetotalhoursworked = () => {
    const newstate = { ...this.state };
    newstate.student.splice("11:00");
    this.setState(newstate);
  };
  clockout = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.clockin}>clockin</button> <br />
        <br />
        <button onClick={this.calculatetotalhoursworked}>
          calculatetotalhoursworked
        </button>
        <br /> <br />
        <button onClick={this.clockout}> clockout</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.employeename}</p>
          <p>{this.state.person.starttime}</p>
          <p>{this.state.person.endtime}</p>
        </ul>
      </div>
    );
  }
}
