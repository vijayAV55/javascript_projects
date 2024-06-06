import { Component } from "react";
import { MusicBandManagerchildcomponent } from "./MusicBandManagerchildcomponent";
import { MusicPlayerchildcomponent } from "./MusicPlayerchildcomponent";

export class MusicPlayer extends Component {
  state = {
    persons: [
      {
        currentsong: "tamil",
        playlist: 543,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>MusicPlayer-component</h1>
        {this.state.persons.map((persons, i) => {
          return <MusicPlayerchildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
