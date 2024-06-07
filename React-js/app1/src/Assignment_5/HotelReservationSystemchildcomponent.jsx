import { Component } from "react";

export class HotelReservationSystemchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.roomnumber}</li>
          <li>{newperson.guestname}</li>
          <li>{newperson.checkindate}</li>
          <li>{newperson.checkoutdate}</li>
        </ul>
      </div>
    );
  }
}
