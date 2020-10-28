/*

_props_

- text
- delete function

_behaviour_

- render the text and a button
- when the button is clicked call the delete function to delete item at this index

*/

function ListItem({ text, handleDelete }) {
  return (
    <li>
      <span>{text}</span>
      <button onClick={handleDelete}>Delete me</button>
    </li>
  );
}

export default ListItem;
