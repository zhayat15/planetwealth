import React from 'react';
import { Users, Award, Shield, TrendingUp, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Integrity",
      description: "We operate with complete transparency and always put our clients' interests first."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description: "Every strategy we create is personalized to your unique financial situation and goals."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Our team brings decades of combined experience in financial planning and wealth management."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Long-term Relationships",
      description: "We're committed to supporting you throughout your entire financial journey."
    }
  ];

  const achievements = [
    "500+ satisfied clients across Melbourne",
    "Over $50 million in funds under management",
    "15+ years of combined industry experience",
    "4.9/5 average client satisfaction rating",
    "Fully licensed and ASIC regulated",
    "Comprehensive professional indemnity insurance"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Planet Wealth</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              Melbourne's trusted financial advisory firm, dedicated to helping families and individuals 
              achieve their financial goals through expert guidance and personalized strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a simple mission: to make quality financial advice accessible to every Melbourne family. 
                  We recognized that many people felt overwhelmed by complex financial products and struggled to find 
                  trustworthy guidance that truly had their best interests at heart.
                </p>
                <p>
                  Over the years, we've built our reputation on transparency, integrity, and results. Our team of 
                  experienced advisors has helped hundreds of clients navigate everything from first home purchases 
                  to retirement planning, always with a focus on long-term relationships and personalized service.
                </p>
                <p>
                  Today, Planet Wealth is recognized as one of Melbourne's leading financial advisory firms, 
                  but we've never lost sight of our core values: putting clients first, providing honest advice, 
                  and building lasting relationships based on trust and results.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">$50M+</div>
                  <div className="text-sm text-gray-600">Funds Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">4.9★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white">
              <Award className="w-12 h-12 text-yellow-200 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Licensed & Regulated</h3>
              <p className="text-yellow-100 mb-6">
                We are fully licensed by ASIC and adhere to the highest industry standards. 
                Our comprehensive professional indemnity insurance provides additional peace of mind for our clients.
              </p>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-sm text-yellow-100">Australian Securities and Investments Commission</div>
                <div className="font-bold text-yellow-200">ASIC Regulated Financial Advisor</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Planet Wealth?</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book Your Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced financial advisors are committed to helping you achieve your financial goals 
              through expert guidance and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 h-48 flex items-center justify-center">
                  <Users className="w-20 h-20 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Financial Advisor</h3>
                  <p className="text-yellow-600 font-semibold mb-3">15+ Years Experience</p>
                  <p className="text-gray-600 text-sm">
                    Specializing in comprehensive financial planning, retirement strategies, and wealth management 
                    for Melbourne families and professionals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that personalized financial advice can make. 
            Book your free consultation today and discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Free Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn About Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;