import { Component } from "react";
import { BlogPostManager1 } from "./BlogPostManager1";

export class BlogPostManager extends Component {
  state = {
    persons: [
      {
        titile: "exam",
        Author: "ram",
        name: "vijayram",
        mail: "vijayram@143",
      },
      {
        titile: "th",
        Author: "hg",
        name: "Hema",
        mail: "Guna@143",
      },
      {
        titile: "paper",
        Author: "Raju",
        name: "Pinky",
        mail: "luckyram@143",
      },
    ],
  };
  Addperson = () => {
    const newstate = { ...this.state };
    newstate.persons.push({
      titile: "Prathyusha",
      Author: "vijay",
      name: "Pinky",
      mail: "Prathyusharam@143",
    });
    this.setState(newstate);
  };
  deleteperson = (newperson, i) => {
    const newstate = { ...this.state };
    newstate.persons.splice(i, 1);
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <h1>BlogPostManager-component</h1>
        <button onClick={this.Addperson}>Addperson</button>
        {this.state.persons.map((persons, i) => {
          return (
            <BlogPostManager1
              newperson={persons}
              key={i}
              handleDelete={this.deleteperson}
              index={i}
            />
          );
        })}
        <hr />
      </div>
    );
  }
}
