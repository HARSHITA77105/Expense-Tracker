import React, { useState } from 'react';
import './ExpenseTrackerForm.css';
import ExpenseList from "../ExpenseList/ExpenseList";
// import ExpenseBar from '../ExpenseList/ExpenseBar';

function ExpenseTrackerForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [expenses, setExpenses] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleAddExpense = () => {
      if (title && amount && date) {
        const newExpense = { title, amount, date:new Date(date) };
        setExpenses([...expenses, newExpense]);
        setTitle('');
        setAmount('');
        setDate(new Date().toISOString().split('T')[0]); 
      }
    };

    const today = new Date().toISOString().split('T')[0];
    // const uniqueYears = [...new Set(expenses.map(expense => expense.date.getFullYear()))];
    const minDate ='2019-01-01';

    return (
        <>
            <div className='heading'>
                <h1>Harshita's</h1>
                <h2>Expense Tracker</h2>
            </div>
            <div className='line'></div>

            <div className="expense-tracker-container">


                <div className="input-row">
                    <div className='input-container'>
                        <label><b>Title</b></label>
                        <input
                            type="text"

                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className='input-container'>

                        <label><b>Amount</b></label>
                        <input
                            type="number"

                            value={amount}
                            onChange={handleAmountChange}
                        />

                    </div>

                </div>
                <div className="input-row">
                    <div className='input-container'>
                        <label><b>Date</b></label>
                        <input
                            type="date"
                            value={date}
                            max={today}
                            min={minDate}
                            onChange={handleDateChange}
                        />

                    </div>

                    <button onClick={handleAddExpense}>Add Expense</button>


                </div>

                </div>
                
                <ExpenseList expenses={expenses}/>
        
                
    </>
    );
}

            export default ExpenseTrackerForm;
