import React, { useState } from "react";

import "./App.css";

/*
## App

_state_

- list of to dos

_behaviour_

- add item to list
- remove item from list
- render an Input and List
*/

import List from "../List";
import Input from "../Input";

function App() {
  const [todos, setTodos] = useState([]);

  function addItem(itemToAdd) {
    setTodos([...todos, itemToAdd]);
  }

  // function handleDelete(itemToRemove) {
  //   setTodos(todos.filter((todo) => todo !== itemToRemove));
  // }

  function handleDelete(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div className="App">
      <Input addTodo={addItem} />
      <List todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
