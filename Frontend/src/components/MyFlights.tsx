import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Flight } from '../stores/FlightStore';

const MyFlights: React.FC = () => {
    const [myFlights, setMyFlights] = useState<Flight[]>([]);
    useEffect(() => {
        const fetchMyFlights = async () => {
            const response = await axios.get('http://localhost:7000/flights/myFlights');
            setMyFlights(response.data);
        };
        fetchMyFlights();
    }, [myFlights]);

    const deleteMyFlight = async (flightId: string) => {
        await axios.post(`http://localhost:7000/flights/deleteMyFlight/`,{flightId:flightId});
        setMyFlights(myFlights.filter(flight => flight._id !== flightId));
    };

    return (
        <div className="container mx-auto px-4 py-6">
          {myFlights.map((flight, index) => (
            <div key={index} className="bg-white shadow rounded-lg mb-6 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold">{flight.from} - {flight.to}</div>
                  <div className="text-gray-600">{flight.date}</div>
                  <div className="text-gray-600">{flight.departure} - {flight.arrival}</div>
                  <div className="text-gray-500">{flight.price}$</div>
                </div>
                <div className="text-sm text-gray-500">{flight.duration}</div>
                <button onClick={() => deleteMyFlight(flight._id)} className="text-red-500">Delete</button>
              </div>
             
            </div>
          ))}
        </div>
      );
}

export default MyFlights