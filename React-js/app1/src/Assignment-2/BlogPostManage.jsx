import { Component } from "react";

export class BlogPostManage extends Component {
  state = {
    posttitle: "ram",
    author: "vijay",
    content: "cenima",
    tags: "",

    createnewposts: function () {},
    editposts: function () {},
    deleteposts: function () {},
  };
  render() {
    return (
      <div>
        <p>{this.state.posttitle}</p>
        <p>{this.state.author}</p>
        <p>{this.state.content}</p>
        <p>{this.state.tags}</p>
      </div>
    );
  }
}
