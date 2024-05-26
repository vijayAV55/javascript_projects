import { Component } from "react";

export class InventoryManagementSystem extends Component {
  state = {
    posttitle: "YT",
    person: {
      productname: "Bike",
      quantityavailable: "first",
      price: 100000,
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  newproducts = () => {
    const newstate = { ...this.state };
    newstate.student.push("car", "TM");
    this.setState(newstate);
  };

  updatequantities = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "Bus");
    this.setState(newstate);
  };
  removeproducts = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.newproducts}>newproducts</button> <br />
        <br />
        <button onClick={this.updatequantities}>updatequantities</button>
        <br /> <br />
        <button onClick={this.removeproducts}> removeproducts</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.productname}</p>
          <p>{this.state.person.quantityavailable}</p>
          <p>{this.state.person.price}</p>
        </ul>
      </div>
    );
  }
}
