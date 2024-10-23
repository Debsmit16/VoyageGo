import React from 'react';
import { Heart, Star } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

export default function DestinationCard({ image, title, description, price, rating }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            Customize
          </button>
        </div>
      </div>
    </div>
  );
}