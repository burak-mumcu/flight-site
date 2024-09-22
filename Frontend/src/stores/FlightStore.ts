import { create } from 'zustand';
import axios from 'axios';

export interface Flight {
    _id: string;
    departure: string;
    arrival: string;
    price: number;
    from: string;
    to: string;
    duration: string;
    date: string;
  }

interface FlightState {
  flights: Flight[];
  filteredFlights: Flight[];
  setFlights: (flights: Flight[]) => void;
  setFilteredFlights: (filteredFlights: Flight[]) => void;
  fetchFlights: () => Promise<void>;
}

export const useFlightStore = create<FlightState>((set) => ({
  flights: [],
  filteredFlights: [],
  setFlights: (flights: Flight[]) => set({ flights, filteredFlights: flights }),
  setFilteredFlights: (filteredFlights: Flight[]) => set({ filteredFlights }),
  fetchFlights : async () => {
    try {
      const response = await axios.get('http://localhost:7000/flights');
      if (response.status !== 200) throw new Error('Uçuş verileri alınamadı');
      set({ flights: response.data, filteredFlights: response.data });
    } catch (error) {
      console.error('Uçuş verileri yüklenirken hata oluştu:', error);
    }
  },
}));