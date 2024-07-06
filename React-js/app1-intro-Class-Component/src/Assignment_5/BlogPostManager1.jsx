import { Component } from "react";

export class BlogPostManager1 extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div style={{ border: "1px solid green" }}>
        <ul>
          <li>{newperson.name}</li>
          <li>{newperson.mail}</li>
          <li>{newperson.Author}</li>
          <li>{newperson.titile}</li>
        </ul>
        <button
          onClick={() => {
            this.props.handleDelete(newperson, this.props.index);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
