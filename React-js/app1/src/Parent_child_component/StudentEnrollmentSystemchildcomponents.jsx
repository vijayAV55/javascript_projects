import { Component } from "react";

export class StudentEnrollmentSystemchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.studentID}</li>
          <li>{newperson.name}</li>
          <li>{newperson.courseEnrolled}</li>
        </ul>
      </div>
    );
  }
}
