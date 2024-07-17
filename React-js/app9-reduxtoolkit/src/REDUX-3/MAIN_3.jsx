import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser, addUser } from "./UsersSlice";

function MAIN_3() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now().toString() }));
    }
    setFormData({ id: "", name: "", age: "", address: "", date: "" });
  };

  const handleEdit = (user) => {
    setFormData(user);
  };

  return (
    <div>
      <h1>User Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
          required
        />
        <button type="submit">{formData.id ? "Update" : "Create"}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>{user.date}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => dispatch(deleteUser(user.id))}>
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

export default MAIN_3;
