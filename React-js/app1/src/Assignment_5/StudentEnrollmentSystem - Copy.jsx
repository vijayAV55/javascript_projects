import { Component } from "react";
import { StudentEnrollmentSystemchildcomponent } from "./StudentEnrollmentSystemchildcomponents";

export class StudentEnrollmentSystem extends Component {
  state = {
    persons: [
      {
        studentID: 123,
        name: "Vijay",
        courseEnrolled: "Front End",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>StudentEnrollmentSystem-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <StudentEnrollmentSystemchildcomponent
              newperson={persons}
              key={i}
            />
          );
        })}
        <hr />
      </div>
    );
  }
}
