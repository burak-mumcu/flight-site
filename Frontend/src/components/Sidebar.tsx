import React from 'react';
import car from '../assets/car.jpeg';
import hotel from '../assets/hotel.jpg';
import airplane from '../assets/airplane.jpg';

interface SidebarItem {
  id: number;
  title: string;
  imageUrl: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 1, title: 'Car Rentals', imageUrl: car },
  { id: 2, title: 'Hotels', imageUrl: hotel },
  { id: 3, title: 'Travel Packages', imageUrl: airplane },
];

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      {sidebarItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow">
          <img src={item.imageUrl} alt={item.title} className="rounded" />
          <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
