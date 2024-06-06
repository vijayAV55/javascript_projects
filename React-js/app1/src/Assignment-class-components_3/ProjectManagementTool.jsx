import { Component } from "react";

export class ProjectManagementTool extends Component {
  state = {
    posttitle: "pk",
    person: {
      projectname: "java",
      description: "javascript",
      teammembers: "hima,ram,vijay",
      deadlines: "",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  createprojects = () => {
    const newstate = { ...this.state };
    newstate.student.push("HTML", "CSS");
    this.setState(newstate);
  };

  trackprogress = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "SAP");
    this.setState(newstate);
  };
  assigntasks = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.createprojects}>createprojects</button> <br />
        <br />
        <button onClick={this.trackprogress}>trackprogress</button>
        <br /> <br />
        <button onClick={this.assigntasks}> assigntasks</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.projectname}</p>
          <p>{this.state.person.description}</p>
          <p>{this.state.person.teammembers}</p>
        </ul>
      </div>
    );
  }
}
