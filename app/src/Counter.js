import React from "react";
import { useState } from "reinspect";

export default function Counter({ id }) {
  const [count, setCount] = useState(0, id);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button> {count}{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
