import React, { useState } from "react";
// import App2 from "./app2";
// import Div from "./div";
// import "./app.css";
// import ExpenseItem from "./expenceItem";
// import Expenses from "./expences/Expenses";
import TodoApp from "../component/todo/todoApp";
// import ViewTask from '../component/todo/todoTaskView'
// import NewExpences from "./newExpencis/newExpences";

function App() {

/*   let [expences,setExpences] = useState([]);

  // console.log("expense",expense[0].amount);
  const expenceHandler = (expence) => {
    console.log("expenceHandler",expence);
    let updateExpences = [expence];
    setExpences(updateExpences)
  } */
  return (
    // className="app-container" style={{display: "flex", "justify-content": "center"}}
    <div className="App">
      <h2>Lets Get Start</h2>
      {/* <div>
        <NewExpences onAddExpenceitem={expenceHandler} />
        <Expenses item={expences} />
      </div> */}

      <div>
      <TodoApp />
      </div>
  
      {/* <Div /> */}
      {/* <ExpenseItem
        date = {expense[0].date}
        title = {expense[0].title}
        amount = {expense[0].amount}>
      </ExpenseItem> */}
      <div>{/* <App2 name={"chandan sahoo"} /> */}</div>
    </div>
  );
}

export default App;
