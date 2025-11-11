import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-professional mb-2">{service.name}</h3>
        <p className="text-concrete-gray text-base">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;