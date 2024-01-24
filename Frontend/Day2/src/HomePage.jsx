// Import necessary libraries
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import NavigationBar from './Navigation';


const HomePage = () => {
  return (
    <div className='bod'>
      <NavigationBar />
      <div className="home-container">
        <h2>Welcome to the Home Page!</h2>
      </div>
    </div>
  );
};

export default HomePage;
