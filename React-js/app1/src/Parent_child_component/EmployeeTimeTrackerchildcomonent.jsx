import { Component } from "react";

export class EmployeeTimeTrackerchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.employeename}</li>
          <li>{newperson.date}</li>
          <li>{newperson.starttime}</li>
          <li>{newperson.endtime}</li>
        </ul>
      </div>
    );
  }
}
