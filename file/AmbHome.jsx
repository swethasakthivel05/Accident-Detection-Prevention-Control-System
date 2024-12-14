import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"; // Make sure to import your styles
import rescueImage from "./rescue.png";

const AmbHome = () => {
  // Sample data for currently accidented places
  const accidentPlaces = [
    {
      id: 1,
      location: "Gandhi Puram",
      severity: "High",
      time: "40 minutes ago",
    },
    {
      id: 2,
      location: "Mettupalayam",
      severity: "Medium",
      time: "35 minutes ago",
    },
    {
      id: 2,
      location: "Ariyalur",
      severity: "Medium",
      time: "35 minutes ago",
    },
    {
      id: 2,
      location: "Periyur",
      severity: "Medium",
      time: "35 minutes ago",
    },
    {
      id: 2,
      location: "Chinnor",
      severity: "Medium",
      time: "30 minutes ago",
    },
    {
      id: 2,
      location: "Silambur",
      severity: "Medium",
      time: "30 minutes ago",
    },
    {
      id: 2,
      location: "Vadavalli",
      severity: "Medium",
      time: "26 minutes ago",
    },
    {
      id: 2,
      location: "Vinaiyur",
      severity: "Medium",
      time: "25 minutes ago",
    },
    {
      id: 2,
      location: "Town hall",
      severity: "Medium",
      time: "25 minutes ago",
    },
    {
      id: 2,
      location: "Vellore",
      severity: "Medium",
      time: "23 minutes ago",
    },
    {
      id: 3,
      location: "Ariyalur",
      severity: "Low",
      time: "20 minutes ago",
    },
    {
      id: 4,
      location: "Perur",
      severity: "High",
      time: "5 minutes ago",
    },
  ];

  return (
    <div className="apps">
      <nav className="navbar">
        <h1>Safe Track</h1>
        <ul>
          <li>
            <Link to="/amb">Home</Link>
          </li>
          <li>
            <Link to="/sign">Sign Up</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Cards Section */}
      <br></br>
      <br></br>
      <br></br>
      
      <center><h1>EMERGENCY-CASES</h1></center>
      <div className="card-sections">
        {accidentPlaces.map((place) => (
          <div className="cards" key={place.id}>
            <h2>{place.location}</h2>
            <br></br>
            <p className="para">Severity: {place.severity}</p>
            <p className="para">Reported: {place.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmbHome;
