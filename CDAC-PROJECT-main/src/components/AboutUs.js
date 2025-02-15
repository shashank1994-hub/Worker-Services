import React from 'react';
import { FaUsers, FaTools, FaHandshake } from 'react-icons/fa';
import teamMembers from '../data/teamMembers'; 
import '../styles/AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>About Worker Management</h1>
        <p>
          Worker Management is a platform that connects clients with skilled workers like plumbers,
          electricians, and house laborers. Our mission is to make hiring workers quick, easy, and
          reliable.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <FaUsers className="icon" />
            <h3>Skilled Workers</h3>
            <p>We provide access to a pool of highly skilled and verified workers.</p>
          </div>
          <div className="feature">
            <FaTools className="icon" />
            <h3>Wide Range of Services</h3>
            <p>From plumbing to electrical work, we cover all your needs.</p>
          </div>
          <div className="feature">
            <FaHandshake className="icon" />
            <h3>Hassle-Free Booking</h3>
            <p>Book a worker in just a few clicks and get your job done.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers and hire a worker today!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default AboutUs;