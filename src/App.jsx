import React, { useReducer } from "react";

function Counter() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state > 0 ? state - 1 : 0;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={()=>dispatch({ type: "increment" })}>Increment</button>
      <button onClick={()=>dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Counter;
