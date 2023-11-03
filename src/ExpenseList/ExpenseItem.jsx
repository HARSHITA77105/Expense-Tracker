// ExpenseItem.js

import React from 'react';
import './ExpenseItem.css'; 

function ExpenseItem({ title, amount, date }) {
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div className="item-date">
        <div className="item-month">{month}</div>
        <div className="item-year">{year}</div>
        <div className="item-day">{date.getDate()}</div>
      </div>
      <div className="item-title">{title}</div>
      <div className="item-amount">
        <div className ="amount-square">
            <span>${amount}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;

