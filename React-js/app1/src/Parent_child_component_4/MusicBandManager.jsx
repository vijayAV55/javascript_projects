import { Component } from "react";
import { MusicBandManagerchildcomponent } from "./MusicBandManagerchildcomponent";

export class MusicBandManager extends Component {
  state = {
    persons: [
      {
        bandmembers: "82",
        upcominggigs: "ios",
        setlist: "",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>MusicBandManager-component</h1>
        {this.state.persons.map((persons, i) => {
          return <MusicBandManagerchildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
