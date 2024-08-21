import React, { useState } from "react";

const SongList = () => {
  const [playingSong, setPlayingSong] = useState("");
  const audioRef = React.createRef();

  const songs = ["Song1", "Song2", "Song3", "Song4"];

  const playSong = (song) => {
    setPlayingSong(song);
    audioRef.current.src = `./song1.mp3/${song}.mp3`;
    audioRef.current.play();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ul style={{ width: "300px", margin: "auto" }}>
        {songs.map((song, index) => (
          <li
            key={index}
            onClick={() => playSong(song)}
            style={{
              cursor: "pointer",
              background: playingSong === song ? "green" : "transparent",
              color: playingSong === song ? "white" : "black",
              width: playingSong === song ? "100px" : "auto",
              borderRadius: playingSong === song ? "4px" : "0",
              textAlign: playingSong === song ? "center" : "left",
              margin: "10px 0",
            }}
          >
            {song}
          </li>
        ))}
      </ul>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default SongList;
