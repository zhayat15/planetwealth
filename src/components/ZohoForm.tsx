import React, { useState } from 'react';
import { Calendar, Send, User, Mail, Phone, MessageCircle } from 'lucide-react';

interface ZohoFormProps {
  formType?: 'consultation' | 'callback' | 'contact';
  className?: string;
}

const ZohoForm: React.FC<ZohoFormProps> = ({ formType = 'consultation', className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredTime: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, this would integrate with Zoho CRM API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would send data to Zoho CRM
      console.log('Form submitted to Zoho CRM:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const getFormConfig = () => {
    switch (formType) {
      case 'consultation':
        return {
          title: 'Book Your Free Consultation',
          subtitle: 'Schedule your 60-minute consultation with our expert advisors',
          submitText: 'Book Free Consultation',
          icon: <Calendar className="w-8 h-8" />
        };
      case 'callback':
        return {
          title: 'Request a Call Back',
          subtitle: 'We\'ll call you back within 24 hours',
          submitText: 'Request Call Back',
          icon: <Phone className="w-8 h-8" />
        };
      case 'contact':
        return {
          title: 'Get In Touch',
          subtitle: 'Send us a message and we\'ll respond promptly',
          submitText: 'Send Message',
          icon: <MessageCircle className="w-8 h-8" />
        };
    }
  };

  const config = getFormConfig();

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-lg p-8 text-center ${className}`}>
        <div className="text-green-500 mb-4 flex justify-center">
          <MessageCircle className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We've received your {formType === 'consultation' ? 'consultation booking' : 
          formType === 'callback' ? 'callback request' : 'message'} and will respond within 24 hours.
        </p>
        <button 
          onClick={() => {setIsSubmitted(false); setFormData({firstName: '', lastName: '', email: '', phone: '', service: '', preferredTime: '', message: '', consent: false});}}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Submit Another {formType === 'consultation' ? 'Booking' : formType === 'callback' ? 'Request' : 'Message'}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-lg">
        <div className="flex items-center">
          <div className="text-yellow-400 mr-3">
            {config.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold">{config.title}</h3>
            <p className="text-blue-100 text-sm">{config.subtitle}</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Smith"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0400 000 000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="financial-planning">Financial Planning</option>
              <option value="smsf">SMSF Services</option>
              <option value="home-loans">Home Loans</option>
              <option value="mortgage-consulting">Mortgage Consulting</option>
              <option value="insurance">Personal Insurance</option>
              <option value="retirement">Retirement Planning</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          {formType === 'consultation' && (
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Any time</option>
                <option value="morning">Morning (9am-12pm)</option>
                <option value="afternoon">Afternoon (12pm-5pm)</option>
                <option value="evening">Evening (5pm-8pm)</option>
              </select>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your financial goals or any specific questions you have..."
          />
        </div>

        <div className="mb-6">
          <label className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 mr-3"
            />
            <span className="text-sm text-gray-600">
              I consent to Planet Wealth contacting me regarding my inquiry and acknowledge that I have read and accept the 
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 ml-1">Privacy Policy</a> and 
              <a href="/terms-conditions" className="text-blue-600 hover:text-blue-700 ml-1">Terms & Conditions</a>.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.consent}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {config.submitText}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ZohoForm;