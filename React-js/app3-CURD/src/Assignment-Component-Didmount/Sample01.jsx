import React, { Component } from "react";
import "./Sample01.css";
import Form from "./Form";
import Table from "./Table";
class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",

      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, data } = this.state;
    this.setState({
      data: [...data, { name, email }],
      name: "",
      email: "",
    });
  }

  render() {
    const { name, email, data } = this.state;

    return (
      <div>
        <Form />
        <Table />
      </div>
    );
  }
}

export default SimpleForm;
