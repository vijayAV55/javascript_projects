import { Component } from "react";

export class HotelReservationSystem extends Component {
  state = {
    posttitle: "pk",
    person: {
      roomnumber: "9640744182",
      guestname: "Vijay",
      checkindate: "12/3/2009",
      checkoutdate: "3/4/2009",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  reservations = () => {
    const newstate = { ...this.state };
    newstate.student.push("12/13/2009");
    this.setState(newstate);
  };

  checkavailability = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "10/9/2000");
    this.setState(newstate);
  };
  cancelreservations = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.reservations}>reservations</button> <br />
        <br />
        <button onClick={this.checkavailability}>checkavailability</button>
        <br /> <br />
        <button onClick={this.cancelreservations}> cancelreservations</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.roomnumber}</p>
          <p>{this.state.person.guestname}</p>
          <p>{this.state.person.checkindate}</p>
          <p>{this.state.person.checkoutdate}</p>
        </ul>
      </div>
    );
  }
}
