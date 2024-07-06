import React from "react";
import Counter from "./Counter";
import Click from "./Click";
import Hover from "./Hover";

function Main() {
  return (
    <div>
      <Counter
        render={(count, handleIncreament) => (
          <Click count={count} handleIncreament={handleIncreament} />
        )}
      />
      <Counter
        render={(count, handleIncreament) => (
          <Hover count={count} handleIncreament={handleIncreament} />
        )}
      />
    </div>
  );
}

export default Main;
