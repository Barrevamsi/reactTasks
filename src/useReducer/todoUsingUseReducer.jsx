import { useReducer, useState } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload]; // Add new todo

    case "update":
      return state.map((val, index) =>
        index === action.index ? action.payload : val
      ); // Update specific todo

    case "delete":
      return state.filter((_, ind) => ind !== action.index); // Delete specific todo

    default:
      return state;
  }
}

function TodouseReducer() {
  const [val, setVal] = useState(""); // Input value
  const [state, dispatch] = useReducer(reducer, []); // useReducer with empty array

  return (
    <>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          if (val.trim() !== "") {
            dispatch({ type: "add", payload: val }); // Add todo
            setVal(""); // Clear input
          }
        }}
      >
        Add
      </button>

      <ul>
        {state.map((todo, ind) => (
          <li key={ind}>
            {todo}
            <button
              onClick={() => {
                const newValue = prompt("Update Todo:", todo);
                if (newValue) {
                  dispatch({ type: "update", index: ind, payload: newValue });
                }
              }}
            >
              Update
            </button>
            <button onClick={() => dispatch({ type: "delete", index: ind })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodouseReducer;
