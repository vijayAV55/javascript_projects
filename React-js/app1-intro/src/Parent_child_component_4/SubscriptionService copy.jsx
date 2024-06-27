import { Component } from "react";
import { SubscriptionServicechildcomponent } from "./SubscriptionServicechildcomponent";

export class SubscriptionService extends Component {
  state = {
    persons: [
      {
        name: "vijay",
        ingredients: "9640744182",
        instructions: "Vijay",
        age: "23",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>SubscriptionService-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <SubscriptionServicechildcomponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}
