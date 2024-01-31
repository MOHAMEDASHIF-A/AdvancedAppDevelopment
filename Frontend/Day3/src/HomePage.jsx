// HomePage.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import NavigationBar from './Navigation';
import image1 from "./image1.jpg"
import image2 from "./wall2.jpg"
import image3 from "./image3.jpg"
const HomePage = () => {
  useEffect(() => {
    const backgroundSlider = document.querySelector('.background-slider');

    const intervalId = setInterval(() => {
      backgroundSlider.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        backgroundSlider.appendChild(backgroundSlider.firstElementChild);
        backgroundSlider.style.transition = 'none';
        backgroundSlider.style.transform = 'translateX(0)';
        setTimeout(() => {
          backgroundSlider.style.transition = 'transform 1s ease-in-out';
        });
      }, 1000);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      <NavigationBar />
      <div className="home-container">
        <div className="background-slider">
        <div className="overlay-text" style={{marginTop:"-8cm"}}>
          <h2>UNIVERSITY</h2>
          <p>Admissions open now</p>
        </div>
          <img className="background-slide" src={image2} alt="Slide 1" />
          <img className="background-slide" src={image3} alt="Slide 2" />
          <img className="background-slide" src={image1} alt="Slide 3" />
          {/* Add more images as needed */}
        </div>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@homecareservice.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/services">Services</a></li> */}
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Connect with us on social media:</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HomeCare Service. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default HomePage;
