import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css"; // Import the CSS file

const insights = [
  { title: "Monitor your digital footprint", image: "monitor.jpg", description: "Track your online activity and privacy." },
  { title: "Crypto Transaction Insights", image: "crypto.jpg", description: "Analyze your crypto transactions securely." },
  { title: "Suspected Threats", image: "threat.jpg", description: "Identify potential security risks in real-time." },
  { title: "Live Feed", image: "livefeed.jpg", description: "Get live updates on digital security trends." },
];

const Home = ({ userName }) => {
  return (
    <div className="home-container">
      <h1 className="greeting">
        Hi,{" "}
        <span className="username">
        <Typewriter words={[userName]} loop={false} cursor cursorStyle="|" typeSpeed={100} deleteSpeed={50} />
        </span>
      </h1>

      <a href="/dashboard" className="dashboard-btn">VIEW DASHBOARD</a>

      <div className="insights-grid">
        {insights.map((insight, index) => (
          <InsightCard key={index} title={insight.title} image={insight.image} description={insight.description} />
        ))}
      </div>
    </div>
  );
};

const InsightCard = ({ title, image, description }) => {
  return (
    <div className="insight-card">
      <img src={image} alt={title} className="insight-image" />
      <div className="insight-content">{title}</div>
      <div className="insight-hover">
        <p className="insight-description">{description}</p>
        <button className="view-more-btn">View More</button>
      </div>
    </div>
  );
};

export default Home;