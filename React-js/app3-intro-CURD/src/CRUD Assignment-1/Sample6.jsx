import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editText: this.props.text, // Initialize editText with the current text
    };
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleSave = () => {
    this.props.onEdit(this.props.id, this.state.editText);
    this.setState({ isEditing: false });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { text } = this.props;
    const { isEditing, editText } = this.state;

    return (
      <div>
        {isEditing ? (
          <div>
            <input type="text" value={editText} onChange={this.handleChange} />
            <button onClick={this.handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <span>{text}</span>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Item;
