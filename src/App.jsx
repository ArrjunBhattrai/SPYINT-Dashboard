import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  const userName = "Arjun!";
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          
          <Routes>
          <Route path="/" element={<Home userName={userName}/>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;