import React from "react";
import "./Business.css";
function Business_User() {
  return (
    <div>
      <div className="Container">
        <div className="row">
          <div className="col">
            <form className="name">
              <h1>Student Registration Form</h1>
              <h5>Fill out the form for registration</h5>
              <hr />
              <label htmlFor="">Name</label> <br />
              <input type="text" name="first" placeholder="First" />
              <input type="text" name="last" id="ram" placeholder="Last" />
              <br /> <br />
              <label htmlFor="">Birth Date</label> <br />
              <input type="date" name="birthdate" id="" /> <br /> <br />
              <label htmlFor="">Gender</label> <br />
              <select name="gender" id="V">
                <option value="">Plese select</option>
                <option value="">Male</option>
                <option value="">Fmale</option>
                <option value="">Others</option>
              </select>{" "}
              <br />
              <br />
              <label htmlFor="">Adress</label> <br />
              <input
                type="text"
                name="adress"
                id=""
                placeholder="Enter your adress"
              />
            </form>
          </div>
          <div className="col">
            <h2>Table</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business_User;
