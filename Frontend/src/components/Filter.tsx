import React, { useState } from 'react';
import { useFlightStore } from '../stores/FlightStore';

const FlightFilter: React.FC = () => {
  const [sortPrice, setSortPrice] = useState('Lowest Price');
  const [sortTime, setSortTime] = useState('Fastest flight');
  const [arrivalTime, setArrivalTime] = useState('');
  
  const { flights, setFilteredFlights } = useFlightStore();

  const handleSelectFlight = () => {
    console.log(flights);
    let filteredFlights = [...flights];
  
    // Varış zamanına göre filtreleme
    if (arrivalTime !== '') {
      filteredFlights = filteredFlights.filter(flight => {
       return flight.arrival.includes('PM') && arrivalTime.includes('PM') ||
    flight.arrival.includes('AM') && arrivalTime.includes('AM')
      });
    }
  
    // Fiyata göre sıralama
    if (sortPrice === 'Lowest Price') {
      filteredFlights.sort((a, b) => a.price - b.price);
    } else {
      filteredFlights.sort((a, b) => b.price - a.price);
    }
  
    // Zamana göre sıralama
    if (sortTime === 'Fastest flight') {
      filteredFlights.sort((a, b) => Number(a.duration) - Number(b.duration));
    } else {
      filteredFlights.sort((a, b) => Number(b.duration) - Number(a.duration));
    }
  
    setFilteredFlights(filteredFlights);
    console.log('Filtrelenmiş uçuşlar:', filteredFlights);
  };

  return (
    <div className="max-w-xs p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Sort by */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Fiyata göre sırala:</label>
        <select 
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
        >
          <option>Lowest Price</option>
          <option>Highest Price</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Zamana göre sırala:</label>
        <select 
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={sortTime}
          onChange={(e) => setSortTime(e.target.value)}
        >
          <option>Fastest flight</option>
          <option>Slowest flight</option>
        </select>
      </div>

      {/* Arrival Time */}
      <div className="mb-4">
        <p className="text-gray-700 font-bold mb-2">Varış Zamanı</p>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="arrivalTime"
              value="00:00 AM - 11:59 AM"
              className="form-radio text-purple-500"
              checked={arrivalTime === '00:00 AM - 11:59 AM'}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
            <span className="ml-2 text-gray-600">00:00 AM - 11:59 AM</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="arrivalTime"
              value="12:00 PM - 11:59 PM"
              className="form-radio text-purple-500"
              checked={arrivalTime === '12:00 PM - 11:59 PM'}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
            <span className="ml-2 text-gray-600">12:00 PM - 11:59 PM</span>
          </label>
        </div>
      </div>
      {/* Mor buton */}
      <div className="flex justify-center mt-4">
        <button 
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={handleSelectFlight}
        >
          Uçuş Seç
        </button>
      </div>
    </div>
  );
};

export default FlightFilter;