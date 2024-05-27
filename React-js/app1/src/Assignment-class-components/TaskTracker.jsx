import { Component } from "react";

export class TaskTracker extends Component {
  state = {
    posttitle: "li",
    person: {
      taskname: "randoom",
      duedate: "27/6/2006",
      priority: "cam",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  addtasks = () => {
    const newstate = { ...this.state };
    newstate.student.push("app", "rap");
    this.setState(newstate);
  };

  marktasksascomplete = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "13554");
    this.setState(newstate);
  };
  filtertasksbypriority = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };
  render() {
    return (
      <div>
        <button onClick={this.addtasks}>addtasks</button> <br />
        <br />
        <button onClick={this.marktasksascomplete}>marktasksascomplete</button>
        <br /> <br />
        <button onClick={this.filtertasksbypriority}>
          filtertasksbypriority
        </button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.taskname}</p>
          <p>{this.state.person.duedate}</p>
          <p>{this.state.person.priority}</p>
        </ul>
      </div>
    );
  }
}
