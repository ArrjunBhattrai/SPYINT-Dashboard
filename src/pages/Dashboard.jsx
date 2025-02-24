import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

const data = [
  { name: "Jan", threats: 30, transactions: 50, suspects: 10 },
  { name: "Feb", threats: 45, transactions: 70, suspects: 20 },
  { name: "Mar", threats: 60, transactions: 90, suspects: 25 },
  { name: "Apr", threats: 80, transactions: 120, suspects: 40 },
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Investigation Dashboard</h1>
      
      <div className="summary-cards">
        <div className="card">Total Threats: 80</div>
        <div className="card">Flagged Transactions: 120</div>
        <div className="card">Suspect Profiles: 40</div>
      </div>
      
      <div className="recent-activities">
        <h2>Recent <br/> Activities</h2>
        <ul>
          <li>New dark web threat detected - High risk</li>
          <li>Suspicious crypto transaction flagged</li>
          <li>New suspect profile added</li>
        </ul>
      </div>
      
      <div className="chart-container">
        <h2>Threats & Transactions Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="threats" stroke="#FF5733" strokeWidth={2} />
            <Line type="monotone" dataKey="transactions" stroke="#33B5FF" strokeWidth={2} />
            <Line type="monotone" dataKey="suspects" stroke="#33FF77" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;