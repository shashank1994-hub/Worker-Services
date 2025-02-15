import React, { useState } from "react";
import axios from "axios";
import "../styles/UserForm.css";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: ""
  });
  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/users", user);
      setMessage("User added successfully!");
      setUser({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      setMessage("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="user-form-container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="example@domain.com"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input 
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Enter your address" 
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default UserForm;
