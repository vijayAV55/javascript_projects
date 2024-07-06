import { Component } from "react";

export class ChatApplicationchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <h1>ChatApplication_child_component </h1>
        <ul>
          <li>{newperson.sender}</li>
          <li>{newperson.message}</li>
          <li>{newperson.receiver}</li>
        </ul>
      </div>
    );
  }
}
