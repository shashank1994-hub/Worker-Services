import React, { useState } from "react";
import axios from "axios";
import "../styles/Admin.css";

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    skill: "",
    hourlyRate: "",
    experienceYears: "",
    isAvailable: true,
  });
  const [message, setMessage] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/workers", formData);
      setMessage("Worker added successfully!");
      setFormData({
        name: "",
        skill: "",
        hourlyRate: "",
        experienceYears: "",
        isAvailable: true,
      });
    } catch (error) {
      setMessage("Failed to add worker. Please check the fields.");
      console.error("Error adding worker:", error);
    }
  };

  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel - Add Worker</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Skill:</label>
          <input
            type="text"
            name="skill"
            value={formData.skill}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Hourly Rate ($):</label>
          <input
            type="number"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleInputChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Experience (Years):</label>
          <input
            type="number"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleInputChange}
            />
            Available
          </label>
        </div>

        <button type="submit">Add Worker</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Admin;