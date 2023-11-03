import React from 'react';
import './ExpenseBar.css';

function ExpenseBar({ expenses }) {
    

 const months = [
  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
 ];

  return (
   

    <div className='expense-bar'>
    <div className='bar-container'>
      {months.map((month, index) => (
        <>
        <div key={index} className='bar'>
          <div className="inner_bar" style={{height: "50%"}}></div>
          
        </div>
        {/* <div className='month-label'><b>{month}</b></div> */}
        </>
        
      ))}
    </div>
  </div>



    
   
  
   

  );
}

export default ExpenseBar;





