import { Component } from "react";
import { MovieDatabasechildcomponent } from "./MovieDatabasechildcomponent";

export class MovieDatabase extends Component {
  state = {
    persons: [
      {
        movietitle: "Devara",
        director: "Jaipal",
        releaseyear: 2005,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>MovieDatabase-component</h1>
        {this.state.persons.map((persons, i) => {
          return <MovieDatabasechildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
