import { Component } from "react";

export class Sample3 extends Component {
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
  handlechenge = (e) => {
    const inputName = e.target.name;
    const newState = { ...this.state };
    const newStateobj = { ...this.state.userdetails };
    newStateobj[inputName] = e.target.value;
    newState.userdetails = newStateobj;
    this.setState(newState);
  };
  Adduser = () => {
    const newState = { ...this.state };
    newState.alluser.push({ ...this.state.userdetails });
    this.setState(newState);
    this.clearForm();
  };

  clearForm = () => {
    const newState = { ...this.state };
    newState.userdetails = {
      Name: "",
      Email: "",
      Investment: "",
      Date: "",
      Active: "",
    };
    this.setState(newState);
  };
  deleteUser = (i) => {
    const newState = { ...this.state };
    newState.alluser.splice(i, 1);
    this.setState(newState);
  };

  Edituser = (obj, i) => {
    const newState = { ...this.state };
    newState.userdetails = obj;
    newState.showupdatebtn = true;
    newState.index = i;
    this.setState(newState);
    // console.log(obj);
  };
  handleupdate = () => {
    const newState = { ...this.state };
    newState.alluser[this.state.index] = this.state.userdetails;
    newState.showupdatebtn = false;
    this.setState(newState);
    this.clearForm();
  };

  render() {
    return (
      <div>
        <h2>Customer Details</h2>
        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="Name"
            id=""
            value={this.state.userdetails.Name}
            onChange={this.handlechenge}
          />{" "}
          <br />
          <label htmlFor="">Email</label>
          <input
            type=""
            name="Email"
            id=""
            value={this.state.userdetails.Email}
            onChange={this.handlechenge}
          />{" "}
          <br />
          <label htmlFor="">Investment</label>
          <input
            type="text"
            name="Investment"
            id=""
            value={this.state.userdetails.Investment}
            onChange={this.handlechenge}
          />{" "}
          <br />
          <label htmlFor="">Date </label>
          <input
            type="Date"
            name=""
            id=""
            value={this.state.userdetails.Date}
            onChange={this.handlechenge}
          />{" "}
          <br />
          <label htmlFor="">Active</label>
          <input
            type="text"
            name="Active"
            id=""
            value={this.state.userdetails.Active}
            onChange={this.handlechenge}
          />{" "}
          <br /> <br />
          {this.state.showupdatebtn ? (
            <button type="button" onClick={this.handleupdate}>
              update user
            </button>
          ) : (
            <button type="button" onClick={this.Adduser}>
              add user
            </button>
          )}
        </form>
        <br />
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Investment</td>
              <td>Date</td>
              <td>Active</td>
              <td>Edit user</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.alluser.map((obj, i) => {
              return (
                <tr>
                  <td>{obj.Name}</td>
                  <td>{obj.Email}</td>
                  <td>{obj.Investment}</td>
                  <td>{obj.Date}</td>
                  <td>{obj.Active}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        this.Edituser(obj, i);
                      }}
                    >
                      Edit user
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        this.deleteUser(i);
                      }}
                    >
                      deleteUser
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
