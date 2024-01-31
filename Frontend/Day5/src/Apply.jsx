// Apply.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./Navigation";
import './Apply.css';

const Apply = () => {
  const { title } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    percentage10: "",
    percentage12: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your Application is successfully submitted");
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      state: "",
      percentage10: "",
      percentage12: "",
    });
  };

  return (
    <div className="massive-cont">
      <NavigationBar />
    <div className="apply-container">
      <h2 className="apply-heading">Application Form {title}</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="form-label">
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          10th Percentage:
          <input
            type="text"
            name="percentage10"
            value={formData.percentage10}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          12th Percentage:
          <input
            type="text"
            name="percentage12"
            value={formData.percentage12}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <button type="submit" className="form-button">Submit Application</button>
      </form>
    </div>
    </div>
  );
};

export default Apply;
