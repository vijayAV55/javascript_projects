import { Component } from "react";

export class FlightBookingSystemchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.flightnumber}</li>
          <li>{newperson.departurecity}</li>
          <li>{newperson.arrivalcity}</li>
          <li>{newperson.departuretime}</li>
        </ul>
      </div>
    );
  }
}
