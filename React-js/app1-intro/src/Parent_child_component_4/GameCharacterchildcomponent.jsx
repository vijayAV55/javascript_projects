import { Component } from "react";

export class GameCharacterchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.name}</li>
          <li>{newperson.level}</li>
          <li>{newperson.healthpoints}</li>
        </ul>
      </div>
    );
  }
}
