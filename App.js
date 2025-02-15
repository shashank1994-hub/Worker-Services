import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Booking from "./components/Booking";
import WorkerList from "./components/WorkerList";
import AboutUs from "./components/AboutUs";
import './App.css'; 
import Admin from "./components/Admin"; 
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/worker-list" element={<WorkerList />} />
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/signup" element={<UserForm />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
