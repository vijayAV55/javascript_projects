import { Component } from "react";

export class EcommerceCartchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.items}</li>
          <li>{newperson.quantity}</li>
          <li>{newperson.price}</li>
        </ul>
      </div>
    );
  }
}
