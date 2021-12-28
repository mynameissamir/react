import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Postview from "./Postview";
import './landing.css';
function Landing_page(){
    return(
        <Router>
        <div className="father">
            <div className="child1">
            <img src="https://images.unsplash.com/photo-1640532050708-53b0fcfd52a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img> 
            </div>
            <div className="child2">
            <div className="innerchild1">
            <label>10X Team 04 <Link to={'/postview'}><div className="button1">Enter</div></Link></label>
            </div>
               <div className="createspace"></div>


            <Routes>
                <Route path='/postview' element={<Postview/>} />
            </Routes>
            <div></div>
            </div>
            
        </div>
        </Router>
    )
}
export default Landing_page;