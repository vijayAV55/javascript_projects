import { useState } from "react";

export function RecipeGenerator() {
  const [RecipeGenerator] = useState({
    ingredients: "9640744182",
    instructions: "Vijay",

    preferences: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(RecipeGenerator).map((key) => {
          return <li>{RecipeGenerator[key]}</li>;
        })}
      </ul>
    </div>
  );
}
