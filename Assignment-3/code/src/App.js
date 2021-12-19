import React from 'react';
import Header from './header.js';
import Customer_info from './customer-info';
import order_info from './order-info';
import product_list from './product-list';
import './App.css'
import unchecked from './unchecked.png';


var arrow="<";

function App() {
  const desk = {
    Name: "Sameer khan",
    employeeid: "696969",
    Email: "1213@gmail.com",
    phone: "8384848432",
    appointment:new Date(645556).toLocaleString(),
    status:"In Progress",
    door:"Mark"
    
  };
  return (
    <div className="site-container">
      <div className='head'>

        <div className='arr'>{arrow}</div>
        <span className='print'>print</span>
        <div className='details'><b>{desk.Name}</b><br></br>{desk.employeeid} </div>
        
        
        
      </div>
      
      <div className='middle-content'>
        <div><b>Appointment: </b>{desk.appointment}</div>
        <div><b>Email: </b>{desk.Email}</div>
        <div><b>phone: </b>{desk.phone}</div>
      </div>

      <div className='Main-content'>
        <div><b>Status:</b><br></br>{desk.status}</div>
        <div><b>Status:</b><br></br>{desk.status}</div>
        <div><b>Status:</b><br></br>{desk.status}</div>
      </div>

      <div className='product'>
        <div ><img className='checkbox' src={unchecked}></img></div>
        <div ><img className='avatar' src="https://www.w3schools.com/howto/img_avatar.png"></img></div>
        <div className='data1'><h2>sir lorem epsum hello</h2><span>hdfghdgdfsghfsdghdfgfdsghfs</span></div>

      </div>

     </div>
  );
}

export default App;
