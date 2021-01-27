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
        placeholder="Enter a todo..." //is this an included attribute?
        id="todo-input"
        onInput={(e) => setText(e.target.value)} //or onChange
        value={text} //onClick could run an anonymous function that takesin  the text
      />
      <button className="button" onClick={handleClick}>
        Add ☑
      </button>
    </div>
  );
}

export default Input;
