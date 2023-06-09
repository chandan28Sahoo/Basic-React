import React from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';


const ExpenseItem = (props) => {
    // console.log("props",props);
    return (
        <div className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.amount }</div>
            </div>
        </div>
    );
}

export default ExpenseItem;