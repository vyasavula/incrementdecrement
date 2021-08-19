import React from "react";
import { useState, useEffect } from "react";
const UseEffect = () => {
  const initialState = 0;
  const [state, setState] = useState(initialState);
  useEffect(() => {
    document.title = `${state} times clicked`;
  });
  return (
    <>
      <div>
        <h1> The demo of UseEffect</h1>
        <p>You have clicked {state} times</p>
        <button onClick={() => setState(state + 1)}>Click me</button>
      </div>
    </>
  );
};

export default UseEffect;
