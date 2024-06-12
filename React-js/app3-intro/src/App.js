import { Component } from "react";
import { User } from "./CRUD Assignment-1/Sample2";
import { Sample1 } from "./CRUD Assignment-1/Sample_1";
import { Sample3 } from "./CRUD Assignment-1/Sample3";
import FormComponent from "./CRUD Assignment-1/Sample4";
import App1 from "./CRUD Assignment-1/Sample5";
import Item from "./CRUD Assignment-1/Sample6";

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Sample1 />
        <User /> */}
        {/* <Sample3 /> */}
        <FormComponent />
        {/* <App1 />
        <Item /> */}
      </div>
    );
  }
}
