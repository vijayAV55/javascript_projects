import { Component } from "react";

export class EcommerceCart extends Component {
  state = {
    posttitle: "hkm",
    person: {
      items: "Carrom",
      quantity: "60%",
      price: "6000",
    },
    student: ["ranm", "ranjith", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  additems = () => {
    const newstate = { ...this.state };
    newstate.student.push("ajay", "tarun");
    this.setState(newstate);
  };

  emoveitems = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "venky");
    this.setState(newstate);
  };
  updatequantities = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.additems}>additems</button> <br />
        <br />
        <button onClick={this.emoveitems}>emoveitems</button>
        <br /> <br />
        <button onClick={this.updatequantities}> updatequantities</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.items}</p>
          <p>{this.state.person.quantity}</p>
          <p>{this.state.person.price}</p>
        </ul>
      </div>
    );
  }
}
