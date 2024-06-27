import { Component } from "react";

export class StudentEnrollmentSystem extends Component {
  state = {
    posttitle: "li",
    person: {
      student_ID: 123,
      name: "Vijay",
      courseEnrolled: "Front End",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  addNewStudent = () => {
    const newstate = { ...this.state };
    newstate.student.push("ram", "ganesh");
    this.setState(newstate);
  };

  updateCourse = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "b.com");
    this.setState(newstate);
  };
  removeStudent = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.addNewStudent}>addNewStudent</button> <br />
        <br />
        <button onClick={this.updateCourse}>updateCourse</button>
        <br /> <br />
        <button onClick={this.removeStudent}> removeStudent</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.student_ID}</p>
          <p>{this.state.person.name}</p>
          <p>{this.state.person.courseEnrolled}</p>
        </ul>
      </div>
    );
  }
}
