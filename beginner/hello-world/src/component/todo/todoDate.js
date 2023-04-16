import React from 'react';

import './todoDate.css';

const TodoDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    
    return (
        <div className="expense-date">
            <div>
            <div className="expense-date__month">{ month }</div>
            <div className="expense-date__year">{ year }</div>
            <div className="expense-date__day">{ day }</div>
            </div>
            <div> - </div>
        </div>
        
    );
}

export default TodoDate;