import { useState } from "react";

export function FitnessChallengeTracke() {
  const [FitnessChallengeTracke] = useState({
    challengename: "pushpa",
    startdate: "thaggedelehy",
    enddate: "yu",
    tags: "love you",

    createnewposts: function () {},
    editposts: function () {},
    deleteposts: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(FitnessChallengeTracke).map((key) => {
          return <li>{FitnessChallengeTracke[key]}</li>;
        })}
      </ul>
    </div>
  );
}
