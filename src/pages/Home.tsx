import React from 'react';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import CustomizationPanel from '../components/CustomizationPanel';

const destinations = [
  {
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80',
    title: 'Tokyo, Japan',
    description: 'Experience the perfect blend of tradition and modernity in Japan\'s vibrant capital.',
    price: 1299,
    rating: 4.8
  },
  {
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    title: 'Paris, France',
    description: 'Discover the city of love with its iconic landmarks and world-renowned cuisine.',
    price: 1499,
    rating: 4.7
  },
  {
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    title: 'Santorini, Greece',
    description: 'Relax in the stunning white-washed villages overlooking the Aegean Sea.',
    price: 1699,
    rating: 4.9
  },
  {
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
    title: 'Bali, Indonesia',
    description: 'Immerse yourself in tropical paradise with pristine beaches and rich culture.',
    price: 999,
    rating: 4.6
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Craft Your Perfect Journey</h1>
            <p className="text-xl md:text-2xl mb-8">Customize every detail of your dream vacation</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4">
        <SearchBar />
        
        {/* Popular Destinations */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <DestinationCard key={index} {...dest} />
            ))}
          </div>
        </section>

        {/* Customization Section */}
        <section className="my-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personalize Your Experience</h2>
            <p className="text-gray-600 mb-6">
              Create your perfect trip by customizing every aspect of your journey. From accommodation preferences to dining experiences, make it uniquely yours.
            </p>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
              alt="Customization"
              className="rounded-lg shadow-lg"
            />
          </div>
          <CustomizationPanel />
        </section>
      </div>
    </div>
  );
}