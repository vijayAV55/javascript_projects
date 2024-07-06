import React, { Component } from "react";
import "./App.css";

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      id: "",
      email: "",
      number: "",
      isEditing: false,
      editIndex: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, id, email, number, users, isEditing, editIndex } = this.state;
    const newUser = { name, id, email, number };

    if (isEditing) {
      users[editIndex] = newUser;
      this.setState({ users, isEditing: false, editIndex: null });
    } else {
      this.setState({ users: [...users, newUser] });
    }

    this.setState({ name: "", id: "", email: "", number: "" });
  };

  handleEdit = (index) => {
    const user = this.state.users[index];
    this.setState({
      name: user.name,
      id: user.id,
      email: user.email,
      number: user.number,
      isEditing: true,
      editIndex: index,
    });
  };

  handleDelete = (index) => {
    const users = this.state.users.filter((_, i) => i !== index);
    this.setState({ users });
  };

  render() {
    const { users, name, id, email, number } = this.state;

    return (
      <div className="App">
        <h1>User Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={id}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Number:
              <input
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">
            {this.state.isEditing ? "Update" : "Add"}
          </button>
        </form>
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App1;
