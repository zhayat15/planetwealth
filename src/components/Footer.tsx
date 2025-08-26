import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Request callback section */}
      <div className="py-12" style={{backgroundColor: '#d4a255'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Take Control of Your Financial Future?</h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{color: '#fdf8f0'}}>
              Book your free consultation today and let our expert advisors create a personalized financial roadmap for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                style={{backgroundColor: '#ecc896'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e2ad6a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ecc896'}
              >
                Book Free Consultation
              </button>
              <button 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#d4a255';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Request Call Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg" style={{background: 'linear-gradient(to right, #d4a255, #c68a3f)'}}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="ml-3">
                  <div className="text-xl font-bold">Planet Wealth</div>
                  <div className="text-gray-400 text-sm">Financial Advisory</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted financial advisors in Melbourne, helping you achieve financial freedom through personalized planning and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Financial Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financial Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SMSF Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Loans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retirement Planning</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">
                    921 High Street Road<br />
                    Glen Waverley VIC 3150
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <a href="tel:1300004254" className="text-gray-400 hover:text-white transition-colors">
                    1300 004 254
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <a href="mailto:info@planetwealth.com.au" className="text-gray-400 hover:text-white transition-colors">
                    info@planetwealth.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Planet Wealth Financial Advisory. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/financial-services-guide" className="text-gray-400 hover:text-white transition-colors">
                Financial Services Guide
              </Link>
              <Link to="/credit-guide" className="text-gray-400 hover:text-white transition-colors">
                Credit Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;