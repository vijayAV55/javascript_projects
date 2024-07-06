import { Component } from "react";

export class LanguageLearningApp extends Component {
  state = {
    posttitle: "pk",
    person: {
      vocabularywords: "aeiou",
      definitions: "60%",
      examplesentences: "6000",
    },
    student: ["renu", "hasini", "kumari", "swamy"],
    date: ["4,4,4"],
  };
  newwords = () => {
    const newstate = { ...this.state };
    newstate.student.push("l,m,n,o,p");
    this.setState(newstate);
  };

  testvocabulary = () => {
    const newstate = { ...this.state };
    newstate.student.splice(1, 0, "l,k,j,h,g,f");
    this.setState(newstate);
  };
  removewords = () => {
    const newstate = { ...this.state };
    newstate.student.pop();
    this.setState(newstate);
  };

  render() {
    return (
      <div>
        <button onClick={this.newwords}>newwords</button> <br />
        <br />
        <button onClick={this.testvocabulary}>testvocabulary</button>
        <br /> <br />
        <button onClick={this.removewords}> removewords</button>
        <br />
        <br />
        <ul>
          {this.state.student.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
        <ul>
          <p>{this.state.person.vocabularywords}</p>
          <p>{this.state.person.definitions}</p>
          <p>{this.state.person.examplesentences}</p>
        </ul>
      </div>
    );
  }
}
