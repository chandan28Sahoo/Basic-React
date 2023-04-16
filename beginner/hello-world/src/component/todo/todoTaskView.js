import React from "react";
// import './todoTaskView.css';
import TodoItem from "./todoItem";

const ViewTask = (props) => {
  console.log("props:::::11", props.item);
  console.log(props.isComplete === 1);
console.log("props.isComplete === 1 ? ", props.isComplete === 1 ? "Done" : "Not Done" );
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {props.item.map((todo, index) => (
        <div key={index}>
          {todo.map(
            (item, itemIndex) => (
            //   item.isDelete !== 1 ?? item,
              (
                <TodoItem
                  key={console.log(item, "kkkkk") || `parent${index} child${itemIndex}`}
                  task={item.task}
                  index={index}
                  itemIndex={itemIndex}
                  date={item?.date?.toString()?.slice(0, 15)}
                  isComplete = {item.isComplete === 1 ? "Done" : "Not Done"}
                  removeHandler={props.removeHandler}
                  updateHandler = {props.updateHandler}
                />
              )
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ViewTask;
