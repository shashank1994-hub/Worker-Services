import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Booking.css";

function Booking() {
  const [workers, setWorkers] = useState([]);
  const [userId, setUserId] = useState("");
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    axios.get("http://localhost:8080/workers")
      .then(response => setWorkers(response.data))
      .catch(error => console.error("Error fetching workers:", error));
  }, []);

  
  const handleBookWorker = () => {
    if (!userId || !selectedWorkerId) {
      setMessage("Please select a worker and enter your user ID.");
      return;
    }

    axios.post("http://localhost:8080/bookings/book", null, {
      params: {
        userId: userId,
        workerId: selectedWorkerId,
      },
    })
      .then(response => {
        setMessage("Booking successful!");
        navigate("/");
      })
      .catch(error => {
        setMessage("Error booking worker. Please try again.");
        console.error("Error booking worker:", error);
      });
  };

  return (
    <div className="booking-container">
      <h2>Book a Worker</h2>
      <div className="booking-form">
        <div className="form-group">
          <label htmlFor="userId">Your User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user ID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="worker">Select a Worker:</label>
          <select
            id="worker"
            value={selectedWorkerId || ""}
            onChange={(e) => setSelectedWorkerId(e.target.value)}
          >
            <option value="">Select a worker</option>
            {workers.map(worker => (
              <option key={worker.id} value={worker.id}>
                {worker.name} - {worker.skill} ({worker.isAvailable ? "Available" : "Busy"})
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleBookWorker}>Book Now</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Booking;