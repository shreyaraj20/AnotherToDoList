import React from "react";
import "./ListItems.css";
import { FaTrash } from "react-icons/fa";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <div className="list" key="item.key">
        <p>
          {item.text}
          <span>
            <FaTrash />
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
