// Admin.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import NavigationBar from "./Navigation";
import axios from "axios";
const Admin = ({ addCourse }) => {
  const [course, setCourse] = useState({
    
    type: "",
    degree: "",
    courses: "",
    seats: 0,
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/add", course);
      alert("Your course has been added successfully!");
      console.log("Server response:", response.data);
      addCourse(course); // Update the state in your React app if necessary
      setCourse({
        
        type: "",
        degree: "",
        courses: "",
        seats: 0,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div className="whole-contain">
    <div>
      <NavigationBar />
    <div className="admin-container">
      <h2 className="admin-heads">Add Courses</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Course Type:
          <select name="type" value={course.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="arts">Arts&Science</option>
            <option value="engineering">Engineering</option>
          </select>
        </label>
        <label>
          Degree:
          <input type="text" name="degree" value={course.degree} onChange={handleChange} required />
        </label>
        <label>
          Courses:
          <input type="text" name="courses" value={course.courses} onChange={handleChange} required />
        </label>
        <label>
          Seats:
          <input type="number" name="seats" value={course.seats} onChange={handleChange} required />
        </label>
        <button type="submit">Add Course</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Admin;
