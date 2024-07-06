import { Component } from "react";

export class CalendarAppointments extends Component {
  state = {
    name: "ram",
    person: {
      eventname: "therrtham",
      date: "23/4/2026",
      time: "9:30 am",
      location: "Bank",
    },
    student: ["guna", "vijay", "ram", "kumar"],
    Newposts: ["4,4,4"],
  };
  newappointments = () => {
    const newstate = { ...this.state };
    newstate.student.push("ajay", "tarun");
    this.setState(newstate);
  };

  updateappointments = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "venky");
    this.setState(newstate);
  };
  deleteappointments = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.newappointments}>newappointments</button> <br />
        <br />
        <button onClick={this.updateappointments}>updateappointments</button>
        <br /> <br />
        <button onClick={this.deleteappointments}> deleteappointments</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.eventname}</p>
          <p>{this.state.person.date}</p>
          <p>{this.state.person.time}</p>
          <p>{this.state.person.location}</p>
          <p>{this.state.posttitle}</p>
          <p>{this.state.Newposts}</p>
        </ul>
      </div>
    );
  }
}
