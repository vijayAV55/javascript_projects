import { Component } from "react";

export class FlightBookingSystem extends Component {
  state = {
    posttitle: "TG",
    person: {
      flightnumber: "44182",
      departurecity: "Vijay",
      arrivalcity: "th",
      departuretime: "hm",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  bookflights = () => {
    const newstate = { ...this.state };
    newstate.student.push("book", "1456");
    this.setState(newstate);
  };

  checkavailability = () => {
    const newstate = { ...this.state };
    newstate.student.splice("1");
    this.setState(newstate);
  };
  cancelflights = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.bookflights}>bookflights</button> <br />
        <br />
        <button onClick={this.checkavailability}>checkavailability</button>
        <br /> <br />
        <button onClick={this.cancelflights}> cancelflights</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.flightnumber}</p>
          <p>{this.state.person.departurecity}</p>
          <p>{this.state.person.arrivalcity}</p>
          <p>{this.state.person.departuretime}</p>
        </ul>
      </div>
    );
  }
}
