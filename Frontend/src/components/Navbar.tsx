import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">PLANE SCAPE</div>
        <div className="flex space-x-6">
          <a href="/" className="text-gray-600">All Flights</a>
          <a href="/myFlights" className="text-gray-600">My Flights</a>
          <div className="text-gray-600">Jane Smith</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
