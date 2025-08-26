import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

const GoogleMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Planet Wealth Office</h3>
            <p className="text-blue-100 text-sm">Visit us in Glen Waverley</p>
          </div>
        </div>
      </div>
      
      {/* Map Container */}
      <div className="relative h-80 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.7926406709944!2d145.1603!3d-37.8831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63f3a0d84e38f%3A0x5045675218ce840!2s921%20High%20St%20Rd%2C%20Glen%20Waverley%20VIC%203150!5e0!3m2!1sen!2sau!4v1635000000000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Planet Wealth Office Location"
        ></iframe>
        
        {/* Overlay for mobile tap protection */}
        <div className="absolute inset-0 pointer-events-none bg-transparent"></div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
            <p className="text-gray-600 text-sm">
              921 High Street Road<br />
              Glen Waverley VIC 3150<br />
              Australia
            </p>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;