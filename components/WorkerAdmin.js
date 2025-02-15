import React, { useState } from "react";
import axios from "axios";
import "../styles/WorkerAdmin.css";

function WorkerAdmin() {
  const [worker, setWorker] = useState({
    name: "",
    skill: "",
    experienceYears: "",
    hourlyRate: ""
  });

  const handleChange = (e) => {
    setWorker({ ...worker, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/workers", worker)
      .then(response => alert("Worker added successfully!"))
      .catch(error => console.error("Error adding worker:", error));
  };

  return (
    <div className="worker-admin-container">
      <h2>Add Worker</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="skill" placeholder="Skill" onChange={handleChange} required />
        <input type="number" name="experienceYears" placeholder="Experience Years" onChange={handleChange} required />
        <input type="number" name="hourlyRate" placeholder="Hourly Rate" onChange={handleChange} required />
        <button type="submit">Add Worker</button>
      </form>
    </div>
  );
}

export default WorkerAdmin;
