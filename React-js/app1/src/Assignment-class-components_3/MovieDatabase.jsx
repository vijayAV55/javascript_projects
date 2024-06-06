import { Component } from "react";

export class MovieDatabase extends Component {
  state = {
    posttitle: "pk",
    person: {
      movietitle: "Devara",
      director: "Jaipal",
      releaseyear: 2005,
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  newmovies = () => {
    const newstate = { ...this.state };
    newstate.student.push("pushpa", "ragavendra");
    this.setState(newstate);
  };
  searchformoviesbydirector = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "yamadonga", "bahubali");
    this.setState(newstate);
  };
  removemovies = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.newmovies}>newmovies</button> <br />
        <br />
        <button onClick={this.searchformoviesbydirector}>
          searchformoviesbydirector
        </button>
        <br /> <br />
        <button onClick={this.removemovies}> removemovies</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.movietitle}</p>
          <p>{this.state.person.director}</p>
          <p>{this.state.person.releaseyear}</p>
        </ul>
      </div>
    );
  }
}
