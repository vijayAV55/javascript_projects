import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function Main() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User Management</h1>
        <AddUser />
        <UserList />
      </div>
    </Provider>
  );
}

export default Main;
