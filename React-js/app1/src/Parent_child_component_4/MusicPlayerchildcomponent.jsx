import { Component } from "react";
export class MusicPlayerchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.currentsong}</li>
          <li>{newperson.playlist}</li>
        </ul>
      </div>
    );
  }
}
