import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkerCard from "./WorkerCard";
import "../styles/WorkerList.css";

function WorkerList() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  
  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        let url = "http://localhost:8080/workers";
        if (showAvailableOnly) {
          url = selectedSkill === "all" 
            ? "http://localhost:8080/workers/available" 
            : `http://localhost:8080/workers/available/${selectedSkill}`;
        }

        const response = await axios.get(url);
        setWorkers(response.data);
        setError("");
      } catch (error) {
        setError("Failed to fetch workers. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, [selectedSkill, showAvailableOnly]);

  
  const skills = [...new Set(workers.map(worker => worker.skill))];

  return (
    <div className="worker-list-container">
      <h2>Find Skilled Workers</h2>
      
      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <label>Filter by Skill:</label>
          <select 
            value={selectedSkill} 
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="all">All Skills</option>
            {skills.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>
            <input 
              type="checkbox" 
              checked={showAvailableOnly} 
              onChange={(e) => setShowAvailableOnly(e.target.checked)}
            />
            Show Available Only
          </label>
        </div>
      </div>

      {/* Loading/Error States */}
      {loading && <p className="loading">Loading workers...</p>}
      {error && <p className="error">{error}</p>}

      {/* Worker Grid */}
      <div className="worker-grid">
        {workers.length > 0 ? (
          workers.map(worker => (
            <WorkerCard key={worker.id} worker={worker} />
          ))
        ) : (
          !loading && <p className="no-results">No workers found.</p>
        )}
      </div>
    </div>
  );
}

export default WorkerList;