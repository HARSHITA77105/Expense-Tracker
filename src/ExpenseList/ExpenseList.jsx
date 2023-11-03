import React from 'react';
import ExpenseBar from './ExpenseBar';
import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css";

function ExpenseList({ expenses }) {

  const uniqueYears = [...new Set(expenses.map(expense => expense.date.getFullYear()))];

  return (
    <div className="expense-list">
      <div className="filterDate">
        <b>Filter by year</b>
        <select>

          {uniqueYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>

          ))}
        </select>

      </div>

      <ExpenseBar expenses={expenses} />
      <ExpenseItem
        title="Expense 1"
        amount="100.75"
        date={new Date(2023, 7, 1)}
      />
      <ExpenseItem
        title="Expense 2"
        amount="800.65"
        date={new Date(2023, 7, 15)}
      />
      <ExpenseItem
        title="Expense 3"
        amount="50"
        date={new Date(2023, 7, 30)}
      />


      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
        />
      ))}







    </div>
  );
}

export default ExpenseList;

