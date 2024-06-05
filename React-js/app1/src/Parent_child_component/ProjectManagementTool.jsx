import { Component } from "react";
import { ProjectManagementToolchildcomponent } from "./ProjectManagementToolchild.component";

export class ProjectManagementTool extends Component {
  state = {
    persons: [
      {
        projectname: "java",
        description: "javascript",
        teammembers: "hima,ram,vijay",
        deadlines: "thereth",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>ProjectManagementTool-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <ProjectManagementToolchildcomponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}
