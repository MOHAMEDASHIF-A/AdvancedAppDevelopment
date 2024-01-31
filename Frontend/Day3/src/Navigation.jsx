// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li id='a' ><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></li>
        <li className='dropdown' id='a' style={{marginLeft:"8cm"}}>
       
          <span className="dropbtn" >Admission</span>
          <div className="dropdown-content">
            <Link to="/eng" style={{textDecoration:"none",color:"white"}}>Engineering Courses</Link>
            <Link to="/arts" style={{textDecoration:"none",color:"white"}}>Arts&Science Courses</Link>
          </div>
        </li>
        {/* <li className='a'style={{color:"white",opacity:"0"}}>About</li> */}
        {/* <li className='a'style={{color:"white",opacity:"0"}}>About</li> */}
      <li id='a' style={{marginLeft:"15cm"}}><Link to="/about"style={{textDecoration:"none",color:"white"}}>About</Link></li>
        <li id='a'style={{marginLeft:"8cm"}}><Link to="/contact" style={{textDecoration:"none",color:"white"}}>Contact</Link></li>
        {/* <li id='a'style={{marginLeft:"6cm"}}><Link to="/admin" style={{textDecoration:"none",color:"white"}}>Admin</Link></li> */}
        <li id='a'style={{marginLeft:"7cm"}}><Link to="/login"style={{textDecoration:"none",color:"white"}}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
