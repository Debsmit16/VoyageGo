import React from 'react';
import { Plane, Menu, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Header() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TravelCraft</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/destinations" className="text-gray-700 hover:text-blue-600">Destinations</Link>
            <Link to="/customize" className="text-gray-700 hover:text-blue-600">Customize</Link>
            <Link to="/deals" className="text-gray-700 hover:text-blue-600">Deals</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
                  <User className="h-5 w-5 text-gray-600" />
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <LogOut className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Sign In
              </Link>
            )}
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}