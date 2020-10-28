/*
## List

_props_

- array of to dos
- delete function

_behaviour_

- render an array of ListItems in a `ul`

*/

import ListItem from "../ListItem";

function List({ todos, handleDelete }) {
  return (
    <ul>
      {todos.map((todo, i) => {
        return (
          <ListItem key={i} text={todo} handleDelete={() => handleDelete(i)} />
        );
      })}
    </ul>
  );
}

export default List;
