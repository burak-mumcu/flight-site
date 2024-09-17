import React, { useState, useEffect } from 'react';
import { Flight } from '../interfaces/Flight';
import axios from 'axios';

const FlightResults: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://localhost:3000/Flights');
        if (!response.ok) {
          throw new Error('Uçuş verileri alınamadı');
        }
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error('Uçuş verileri yüklenirken hata oluştu:', error);
      }
    };

    fetchFlights();
  }, []);

  const handleBookFlight = async (id: string) => {
    try{
      const response = await axios.post(`http://localhost:3000/Flights/${id}`)
      if(response.status === 200){
        alert('Uçuş rezervasyonu başarılı')
      }
    }
    catch(e){
      console.log(e)
    }
  };

  return (
    <div className="mt-6">
      {flights.map((flight,index) => (
        <div key={index + 1} className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">{flight.departure} - {flight.arrival}</div>
              <div>{flight.from} {flight.to} • {flight.duration}</div>
            </div>
            <div className="text-lg font-bold text-purple-600">${flight.price}</div>
            <button onClick={() => handleBookFlight(flight._id)} className="bg-purple-600 text-white px-4 py-2 rounded">Book Flight</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightResults;