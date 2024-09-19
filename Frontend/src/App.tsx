import React from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import Sidebar from './components/Sidebar';
import Filter from './components/Filter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-2">
            <FlightSearch />
            <FlightResults />
          </div>
          <div className="col-span-1">
            <Filter />
          </div>
          <div className="col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
