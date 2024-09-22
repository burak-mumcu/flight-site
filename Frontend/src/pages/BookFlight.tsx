import React from 'react';
import FlightSearch from '../components/FlightSearch';
import FlightResults from '../components/FlightResults';
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';

const BookFlight: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 order-1">
          <FlightSearch />
          <FlightResults />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 order-3 lg:order-2">
          <Filter />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 order-2 lg:order-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default BookFlight;