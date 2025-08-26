import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const StickyElements = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* WhatsApp & Live Chat Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/61300004254?text=Hi, I'd like to learn more about your financial advisory services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.325"/>
          </svg>
        </a>

        {/* Live Chat Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          style={{backgroundColor: '#d4a255'}}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#c68a3f'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#d4a255'}
          title="Start Live Chat"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Call Back Button (Mobile) */}
        <button 
          className="md:hidden text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          style={{backgroundColor: '#ecc896'}}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e2ad6a'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ecc896'}
        >
          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Live Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center md:justify-end md:pr-6 md:pb-6">
          <div className="bg-white w-full md:w-96 h-96 md:h-[500px] md:rounded-lg shadow-2xl flex flex-col">
            {/* Chat Header */}
            <div className="text-white p-4 flex justify-between items-center md:rounded-t-lg" style={{backgroundColor: '#d4a255'}}>
              <div>
                <h3 className="font-semibold">Live Chat Support</h3>
                <p className="text-sm" style={{color: '#faf0e0'}}>We're here to help!</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 bg-gray-50">
              <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                <p className="text-sm text-gray-600">
                  👋 Hello! Welcome to Planet Wealth. How can we help you today?
                </p>
              </div>
              <div className="space-y-2">
                <button 
                  className="w-full text-left p-3 bg-white rounded-lg transition-colors text-sm"
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fdf8f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Book a free consultation
                </button>
                <button 
                  className="w-full text-left p-3 bg-white rounded-lg transition-colors text-sm"
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fdf8f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Learn about our services
                </button>
                <button 
                  className="w-full text-left p-3 bg-white rounded-lg transition-colors text-sm"
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fdf8f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Request a call back
                </button>
                <button 
                  className="w-full text-left p-3 bg-white rounded-lg transition-colors text-sm"
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fdf8f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Speak with an advisor
                </button>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{'--tw-ring-color': '#d4a255'}}
                  onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #d4a255`}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
                <button 
                  className="text-white px-4 py-2 rounded-lg transition-colors"
                  style={{backgroundColor: '#d4a255'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#c68a3f'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#d4a255'}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyElements;