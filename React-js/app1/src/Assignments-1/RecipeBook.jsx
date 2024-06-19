import { useState } from "react";

export function RecipeBook() {
  const [RecipeBook] = useState({
    recipename: "check",
    ingredients: "no",
    instructions: "follow the rules",
    newrecipes: function () {},
    removerecipes: function () {},
  });
  return (
    <div>
      <ul>
        {Object.keys(RecipeBook).map((key) => {
          return <li>{RecipeBook[key]}</li>;
        })}
      </ul>
    </div>
  );
}
