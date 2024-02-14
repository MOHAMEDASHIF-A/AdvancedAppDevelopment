import React from 'react';
import './AdminHomePage.css'; 
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
  return (
    
    <div className='whole-admhome'>

    <div className="adminss-home">
      <header>
        <h1 className='adminhomehead'>Admin Panel</h1>
      </header>
      <main>
        <section className="statistics">
    <Link to="/admin">
     <button className="stat-card" style={{width:"170px",marginBottom:"20px"}}>Add Courses</button> </Link>
     <Link to="/delete">
     <button className="stat-card" style={{width:"170px",marginBottom:"20px"}}>Delete Courses</button> </Link>
          
          {/* <div className="stat-card" style={{width:"170px"}}>Update Courses</div> */}
        </section>

      </main>
    </div>
    </div>
  );
};

export default AdminHomePage;