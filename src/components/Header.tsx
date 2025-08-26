import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-planet-gold-500 text-white py-2" style={{backgroundColor: '#d4a255'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:1300004254" className="flex items-center hover:text-planet-gold-200 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                1300 004 254
              </a>
              <a href="mailto:info@planetwealth.com.au" className="flex items-center hover:text-planet-gold-200 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@planetwealth.com.au
              </a>
            </div>
            <div className="hidden md:block">
              <span className="text-planet-gold-100">Melbourne's Trusted Financial Advisors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="p-3 rounded-xl" style={{background: 'linear-gradient(to right, #d4a255, #c68a3f)'}}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="ml-3">
              <div className="text-2xl font-bold" style={{color: '#d4a255'}}>Planet Wealth</div>
              <div className="text-sm text-gray-600">Financial Advisory</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'border-b-2' 
                    : 'text-gray-700'
                } py-2 px-1 text-sm font-medium transition-colors border-b-2 border-transparent`}
                style={location.pathname === item.path ? 
                  {color: '#d4a255', borderBottomColor: '#d4a255'} : 
                  {}}
                onMouseEnter={(e) => e.target.style.color = '#d4a255'}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/cms"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              title="Admin Login"
            >
              Admin
            </Link>
            <button 
              className="text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{background: 'linear-gradient(to right, #d4a255, #c68a3f)'}}
              onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #c68a3f, #a56f35)'}
              onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #d4a255, #c68a3f)'}
            >
              Request a Call Back
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700"
            onMouseEnter={(e) => e.target.style.color = '#d4a255'}
            onMouseLeave={(e) => e.target.style.color = '#374151'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  location.pathname === item.path
                    ? 'bg-planet-gold-50'
                    : 'text-gray-700 hover:bg-gray-50'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                style={location.pathname === item.path ? {color: '#d4a255'} : {}}
                onMouseEnter={(e) => e.target.style.color = '#d4a255'}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link 
                to="/cms"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center text-gray-700 hover:text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors mb-2"
              >
                Admin Login
              </Link>
              <button 
                className="w-full text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                style={{background: 'linear-gradient(to right, #d4a255, #c68a3f)'}}
              >
                Request a Call Back
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;