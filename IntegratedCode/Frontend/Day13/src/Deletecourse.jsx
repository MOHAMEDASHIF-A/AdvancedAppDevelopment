import React, { useState } from 'react';
import axios from 'axios';
import './Deletecourse.css'; // Import your CSS file

function Deletecourse() {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/deleteproducts/${id}`);
      alert("Your course has been deleted successfully!");
      console.log("Server response:", response.data);
      setId('');
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="delete-course-container">
      <h2 className="delete-course-heading">Delete Course</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="idField" className="delete-course-label">Enter Course ID:</label>
            <input
              type="text"
              id="idField"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="delete-course-input"
              required
            />
          </div>
          <button type="submit" className="delete-course-button">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default Deletecourse;
