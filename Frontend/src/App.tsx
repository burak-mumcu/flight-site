import React from 'react';
import './index.css';
import './App.css';
import BookFlight from './pages/BookFlight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFlights from './components/MyFlights';
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookFlight />} />
          <Route path="/myFlights" element={<MyFlights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
