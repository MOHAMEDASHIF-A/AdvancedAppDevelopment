import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import HomePage from './HomePage';
import './App.css'; // Import your global CSS file for styling

const App = () => {
  return (
      <div className="app-container">
      <Router>
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          </Routes>
          </Router>
      </div>
      
  );
};

export default App;