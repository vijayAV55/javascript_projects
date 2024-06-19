import { useState } from "react";

export function ChatApplication() {
  const [ChatApplication] = useState({
    sender: "vijay",
    receiver: "Jaipal",
    message: "hi ram !!...hello ",

    sendmessages: function () {},
    deletemessages: function () {},
    searchformessages: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(ChatApplication).map((key) => {
          return <li>{ChatApplication[key]}</li>;
        })}
      </ul>
    </div>
  );
}
