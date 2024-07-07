import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);

  const goToForm = () => {
    navigate("/form");
  };
  return (
    <div>
      <h1>login</h1>
      <table className="table" border={2}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <button type="button" className="btn btn-primary">
        Add
      </button>
      <button type="button" className="btn btn-danger" onClick={goToForm}>
        goToForm
      </button>
    </div>
  );
};

export default Login;
