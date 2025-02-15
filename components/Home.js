import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkerCard from "./WorkerCard";
import "../styles/Home.css";

function Home() {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  
  useEffect(() => {
    axios.get("http://localhost:8080/workers")
      .then(response => {
        setWorkers(response.data);
        setFilteredWorkers(response.data); 
      })
      .catch(error => console.error("Error fetching workers:", error));
  }, []);

  
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = workers.filter(worker =>
      worker.name.toLowerCase().includes(term) ||
      worker.skill.toLowerCase().includes(term)
    );
    setFilteredWorkers(filtered);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Find the Best Workers for Your Needs</h1>
        <p>Skilled, Reliable, and Ready to Help!</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or skill..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>
      </div>

      {/* Worker Grid */}
      <div className="worker-grid">
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map(worker => (
            <WorkerCard key={worker.id} worker={worker} />
          ))
        ) : (
          <p className="no-results">No workers found. Try a different search term.</p>
        )}
      </div>

      {/* Additional Information Section */}
      <div className="info-section">
        <h2>Why Choose Us?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Skilled Professionals</h3>
            <p>Our workers are highly skilled and experienced in their respective fields.</p>
          </div>
          <div className="info-card">
            <h3>Affordable Rates</h3>
            <p>Get quality work done at competitive prices.</p>
          </div>
          <div className="info-card">
            <h3>24/7 Availability</h3>
            <p>Book a worker anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;