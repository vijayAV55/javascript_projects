import { Component } from "react";

export class MovieDatabasechildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.movietitle}</li>
          <li>{newperson.director}</li>
          <li>{newperson.releaseyear}</li>
        </ul>
      </div>
    );
  }
}
