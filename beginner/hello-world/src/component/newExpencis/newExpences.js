import React from "react";
import './newExpence.css';
import ExpenceForm from "./expenceForm";
const NewExpences = (props) => {
    const saveExpenceDataHandler = (enterdData) => {
        enterdData.id = Math.random().toString();
        console.log("enterdData",enterdData);
        props.onAddExpenceitem(enterdData);
    };
    return (
        <div className="new-expense">
            <ExpenceForm onSaveExpence = {saveExpenceDataHandler} />
        </div>
    );
}

export default NewExpences;