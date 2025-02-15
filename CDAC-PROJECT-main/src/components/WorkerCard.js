import React from "react";
import "../styles/WorkerCard.css";

function WorkerCard({ worker }) {
  return (
    <div className="worker-card">
      <div className="worker-image">
        <img 
          src={`https://source.unsplash.com/random/400x300/?${worker.skill}`} 
          alt={worker.name}
        />
      </div>
      <div className="worker-details">
        <h3>{worker.name}</h3>
        <div className="worker-info">
          <p className="skill">{worker.skill}</p>
          <p className="experience">Experience: {worker.experienceYears} years</p>
          <p className="rate">${worker.hourlyRate}/hour</p>
          <p className={`status ${worker.isAvailable ? "available" : "busy"}`}>
            {worker.isAvailable ? "Available" : "Busy"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkerCard;