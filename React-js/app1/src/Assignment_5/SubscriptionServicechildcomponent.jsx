import { Component } from "react";

export class SubscriptionServicechildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.name}</li>
          <li>{newperson.ingredients}</li>
          <li>{newperson.instructions}</li>
          <li>{newperson.age}</li>
        </ul>
      </div>
    );
  }
}
