import React,{useState} from "react";
import "./expenceForm.css";

const ExpenceForm = (props) => {

    let [title, setTitle] = useState('');
    let [amount, setAmount] = useState('');
    let [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value)

    }
    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        setAmount(event.target.value)

    }
    const dateChangeHandler = (event) => {
        // console.log(event.target.value);
        setDate(event.target.value)
       
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let expenceObj = {};
        expenceObj.title = title;
        expenceObj.amount = amount;
        expenceObj.date = new Date(date);
        console.log("expenceObj::",expenceObj);
        props.onSaveExpence(expenceObj)
        setTitle('');
        setAmount('');
        setDate('');
    }

  return (
    <form onSubmit={ submitHandler }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={ titleChangeHandler }/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={amount} min="0.01" step="0.01" onChange={ amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={date} onChange={ dateChangeHandler }/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenceForm;
