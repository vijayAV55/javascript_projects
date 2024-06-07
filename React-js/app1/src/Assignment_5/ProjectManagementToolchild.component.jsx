import { Component } from "react";

export class ProjectManagementToolchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.projectname}</li>
          <li>{newperson.description}</li>
          <li>{newperson.teammembers}</li>
          <li>{newperson.deadlines}</li>
        </ul>
      </div>
    );
  }
}
