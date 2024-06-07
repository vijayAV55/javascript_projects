import { Component } from "react";
import { FitnessChallengeTrackechildcomponent } from "./FitnessChallengeTrackechildcomponent";

export class FitnessChallengeTracke extends Component {
  state = {
    persons: [
      {
        challengename: "ram",
        startdate: "12:90am",
        enddate: "9:00pm",
        tags: "anyone",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>FitnessChallengeTrackechildcomponent</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <FitnessChallengeTrackechildcomponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}
