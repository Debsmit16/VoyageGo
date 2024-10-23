import React, { useState } from 'react';
import { Calendar, Clock, Utensils, Home, Plane, Car } from 'lucide-react';

export default function CustomizationPanel() {
  const [duration, setDuration] = useState(5);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Customize Your Trip</h2>
      
      <div className="space-y-6">
        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Calendar className="h-5 w-5 mr-2" />
            Trip Duration
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="1"
              max="30"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-gray-600 min-w-[4rem]">{duration} days</span>
          </div>
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Clock className="h-5 w-5 mr-2" />
            Pace Preference
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['Relaxed', 'Moderate', 'Fast-paced'].map((pace) => (
              <button
                key={pace}
                className="px-4 py-2 border rounded-md hover:bg-blue-50 hover:border-blue-500"
              >
                {pace}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Utensils className="h-5 w-5 mr-2" />
            Dining Preferences
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Local Cuisine', 'Fine Dining', 'Street Food', 'International'].map((pref) => (
              <button
                key={pref}
                className="px-4 py-2 border rounded-md hover:bg-blue-50 hover:border-blue-500"
              >
                {pref}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Home className="h-5 w-5 mr-2" />
            Accommodation Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Luxury Hotel', 'Boutique Hotel', 'Resort', 'Local Stay'].map((type) => (
              <button
                key={type}
                className="px-4 py-2 border rounded-md hover:bg-blue-50 hover:border-blue-500"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Plane className="h-5 w-5 mr-2" />
            Transportation
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['Private', 'Public', 'Mixed'].map((transport) => (
              <button
                key={transport}
                className="px-4 py-2 border rounded-md hover:bg-blue-50 hover:border-blue-500"
              >
                {transport}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200">
        Generate Custom Itinerary
      </button>
    </div>
  );
}