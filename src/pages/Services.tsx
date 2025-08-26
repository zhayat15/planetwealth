import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Home as HomeIcon, 
  CreditCard, 
  Heart, 
  PiggyBank,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Financial Planning",
      description: "Comprehensive financial strategies tailored to your unique goals, lifestyle, and circumstances.",
      features: [
        "Personal financial assessment",
        "Goal-based planning strategies",
        "Investment portfolio management",
        "Tax-effective strategies",
        "Regular progress reviews"
      ],
      benefits: "Create a clear roadmap to financial independence and peace of mind for your future."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "SMSF Services",
      description: "Expert self-managed super fund setup, compliance, and ongoing management services.",
      features: [
        "SMSF establishment and setup",
        "Compliance and administration",
        "Investment strategy development",
        "Tax and audit coordination",
        "Pension phase transitions"
      ],
      benefits: "Take control of your superannuation with professional guidance and maximum flexibility."
    },
    {
      icon: <HomeIcon className="w-12 h-12" />,
      title: "Home Loan Specialist",
      description: "Find the perfect home loan with competitive rates, flexible terms, and expert guidance.",
      features: [
        "First home buyer assistance",
        "Investment property loans",
        "Construction and land loans",
        "Low deposit loan options",
        "Pre-approval services"
      ],
      benefits: "Secure your dream home with the right loan structure and competitive interest rates."
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Mortgage Consulting",
      description: "Optimize your existing mortgage through refinancing and strategic restructuring.",
      features: [
        "Refinancing opportunities",
        "Loan restructuring strategies",
        "Rate negotiation services",
        "Debt consolidation options",
        "Equity release strategies"
      ],
      benefits: "Save thousands in interest and improve your cash flow with smarter mortgage strategies."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Personal Insurance",
      description: "Protect your family and assets with comprehensive insurance solutions tailored to your needs.",
      features: [
        "Life insurance coverage",
        "Income protection insurance",
        "Total & permanent disability cover",
        "Trauma insurance options",
        "Business insurance solutions"
      ],
      benefits: "Ensure your loved ones are financially protected against life's unexpected events."
    },
    {
      icon: <PiggyBank className="w-12 h-12" />,
      title: "Retirement Planning",
      description: "Build a secure retirement with smart investment strategies and comprehensive planning.",
      features: [
        "Retirement income projections",
        "Superannuation optimization",
        "Transition to retirement strategies",
        "Pension planning services",
        "Age care financial planning"
      ],
      benefits: "Enjoy a comfortable retirement with confidence and financial security."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Financial Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions designed to help you build wealth, protect your assets, 
              and secure your financial future with expert guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <p className="text-gray-700">
                      <strong>Key Benefit:</strong> {service.benefits}
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 text-center">
                      <div className="text-blue-600 mb-4 flex justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">Book a free consultation to discuss your specific needs.</p>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                        Book Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every client receives personalized attention and expert guidance through our proven process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free 60-minute consultation to understand your goals and current situation."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Our experts create a customized strategy tailored to your specific needs."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We help you implement the strategy with ongoing support and guidance."
              },
              {
                step: "04",
                title: "Regular Reviews",
                description: "Ongoing monitoring and adjustments to keep you on track for success."
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Planet Wealth?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to your financial success with transparent advice and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "15+ years combined experience in financial planning and wealth management."
              },
              {
                title: "Client-First Approach",
                description: "Your interests always come first with transparent, fee-based advice."
              },
              {
                title: "Comprehensive Service",
                description: "Complete financial solutions under one roof for your convenience."
              },
              {
                title: "Ongoing Support",
                description: "Regular reviews and adjustments to keep your strategy on track."
              },
              {
                title: "Local Knowledge",
                description: "Deep understanding of Melbourne market conditions and opportunities."
              },
              {
                title: "Proven Results",
                description: "500+ satisfied clients with a 4.9/5 average satisfaction rating."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how our expert financial advice 
            can help you achieve your goals faster and with greater confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book Free Consultation
            </button>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Request Call Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;