import React from 'react';
import Header from './header.js';
import customer_info from './customer-info';
import order_info from './order-info';
import product_list from './product-list';
import './App.css'



var arrow="<"

function App() {
  const desk = {
    Name: "Sameer khan",
    employeeid: "696969",
    email: "1213@gmail.com",
    phone: "8384848432",
    appointment:"tommorrow"
  };
  return (
    <div className="site-container">
      <div className='head'>

        <div className='arr'>{arrow}</div>
        <span className='print'>print</span>
        <div className='details'>{desk.Name}<br></br>{desk.employeeid} </div>
        
      </div>
     </div>
  );
}

export default App;
