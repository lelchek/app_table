import React from "react";

const DataItem = ({ firstName, lastName, city, business, deleteItem }) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{city}</td>
    <td>{business}</td>
    <td>
      <button className="ui button" onClick={deleteItem}>
        Удалить
      </button>
    </td>
  </tr>
);

export default DataItem;
