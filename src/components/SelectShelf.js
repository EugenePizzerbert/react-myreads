import React from "react";

const SelectShelf = props => (
  <select>
    {props.shelves.map(shelf => (
      <option key={shelf.id} value={shelf.id}>
        {shelf.name}
      </option>
    ))}
    <option value="none">None</option>
  </select>
);

export default SelectShelf;
