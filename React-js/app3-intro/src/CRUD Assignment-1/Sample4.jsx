import { Component } from "react";

export class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      email: "",
      number: "",
      data: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, id, email, number, data } = this.state;
    this.setState({
      data: [...data, { name, id, email, number }],
      name: "",
      id: "",
      email: "",
      number: "",
    });
  };

  render() {
    const { name, id, email, number, data } = this.state;

    return (
      <div className="container">
        <h2>Submit your Information</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              name="id"
              value={id}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Number:</label>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        <h2>Submitted Data</h2>
        <table className="table" border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.id}</td>
                <td>{entry.email}</td>
                <td>{entry.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default FormComponent;
