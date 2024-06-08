import { Component } from "react";

export class Sample1 extends Component {
  state = {
    UserDetails: {
      Fname: "",
      Lnmae: "",
      Email: "",
    },
    allUser: [],
  };

  handlechenge = (F) => {
    const InputName = F.target.name;
    const newstate = { ...this.state };
    newstate.userDetails[InputName] = F.target.value;
    this.setstate(newstate);
  };
  adduser = () => {
    const newstate = { ...this.state };
    newstate.allUser.push({ ...this.state.userDetails });
    this.setstate(newstate);
    this.clearform();
  };
  clearform = () => {
    const newstate = { ...this.state };
    newstate.userDetails = {
      Fname: "",
      Lnmae: "",
      Email: "",
    };
    this.setstate(newstate);
  };
  render() {
    return (
      <div>
        <h2>welcome to react js</h2>
        <hr />
        <form>
          <label htmlFor="">Fname</label>
          <input
            type="text"
            name="Fname"
            id=""
            value={this.state.userDetails.Fname}
            onClick={this.handlechenge}
          />
          <br />
          <label htmlFor="">Lname</label>
          <input
            type="text"
            name="Lname"
            id=""
            value={this.state.userDetails.Lname}
            onClick={this.handlechenge}
          />
          <br />
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="Email"
            id=""
            value={this.state.userDetails.Email}
            onClick={this.handlechenge}
          />
        </form>
        <table>
          <thead>
            <tr>
              <td>Firstname</td>
              <td>Lastname</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {/* {this.state.allUser.map((obj) => {
              return
              <tr>
                <td>{obj.Fname}</td>
                <td>{obj.Lname}</td>
                <td>{obj.Email}</td>
               
              </tr>;
  })} */}
          </tbody>
        </table>
      </div>
    );
  }
}
