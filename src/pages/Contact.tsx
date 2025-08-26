import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';
import ZohoForm from '../components/ZohoForm';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Planet Wealth</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to take control of your financial future? Get in touch with our expert advisors 
              for a free consultation and personalized financial strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Speak directly with an advisor</p>
              <a 
                href="tel:1300004254" 
                className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
              >
                1300 004 254
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Send us your inquiry</p>
              <a 
                href="mailto:info@planetwealth.com.au" 
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                info@planetwealth.com.au
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-3">Chat with us online</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Start Chat Now
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Book Online</h3>
              <p className="text-gray-600 mb-3">Schedule your free consultation</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ZohoForm formType="contact" />
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Visit Our Office</h4>
                      <p className="text-gray-600">
                        921 High Street Road<br />
                        Glen Waverley VIC 3150
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:1300004254" className="text-gray-600 hover:text-blue-600 transition-colors">
                        1300 004 254
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@planetwealth.com.au" className="text-gray-600 hover:text-blue-600 transition-colors">
                        info@planetwealth.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:30 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-blue-600 mt-2">
                          *Evening appointments available by request
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our frequently asked questions or book a free consultation to speak directly with an advisor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View FAQs
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;