import React, { useEffect } from 'react';
import axios from 'axios';
import { useFlightStore } from '../stores/FlightStore';

const FlightResults: React.FC = () => {
//  const [flights, setFlights] = useState<Flight[]>([]);
  const { flights, fetchFlights } = useFlightStore();

  useEffect(() => {
    fetchFlights();
    flights.map((flight)=>{
      const timeString = flight.duration;
      const hourMatch = timeString.match(/(\d+)h/);  // Saat eşleşmesini bulur
      const minuteMatch = timeString.match(/(\d+)m/); // Dakika eşleşmesini bulur
  
      const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
      const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
  
      let time = hours * 60 + minutes;
      flight.duration = time.toString();
    })
  },[]);

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