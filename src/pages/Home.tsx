import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Shield, 
  Home as HomeIcon, 
  CreditCard, 
  Heart, 
  PiggyBank, 
  Wallet,
  Star,
  CheckCircle,
  Calculator,
  Users,
  Award,
  ChevronRight,
  Phone,
  MessageCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Planning",
      description: "Comprehensive financial strategies tailored to your goals and lifestyle.",
      link: "/services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SMSF Services",
      description: "Expert self-managed super fund setup, compliance and ongoing management.",
      link: "/services"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Home Loan Specialist",
      description: "Find the perfect home loan with competitive rates and flexible terms.",
      link: "/services"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Mortgage Consulting",
      description: "Refinancing and mortgage optimization to save you thousands.",
      link: "/services"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Insurance",
      description: "Protect your family and assets with comprehensive insurance solutions.",
      link: "/services"
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Retirement Planning",
      description: "Secure your retirement with smart investment and savings strategies.",
      link: "/services"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Book Your Free Consultation",
      description: "Schedule a no-obligation consultation with our expert financial advisors.",
      action: "Book Now"
    },
    {
      number: "02",
      title: "Personalised Financial Roadmap",
      description: "Receive a customized financial plan designed specifically for your goals.",
      action: "Learn More"
    },
    {
      number: "03",
      title: "Achieve Your Financial Goals",
      description: "Implement your strategy with ongoing support and regular reviews.",
      action: "Get Started"
    }
  ];

  const faqs = [
    {
      question: "What does your financial planning process involve?",
      answer: "Our comprehensive process includes analyzing your current financial situation, identifying your goals, developing a customized strategy, and providing ongoing support to help you achieve financial success."
    },
    {
      question: "How much do your services cost?",
      answer: "We offer transparent fee structures tailored to your needs. Initial consultations are completely free, and we'll discuss our competitive rates during your appointment."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book online through our website, call us at 1300 004 254, or use our request callback feature. We offer flexible appointment times to suit your schedule."
    },
    {
      question: "Are you regulated and compliant?",
      answer: "Yes, we are fully licensed and regulated by ASIC. We adhere to all industry standards and maintain comprehensive professional indemnity insurance for your protection."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32" style={{background: 'linear-gradient(135deg, #d4a255 0%, #ecc896 50%, #f4dfc0 100%)'}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted
                <span className="block" style={{color: '#fdf8f0'}}>Financial Advisor</span>
                <span className="block">in Melbourne</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed" style={{color: '#faf0e0'}}>
                Take control of your financial future with expert guidance from Melbourne's most trusted financial advisory team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{backgroundColor: '#faf0e0', color: '#865a31'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4dfc0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#faf0e0'}
                >
                  Book a Free Consultation Now
                </button>
                <button 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#d4a255';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                  }}
                >
                  Request a Call Back
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{color: '#fdf8f0'}}>500+</div>
                    <div className="text-sm" style={{color: '#faf0e0'}}>Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{color: '#fdf8f0'}}>$50M+</div>
                    <div className="text-sm" style={{color: '#faf0e0'}}>Funds Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{color: '#fdf8f0'}}>15+</div>
                    <div className="text-sm" style={{color: '#faf0e0'}}>Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{color: '#fdf8f0'}}>4.9★</div>
                    <div className="text-sm" style={{color: '#faf0e0'}}>Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Financial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you build wealth, protect your assets, and secure your financial future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1">
                <div className="mb-4 transition-colors" style={{color: '#d4a255'}}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="font-semibold flex items-center transition-colors"
                  style={{color: '#d4a255'}}
                  onMouseEnter={(e) => e.target.style.color = '#c68a3f'}
                  onMouseLeave={(e) => e.target.style.color = '#d4a255'}
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven three-step process makes it easy to start your journey to financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div 
                    className="text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{background: 'linear-gradient(to right, #d4a255, #c68a3f)'}}
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 transform translate-x-10"
                      style={{background: 'linear-gradient(to right, #ecc896, transparent)'}}
                    ></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <button 
                  className="font-semibold transition-colors"
                  style={{color: '#d4a255'}}
                  onMouseEnter={(e) => e.target.style.color = '#c68a3f'}
                  onMouseLeave={(e) => e.target.style.color = '#d4a255'}
                >
                  {step.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Calculator Preview */}
      <section className="py-20 text-white" style={{backgroundColor: '#d4a255'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Financial Calculators</h2>
              <p className="text-xl mb-8" style={{color: '#faf0e0'}}>
                Use our advanced financial calculators to estimate loan repayments, superannuation growth, and insurance premiums.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{color: '#f4dfc0'}} />
                  <span>Loan Repayment Calculator</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{color: '#f4dfc0'}} />
                  <span>Superannuation Growth Calculator</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{color: '#f4dfc0'}} />
                  <span>Insurance Premium Estimator</span>
                </div>
              </div>
              <Link 
                to="/calculator"
                className="text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                style={{backgroundColor: '#ecc896'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e2ad6a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ecc896'}
              >
                Try Our Calculators
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 mr-3" style={{color: '#fdf8f0'}} />
                <h3 className="text-2xl font-bold">Quick Calculator</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg text-gray-900" placeholder="500,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg text-gray-900" placeholder="3.5" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Term (years)</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg text-gray-900" placeholder="30" />
                </div>
                <button 
                  className="w-full text-white py-3 rounded-lg font-semibold transition-colors"
                  style={{backgroundColor: '#ecc896'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e2ad6a'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#ecc896'}
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Melbourne Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about our financial advisory services and why they trust us with their financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Reviews */}
            <div>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="flex" style={{color: '#d4a255'}}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Planet Wealth helped us secure our dream home with an exceptional mortgage rate. Their expertise and personalized service made the entire process smooth and stress-free."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: '#fdf8f0'}}>
                        <Users className="w-5 h-5" style={{color: '#d4a255'}} />
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900">Sarah & Mike Johnson</div>
                        <div className="text-sm text-gray-600">Melbourne</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 mr-3" style={{color: '#d4a255'}} />
                  <h3 className="text-xl font-bold text-gray-900">Visit Our Office</h3>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <HomeIcon className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">921 High Street Road<br />Glen Waverley VIC 3150</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    className="flex-1 text-white py-2 px-4 rounded-lg transition-colors"
                    style={{backgroundColor: '#d4a255'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#c68a3f'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#d4a255'}
                  >
                    Get Directions
                  </button>
                  <button 
                    className="flex-1 border py-2 px-4 rounded-lg transition-colors"
                    style={{borderColor: '#d4a255', color: '#d4a255'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#fdf8f0'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our financial advisory services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between list-none">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/faq"
              className="font-semibold text-lg"
              style={{color: '#d4a255'}}
              onMouseEnter={(e) => e.target.style.color = '#c68a3f'}
              onMouseLeave={(e) => e.target.style.color = '#d4a255'}
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-white" style={{background: 'linear-gradient(to right, #865a31, #6e4a2a)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#faf0e0'}}>
            Join hundreds of Melbourne families who trust Planet Wealth to help them achieve their financial goals. 
            Book your free consultation today and take the first step towards financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              style={{backgroundColor: '#d4a255'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c68a3f'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#d4a255'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Free Consultation
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#865a31';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;