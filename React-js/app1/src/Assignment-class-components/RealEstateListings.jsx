import { Component } from "react";

export class RealEstateListings extends Component {
  state = {
    posttitle: "li",
    person: {
      propertytype: "building",
      price: "5000000",
      location: "chittoor",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  listings = () => {
    const newstate = { ...this.state };
    newstate.student.push("4000000", "100%");
    this.setState(newstate);
  };

  listingsbycriterialistingsbycriteria = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "hyd");
    this.setState(newstate);
  };
  removelistings = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.listings}>listings</button> <br />
        <br />
        <button onClick={this.listingsbycriterialistingsbycriteria}>
          listingsbycriterialistingsbycriteria
        </button>
        <br /> <br />
        <button onClick={this.removelistings}> removelistings</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.propertytype}</p>
          <p>{this.state.person.price}</p>
          <p>{this.state.person.location}</p>
        </ul>
      </div>
    );
  }
}
