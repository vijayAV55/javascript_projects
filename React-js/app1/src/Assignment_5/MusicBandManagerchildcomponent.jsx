import { Component } from "react";

export class MusicBandManagerchildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.bandmembers}</li>
          <li>{newperson.upcominggigs}</li>
          <li>{newperson.setlist}</li>
        </ul>
      </div>
    );
  }
}
