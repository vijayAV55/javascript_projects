import { Component } from "react";
import { RealEstateListingschildcomponent } from "./RealEstateListingschildcomponent";

export class RealEstateListings extends Component {
  state = {
    persons: [
      {
        propertytype: "building",
        price: "5000000",
        location: "chittoor",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>RealEstateListings-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <RealEstateListingschildcomponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}
