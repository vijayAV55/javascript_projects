import { useState } from "react";

export function MovieDatabase() {
  const [MovieDatabase] = useState({
    movietitle: "Devara",
    director: "Jaipal",
    releaseyear: 2005,

    newmovies: function () {},
    removemovies: function () {},
    searchformoviesbydirector: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(MovieDatabase).map((key) => {
          return <li>{MovieDatabase[key]}</li>;
        })}
      </ul>
    </div>
  );
}
