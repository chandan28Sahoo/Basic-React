import React, { useState } from "react";
import './todoForm.css';


const TodoAppForm = (props) => {
  let [task,setTask] = useState('');
  let [date,setDate] = useState('');
  const taskChangeHandler = (event) => {
    setTask(event.target.value)
  }
  const dateChangeHandler =(event) => {
    setDate(event.target.value)
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    let expenceObj = {};
    expenceObj.task = task;
    expenceObj.date = new Date(date);
    console.log("expenceObj::",expenceObj);
    props.onAddExpenceitem(expenceObj)
    setTask('');
    setTask('');
  }
  return (  
     <form  onSubmit={ submitHandler}  >
      <div className="todo-form__controls">
        <div className="todo-form__control">
            <label>Task: </label>
            <input type="text" value={task} onChange = { taskChangeHandler  } required />
        </div>
        <div className="todo-form__control">
            <label>Date: </label>
            <input type="date"  value={date} onChange = { dateChangeHandler  } required />
        </div>
      </div>
      <div className="todo-form__actions">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TodoAppForm;
