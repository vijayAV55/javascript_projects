import { Component } from "react";
import { ChatApplicationchildcomponent } from "./ChatApplicationchildcomponent";

export class ChatApplication extends Component {
  state = {
    persons: [
      {
        sender: "vijay",
        receiver: "Jaipal",
        message: "hi ram !!...hello ",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.persons.map((persons, i) => {
          return <ChatApplicationchildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
