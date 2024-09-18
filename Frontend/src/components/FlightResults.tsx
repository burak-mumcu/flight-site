import React, { useState, useEffect } from 'react';
import { Flight } from '../interfaces/Flight';
import axios from 'axios';

const FlightResults: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    fetchFlights();
  },[]);

  const fetchFlights = async () => {
    try {
      console.log('1');
      const response = await axios.get('http://localhost:7000/flights');
      console.log('2');
      if (response.status !== 200) throw new Error('Uçuş verileri alınamadı');
      console.log(response);
      setFlights(response.data);
    } catch (error) {
      console.error('Uçuş verileri yüklenirken hata oluştu:', error);
    }
  };

  const handleBookFlight = async (id: string) => {
    try{
      const response = await axios.post(`http://localhost:7000/flights/addMyFlight`,{flightId:id})
      if(response.status === 200){
        alert('Uçuş rezervasyonu başarılı')
      }
      else{
        alert('Uçuş rezervasyonu başarısız')
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
              <div>{flight.from} - {flight.to} • {flight.duration}</div>
            </div>
            <div className='flex flex-row gap-4'>
            <div className="text-lg font-bold text-purple-600">${flight.price}</div>
            <button onClick={() => handleBookFlight(flight._id)} className="bg-purple-600 text-white px-4 py-2 rounded">Book Flight</button>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default FlightResults;