import React, { useState,useEffect } from "react";
import localStorage from 'localStorage';
import "./todoApp.css";
import TodoAppForm from "./todoForm";
import ViewTask from "./todoTaskView";

function TodoApp() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('myData'));
    console.log("storedData::",storedData);
    if (storedData) {
      setTodos(storedData);
    }
  }, []);

  const removeHandler = (index, itemIndex) => {
    // let new_todo = [...todos]
    // let target_todo = new_todo[index]
    // target_todo.splice(itemIndex,1)
    // setTodos(new_todo)
    console.log(index, itemIndex, todos);
    let todoIndex =  todos[index]
    todoIndex.splice(itemIndex,1)
    // console.log("todoIndex",todoIndex);
    // todos[index]=todoIndex.filter((ele,index) => {
    //   console.log("indexindex",index,"itemIndex",itemIndex,"ele",ele);
    //   return index !== itemIndex;
    // })
    // console.log("todoIndex",todos);
    setTodos([...todos])
    localStorage.setItem('myData', JSON.stringify([...todos]));
  };

  const updateHandler = (index, itemIndex) => {
    console.log(index, itemIndex, todos);
    let todoIndex =  todos[index]
    let changeData = todoIndex[itemIndex]
    changeData.isComplete = 1;
    console.log("todostodos::::::::",todos);
    setTodos([...todos])
    localStorage.setItem('myData', JSON.stringify([...todos]));
  }

  const todoAddHandler = (todo) => {
    todo.isComplete = 0;
    let newTodos = [...todos];
    if (todos?.length === 0 || todos[todos?.length - 1]?.length >= 4) {
      newTodos = [...todos, []];
    }
    console.log(newTodos, "new new");
    let lastElement = newTodos[newTodos.length - 1];
    console.log("lastElement", lastElement);
    lastElement.push(todo);
    let updateTodo = [...newTodos];
    console.log(updateTodo, "upd");
    setTodos(updateTodo);
    localStorage.setItem('myData', JSON.stringify(updateTodo));
  };
  return (
    <>
      {console.log(todos, "fffff")}
      <div className="todo-app">
        <div>
          <TodoAppForm onAddExpenceitem={todoAddHandler} />
        </div>
      </div>
      <div>
        <ViewTask updateHandler = {updateHandler} removeHandler={removeHandler} item={todos} />
      </div>
    </>
  );
}

export default TodoApp;

/* 

    console.log("todo:::", todo);
    let todoList = [];
    // for(let i = 1; i<=4; i++){
    //   todoList.push(todoList);
    // }
    if(todos[0].length < 4){
      todoList.push(todoList);
    }
    todos.push(todoList);
    let updateTodo = todos;
    setListTodo(updateTodo);*/
