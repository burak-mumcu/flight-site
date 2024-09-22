import React, { useState } from 'react';
import { useFlightStore } from '../stores/FlightStore';

const FlightSearch: React.FC = () => {
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const { flights, setFilteredFlights } = useFlightStore();

  const handleSearch = () => {
    let filteredFlights = [...flights];
    filteredFlights = filteredFlights.filter((flight) => flight.from.includes(from) && flight.to.includes(to) && flight.date.includes(date));
    setFilteredFlights(filteredFlights);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">BOOK YOUR FLIGHT</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-4">
        <input 
          type="text" 
          placeholder="From" 
          className="border p-2 mt-2 rounded w-full" 
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="To" 
          className="border p-2 mt-2 rounded w-full"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input 
          type="date" 
          className="border p-2 mt-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button 
          className="bg-purple-600 text-white p-2 mt-2 rounded" 
          onClick={handleSearch}
        >
          Show Flights
        </button>
      </div>
    </div>
  );
}

export default FlightSearch;
