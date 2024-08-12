// import React, { useReducer } from "react";
import React, { useState, useEffect } from 'react';

function Employees(){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error); 
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => (
        <p>{ele.employee_name}</p>
      ))}
    </div>
  );
}

export default Employees;










// function Counter() {
//   function reducer(state, action) {
//     switch (action.type) {
//       case "increment":
//         return state + 1;
//       case "decrement":
//         return state > 0 ? state - 1 : 0;
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <p>Count: {state}</p>
//       <button onClick={()=>dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={()=>dispatch({ type: "decrement" })}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;


