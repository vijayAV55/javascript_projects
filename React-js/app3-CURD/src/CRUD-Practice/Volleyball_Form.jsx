import React from "react";

function Volleyball({ handleChange, user, addUser, isEdit, updateuser }) {
  return (
    <div>
      <h1>Volleyball_Form </h1>
      <Form>
        <label htmlFor="">paticipant Name</label>
        <input
          type="text"
          name="fname"
          placeholder="First"
          value={user.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          id=""
          placeholder="Last"
          value={user.lname}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="">Age</label>
        <input
          type="number"
          name="age"
          id=""
          value={user.age}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="">Grade</label>
        <select name="    " id="" value={user.Grade} onChange={handleChange}>
          <option value="">First</option>
          <option value="">Last</option>
        </select>{" "}
        <br />
        <br />
        {isEdit ? (
          <button onClick={updateuser}>UpdateUser</button>
        ) : (
          <button onClick={addUser}>Submit</button>
        )}
      </Form>
    </div>
  );
}
export default Volleyball;
