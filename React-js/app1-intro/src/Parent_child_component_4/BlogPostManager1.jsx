import { Component } from "react";

export class BlogPostManager1 extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.name}</li>
          <li>{newperson.mail}</li>
          <li>{newperson.Author}</li>
          <li>{newperson.titile}</li>
        </ul>
      </div>
    );
  }
}
