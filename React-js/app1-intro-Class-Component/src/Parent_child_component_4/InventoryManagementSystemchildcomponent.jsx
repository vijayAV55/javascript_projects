import { Component } from "react";

export class InventoryManagementSystemchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.productname}</li>
          <li>{newperson.quantityavailable}</li>
          <li>{newperson.price}</li>
        </ul>
      </div>
    );
  }
}
