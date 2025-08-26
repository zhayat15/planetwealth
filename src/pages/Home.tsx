import React from 'react';
import { Link } from 'react-router-dom';
import { useCMSContent } from '../hooks/useCMSContent';
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
  MessageCircle,
  ArrowRight,
  PlayCircle,
  Clock,
  MapPin,
  Zap,
  Target,
  TrendingDown,
  DollarSign,
  Calendar
} from 'lucide-react';

const Home = () => {
  const { content, loading } = useCMSContent();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Planet Wealth...</p>
        </div>
      </div>
    );
  }

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Planning",
      description: "Comprehensive financial strategies tailored to your goals and lifestyle.",
      link: "/services",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SMSF Services",
      description: "Expert self-managed super fund setup, compliance and ongoing management.",
      link: "/services",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Home Loan Specialist",
      description: "Find the perfect home loan with competitive rates and flexible terms.",
      link: "/services",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Mortgage Consulting",
      description: "Refinancing and mortgage optimization to save you thousands.",
      link: "/services",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Insurance",
      description: "Protect your family and assets with comprehensive insurance solutions.",
      link: "/services",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Retirement Planning",
      description: "Secure your retirement with smart investment and savings strategies.",
      link: "/services",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Book Your Free Consultation",
      description: "Schedule a no-obligation consultation with our expert financial advisors.",
      action: "Book Now",
      icon: <Phone className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Personalised Financial Roadmap",
      description: "Receive a customized financial plan designed specifically for your goals.",
      action: "Learn More",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Achieve Your Financial Goals",
      description: "Implement your strategy with ongoing support and regular reviews.",
      action: "Get Started",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
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

  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      location: "Melbourne",
      text: "Planet Wealth helped us secure our dream home with an exceptional mortgage rate. Their expertise and personalized service made the entire process smooth and stress-free.",
      rating: 5,
      service: "Home Loans"
    },
    {
      name: "David Chen",
      location: "Glen Waverley",
      text: "The investment strategy advice was spot-on. I'm now building wealth while someone else pays off my mortgage. Couldn't be happier with the results.",
      rating: 5,
      service: "Investment Planning"
    },
    {
      name: "Jennifer Wilson",
      location: "Brighton",
      text: "We can now retire comfortably knowing our financial future is secure. The peace of mind Planet Wealth provided is invaluable.",
      rating: 5,
      service: "Retirement Planning"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section with Animation */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white border-opacity-20">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Melbourne's #1 Financial Advisory
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                {content.homepage.heroTitle}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed text-blue-100">
                {content.homepage.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Our Story
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  ASIC Licensed
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  500+ Happy Clients
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  4.9/5 Rating
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              {/* Modern Dashboard Card */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-blue-500/20 hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Performance Dashboard</h3>
                      <p className="text-blue-200 text-sm">Real-time metrics</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">LIVE</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {/* Clients Metric */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Users className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-xs text-green-400 font-medium">+12%</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
                        {content.homepage.heroStats.clients}
                      </div>
                      <div className="text-blue-200 text-sm">Happy Clients</div>
                      <div className="w-full bg-blue-900/50 rounded-full h-1 mt-3">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1 rounded-full w-4/5"></div>
                      </div>
                    </div>

                    {/* Funds Metric */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <DollarSign className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="text-xs text-green-400 font-medium">+8%</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
                        {content.homepage.heroStats.fundsManaged}
                      </div>
                      <div className="text-blue-200 text-sm">Funds Managed</div>
                      <div className="w-full bg-green-900/50 rounded-full h-1 mt-3">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-1 rounded-full w-5/6"></div>
                      </div>
                    </div>

                    {/* Experience Metric */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Award className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="text-xs text-blue-400 font-medium">Stable</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
                        {content.homepage.heroStats.experience}
                      </div>
                      <div className="text-blue-200 text-sm">Years Experience</div>
                      <div className="w-full bg-purple-900/50 rounded-full h-1 mt-3">
                        <div className="bg-gradient-to-r from-purple-400 to-indigo-500 h-1 rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Rating Metric */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                          <Star className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="text-xs text-green-400 font-medium">Excellent</div>
                      </div>
                      <div className="flex items-center mb-1">
                        <div className="text-3xl font-bold text-white mr-2 group-hover:scale-105 transition-transform">
                          {content.homepage.heroStats.rating}
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="text-blue-200 text-sm">Client Rating</div>
                      <div className="w-full bg-yellow-900/50 rounded-full h-1 mt-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group">
                      <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Book Consultation
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center group">
                      <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              <span className="font-semibold">Limited Time: Free Financial Health Check Worth $500!</span>
            </div>
            <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Claim Now
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Comprehensive Financial Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Financial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you build wealth, protect your assets, and secure your financial future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-2 border border-gray-100 overflow-hidden relative`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full transform translate-x-16 -translate-y-16" style={{background: `linear-gradient(135deg, ${service.color})`}}></div>
                
                <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={service.iconColor}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Simple 3-Step Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven three-step process makes it easy to start your journey to financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center group relative z-10">
                {/* Connection Line to Next Step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-x-4"></div>
                )}
                
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-r ${step.color} text-white w-24 h-24 rounded-3xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:animate-bounce">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
                <button className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-2 transform duration-300">
                  {step.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4 mr-2" />
                Free Financial Tools
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Financial Calculators</h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Use our advanced financial calculators to estimate loan repayments, superannuation growth, and insurance premiums.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center group">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:translate-x-2 transition-transform">Loan Repayment Calculator</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:translate-x-2 transition-transform">Superannuation Growth Calculator</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:translate-x-2 transition-transform">Insurance Premium Estimator</span>
                </div>
              </div>
              
              <Link 
                to="/calculator"
                className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Try Our Calculators
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 p-3 rounded-2xl mr-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Quick Calculator</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-100">Loan Amount</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white border-0 focus:ring-2 focus:ring-yellow-400 transition-all" 
                    placeholder="500,000" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-100">Interest Rate (%)</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white border-0 focus:ring-2 focus:ring-yellow-400 transition-all" 
                      placeholder="3.5" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-100">Term (years)</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white border-0 focus:ring-2 focus:ring-yellow-400 transition-all" 
                      placeholder="30" 
                    />
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Calculate Repayments
                </button>
                
                <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">$2,108</div>
                  <div className="text-sm text-blue-100">Monthly Repayment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from satisfied clients who have achieved their financial goals with Planet Wealth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">{testimonial.rating}.0</span>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.service}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1] ? testimonial.name.split(' ')[1][0] : ''}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/success-stories"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Success Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Common Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our financial advisory services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between list-none group-hover:text-blue-600 transition-colors">
                  <span className="text-lg">{faq.question}</span>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-open:rotate-90 group-hover:text-blue-600 transition-all duration-300" />
                </summary>
                <div className="mt-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/faq"
              className="inline-flex items-center font-semibold text-lg text-blue-600 hover:text-blue-700 transition-colors group"
            >
              View All FAQs 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white border-opacity-20">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Ready to Transform Your Financial Future?
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Join hundreds of Melbourne families who trust Planet Wealth to help them achieve their financial goals. 
            Book your free consultation today and take the first step towards financial freedom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              Book Free Consultation
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Start Live Chat
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              ASIC Licensed & Regulated
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              500+ Satisfied Clients
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              4.9/5 Average Rating
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              $50M+ Funds Under Management
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;