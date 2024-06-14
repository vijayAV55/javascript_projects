import React, { Component } from "react";

export default class Sample01 extends Component {
  state = {
    userdetails: {
      Name: "",
      Email: "",
      Investment: "",
      Date: "",
      Active: "",
    },
    index: 0,
    alluser: [],
    showupdatebtn: false,
  };
  Adduser = () => {
    const newState = { ...this.state };
    newState.alluser.push({ ...this.state.userdetails });
    this.setState(newState);
    this.clearForm();
  };
  render() {
    return <div>vijay</div>;
  }
}
