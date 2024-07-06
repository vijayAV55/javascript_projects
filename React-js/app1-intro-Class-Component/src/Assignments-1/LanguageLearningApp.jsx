import { useState } from "react";

export function LanguageLearningApp() {
  const [LanguageLearningApp] = useState({
    vocabularywords: "aeiou",
    definitions: "60%",
    examplesentences: "6000",

    newwords: function () {},
    removewords: function () {},
    testvocabulary: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(LanguageLearningApp).map((key) => {
          return <li>{LanguageLearningApp[key]}</li>;
        })}
      </ul>
    </div>
  );
}
