/*

_props_

- text
- delete function

_behaviour_

- render the text and a button
- when the button is clicked call the delete function to delete item at this index

*/

import PropTypes from "prop-types";

function ListItem({ text, handleDelete }) {
  return (
    <li>
      <span className="todo-text">{text}</span>
      <button className="del-button" onClick={handleDelete}>
        ✂---
      </button>
    </li>
  );
}

// ListItem.propTypes = {
//   text: PropTypes.array, //causes an error!!!!!!!!!!!!!!!! yay
//   handleDelete: PropTypes.func,
// };

export default ListItem;
