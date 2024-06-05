import { Component } from "react";

export class LanguageLearningAppchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.vocabularywords}</li>
          <li>{newperson.definitions}</li>
          <li>{newperson.examplesentences}</li>
        </ul>
      </div>
    );
  }
}
