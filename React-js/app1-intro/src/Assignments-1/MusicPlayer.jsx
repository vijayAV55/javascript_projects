import { useState } from "react";

export function MusicPlayer() {
  const [MusicPlayer] = useState({
    currentsong: "tamil",
    playlist: 543,

    play: function () {},
    pause: function () {},
    skip: function () {},
    shufflesongs: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(MusicPlayer).map((key) => {
          return <li>{MusicPlayer[key]}</li>;
        })}
      </ul>
    </div>
  );
}
