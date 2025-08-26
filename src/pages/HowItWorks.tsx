import React from 'react';
import { Calendar, FileText, TrendingUp, CheckCircle, Phone, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Calendar className="w-12 h-12" />,
      title: "Book Your Free Consultation",
      description: "Schedule a no-obligation 60-minute consultation with our expert financial advisors. We'll discuss your goals, current financial situation, and how we can help you achieve financial success.",
      details: [
        "Free 60-minute consultation",
        "No obligation or pressure",
        "Available in-person or via video call",
        "Flexible appointment times",
        "Evening appointments available"
      ],
      action: "Book Free Consultation",
      highlight: "100% Free - No Hidden Costs"
    },
    {
      number: "02", 
      icon: <FileText className="w-12 h-12" />,
      title: "Receive Your Personalised Financial Roadmap",
      description: "Our advisors will create a comprehensive, customized financial strategy designed specifically for your unique circumstances, goals, and risk tolerance.",
      details: [
        "Comprehensive financial analysis",
        "Customized investment strategy",
        "Tax-effective planning recommendations", 
        "Insurance and protection review",
        "Clear action plan with timelines"
      ],
      action: "View Sample Plan",
      highlight: "Tailored Just For You"
    },
    {
      number: "03",
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Achieve Your Financial Goals",
      description: "Implement your strategy with ongoing support, regular reviews, and adjustments to ensure you stay on track to achieve your financial objectives.",
      details: [
        "Strategy implementation support",
        "Regular progress reviews",
        "Market update communications",
        "Plan adjustments as needed",
        "24/7 access to your advisor"
      ],
      action: "Get Started Today",
      highlight: "Ongoing Support Included"
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "15+ years of combined industry experience",
      icon: "🎓"
    },
    {
      title: "Personalized Approach", 
      description: "Every strategy tailored to your unique situation",
      icon: "👤"
    },
    {
      title: "Transparent Fees",
      description: "Clear, upfront pricing with no hidden costs",
      icon: "💰"
    },
    {
      title: "Ongoing Support",
      description: "Regular reviews and adjustments included",
      icon: "🤝"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our proven three-step process makes it easy to start your journey to financial success. 
              From your first free consultation to achieving your long-term goals, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                      {step.number}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">{step.title}</h2>
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mt-2">
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                    {step.action}
                  </button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 text-center">
                    <div className="text-blue-600 mb-6 flex justify-center">
                      {step.icon}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Step {step.number}</h3>
                      <div className="text-6xl font-bold text-blue-600 mb-2">{step.number}</div>
                      <p className="text-gray-600 text-sm">
                        {step.title.split(' ').slice(-2).join(' ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Process?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology has helped over 500 Melbourne families achieve their financial goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey Timeline</h2>
            <p className="text-xl text-gray-600">See what to expect in your first 90 days with Planet Wealth</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {[
                {
                  week: "Week 1",
                  title: "Free Consultation & Assessment", 
                  description: "Initial meeting, goal setting, and financial health check",
                  position: "left"
                },
                {
                  week: "Week 2-3",
                  title: "Strategy Development",
                  description: "Custom financial plan creation and option analysis",
                  position: "right"
                },
                {
                  week: "Week 4-6",
                  title: "Plan Presentation & Implementation",
                  description: "Review recommendations and begin implementation",
                  position: "left"
                },
                {
                  week: "Month 2-3",
                  title: "Strategy Execution & Monitoring",
                  description: "Ongoing support and initial progress tracking",
                  position: "right"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.position === 'right' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${item.position === 'right' ? 'pl-12' : 'pr-12'}`}>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="text-blue-600 font-bold text-sm mb-2">{item.week}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-blue-600 w-4 h-4 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions About Our Process</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How long does the initial consultation take?",
                answer: "Your free consultation typically lasts 60 minutes, giving us time to understand your situation and goals thoroughly."
              },
              {
                question: "What should I bring to my consultation?",
                answer: "Bring recent financial statements, super statements, insurance policies, and any investment documents. Don't worry if you don't have everything - we can work with what you have."
              },
              {
                question: "When will I see results from my financial plan?",
                answer: "While long-term wealth building takes time, you'll often see immediate benefits like improved cash flow, better insurance coverage, or tax savings within the first few months."
              },
              {
                question: "How often will we review my plan?",
                answer: "We conduct formal reviews annually, but we're always available for questions. We'll also proactively contact you if market conditions warrant plan adjustments."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 group shadow-md">
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between list-none">
                  {faq.question}
                  <CheckCircle className="w-5 h-5 text-blue-600 group-open:text-green-500 transition-colors" />
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Melbourne families who trust Planet Wealth to help them achieve their financial goals. 
            Your journey to financial freedom starts with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Request Call Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;