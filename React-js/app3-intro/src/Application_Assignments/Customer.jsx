import React, { Component } from "react";

export default class Customer extends Component {
  state = {
    userdetails: {
      name: "",
      email: "",
      investment: "",
      dateofjoined: "",
      active: "",
    },
    alluser: [],
  };
  handlechenge = (e) => {
    const inputname = e.target.name;
    console.log(inputname);

    const newState = { ...this.state };
    newState.userdetails[inputname] = e.target.value;
    this.setState(newState);
  };
  adduser = () => {
    const newState = { ...this.state };
    newState.alluser.push({ ...this.state.userdetails });
    this.setState(newState);
    this.clearForm();
  };
  clearForm = () => {
    const newState = { ...this.state };
    newState.userdetails = {
      name: "",
      email: "",
      investment: "",
      dateofjoined: "",
      active: "",
    };
    this.setState(newState);
  };
  deleteuser = (i) => {
    const newState = { ...this.state };
    newState.alluser.splice(i, 1);
    this.setState(newState);
  };
  //   Edituser = (i) => {
  //     const newState = { ...this.state };
  //     newState.alluser.pop(i, 1);
  //     this.setState(newState);
  //   };
  render() {
    return (
      <div>
        <h1>Customer</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={this.state.userdetails.name}
            onChange={this.handlechenge}
          />{" "}
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id=""
            value={this.state.userdetails.email}
            onChange={this.handlechenge}
          />
          <br />
          <label htmlFor="investment">Investment</label>
          <input
            type="text"
            name="investment"
            id=""
            value={this.state.userdetails.investment}
            onChange={this.handlechenge}
          />
          <br />
          <label htmlFor="dateofjoined">Date Of Joined</label>
          <input
            type="text"
            name="dateofjoined"
            id=""
            value={this.state.userdetails.dateofjoined}
            onChange={this.handlechenge}
          />
          <br />
          <label htmlFor="active">Active</label>
          <input
            type="text"
            name="active"
            id=""
            value={this.state.userdetails.active}
            onChange={this.handlechenge}
          />{" "}
          <br /> <br />
          <button type="button" onClick={this.adduser}>
            Adduser
          </button>
        </form>
        <hr />
        <table border={2}>
          <thead>
            <tr>
              <td>name</td>
              <td>email</td>
              <td>investment</td>
              <td>dateofjoined</td>
              <td>active</td>
              <td>Delete</td>
              <td>Edituser</td>
            </tr>
          </thead>
          <tbody>
            {this.state.alluser.map((entry, i) => {
              return (
                <tr>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.investment}</td>
                  <td>{entry.dateofjoined}</td>
                  <td>{entry.active}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        this.deleteuser(i);
                      }}
                    >
                      Deleteuser
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        this.Edituser(entry, i);
                      }}
                    >
                      Edituser
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
