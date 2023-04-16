import React, { useState } from "react";

import "./todoItem.css";

// import TodoDate from './todoDate';

const TodoItem = (props) => {
    console.log("propspropsprops::",props);
  return (
    <div className="todo-item">
      <div>
        <h2 className="todo-item_h2">{props.date} </h2>
        <h2 className="todo-item_h2">{props.task} </h2>
        <h2 className="todo-item_h2">{props.isComplete} </h2>
      </div>
      <div>
        <button type="submit" onClick={() => props.removeHandler(props.index,props.itemIndex)}>
          {" "}
          Remove{" "}
        </button>
        {
            props.isComplete === "Not Done" && 
            <button type="submit" onClick={() => props.updateHandler(props.index,props.itemIndex)}>
                    {" "}
                    make it done{" "}
                  </button>
        }
      </div>
    </div>
  );
};

export default TodoItem;
