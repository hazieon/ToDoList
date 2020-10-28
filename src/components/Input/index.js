/*
## Input

_state_

- text

_props_

- add function

_behaviour_

- render an input field and a button
- change of input text will update state of this component
- button click will call the add function from props with value of input
*/

import React, { useState } from "react";

function Input({ addTodo }) {
  const [text, setText] = useState("");

  //   function handleClick() {
  //     addTodo(text);
  //   }

  //   function handleInput(e) {
  //     setText(e.target.value);
  //   }

  function handleClick() {
    addTodo(text);
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a todo..."
        id="todo-input"
        onInput={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleClick}>Add a todo</button>
    </div>
  );
}

export default Input;
