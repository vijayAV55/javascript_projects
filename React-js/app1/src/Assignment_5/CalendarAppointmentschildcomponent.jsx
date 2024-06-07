import { Component } from "react";

export class CalendarAppointmentschildComponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.eventname}</li>
          <li>{newperson.date}</li>
          <li>{newperson.time}</li>
          <li>{newperson.location}</li>
        </ul>
      </div>
    );
  }
}
