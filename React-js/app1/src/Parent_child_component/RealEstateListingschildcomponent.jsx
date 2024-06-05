import { Component } from "react";

export class RealEstateListingschildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.propertytype}</li>
          <li>{newperson.price}</li>
          <li>{newperson.location}</li>
        </ul>
      </div>
    );
  }
}
