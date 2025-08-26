import React from 'react';
import { Star, TrendingUp, Home as HomeIcon, Shield, Users, Quote, CheckCircle } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "Camberwell, VIC",
      category: "First Home Buyers",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "We thought buying our first home in Melbourne was impossible with rising prices. Planet Wealth helped us secure a fantastic loan with just 5% deposit and found us government grants we didn't even know existed.",
      results: [
        "Secured $650,000 home loan with 5% deposit",
        "Accessed $20,000 in first home buyer grants",
        "Saved $180 per month on repayments",
        "Purchased dream home in preferred suburb"
      ],
      testimonial: "The team at Planet Wealth made our dream of homeownership a reality. Their expertise and personal attention made all the difference.",
      rating: 5,
      service: "Home Loan Specialist"
    },
    {
      id: 2,
      name: "David Chen",
      location: "Glen Waverley, VIC",
      category: "Investment Property",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "As a young professional, I wanted to start building wealth through property investment. Planet Wealth structured my finances perfectly and helped me purchase my first investment property.",
      results: [
        "Purchased $580,000 investment property",
        "Achieved positive cash flow from day one",
        "Tax benefits saving $4,200 annually",
        "Property value increased 12% in first year"
      ],
      testimonial: "Their investment strategy advice was spot-on. I'm now building wealth while someone else pays off my mortgage.",
      rating: 5,
      service: "Investment Planning"
    },
    {
      id: 3,
      name: "Jennifer & Robert Wilson",
      location: "Brighton, VIC",
      category: "Retirement Planning",
      image: "https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Approaching retirement, we were worried about having enough money to maintain our lifestyle. Planet Wealth created a comprehensive plan that gave us confidence and peace of mind.",
      results: [
        "Optimized superannuation strategy",
        "Projected retirement income of $85,000/year",
        "Reduced tax liability by $8,500 annually",
        "Established emergency fund of $50,000"
      ],
      testimonial: "We can now retire comfortably knowing our financial future is secure. The peace of mind is invaluable.",
      rating: 5,
      service: "Retirement Planning"
    },
    {
      id: 4,
      name: "Amanda Rodriguez",
      location: "Richmond, VIC",
      category: "SMSF Setup",
      image: "https://images.pexels.com/photos/1587005/pexels-photo-1587005.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "I wanted more control over my superannuation investments. Planet Wealth set up my SMSF and taught me how to manage it effectively while staying compliant.",
      results: [
        "Successfully established SMSF",
        "Achieved 8.2% annual returns vs 5.1% industry fund",
        "Saved $2,400 in annual fees",
        "Full control over investment decisions"
      ],
      testimonial: "Having control over my super investments has been game-changing. The returns speak for themselves.",
      rating: 5,
      service: "SMSF Services"
    },
    {
      id: 5,
      name: "Mark & Lisa Johnson",
      location: "Hawthorn, VIC",
      category: "Mortgage Refinancing",
      image: "https://images.pexels.com/photos/1587011/pexels-photo-1587011.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Our mortgage rate was too high and we were struggling with repayments. Planet Wealth refinanced our loan and restructured our finances, saving us thousands.",
      results: [
        "Reduced interest rate from 4.2% to 2.8%",
        "Saving $420 per month on repayments",
        "Consolidated credit card debt",
        "Freed up $15,000 in equity for renovations"
      ],
      testimonial: "The refinancing process was seamless and the savings are incredible. We wish we'd done this sooner!",
      rating: 5,
      service: "Mortgage Consulting"
    },
    {
      id: 6,
      name: "Emma Thompson",
      location: "South Yarra, VIC",
      category: "Personal Insurance",
      image: "https://images.pexels.com/photos/1587007/pexels-photo-1587007.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "After a health scare, I realized I needed proper insurance coverage. Planet Wealth found me comprehensive coverage at a price I could afford, giving me and my family security.",
      results: [
        "$500,000 life insurance coverage",
        "$4,000/month income protection",
        "Saved 30% on premiums vs direct purchase",
        "Comprehensive trauma insurance included"
      ],
      testimonial: "Knowing my family is protected gives me such peace of mind. The coverage is excellent and affordable.",
      rating: 5,
      service: "Personal Insurance"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "$50M+", label: "Funds Managed" },
    { number: "4.9★", label: "Average Rating" },
    { number: "98%", label: "Client Retention" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-yellow-200" />
            <h1 className="text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              Real stories from real clients who achieved their financial goals with Planet Wealth. 
              See how our expert guidance has transformed lives across Melbourne.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-yellow-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results, Real People</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every client's journey is unique. Here are some of the success stories that make us proud 
              to be Melbourne's trusted financial advisors.
            </p>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div key={story.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    {story.service}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">{story.location} • {story.category}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-500">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">({story.rating}.0)</span>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {story.story}
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Results Achieved:</h4>
                    <ul className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 italic">"{story.testimonial}"</p>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="bg-yellow-500 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        Success Story
                      </div>
                      <h4 className="text-xl font-bold">{story.category}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Across All Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients achieve success across all areas of financial planning and wealth management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HomeIcon className="w-8 h-8" />,
                title: "Home Loans & First Home Buyers",
                count: "150+ Success Stories",
                description: "Helping Melbourne families secure their dream homes with competitive rates and expert guidance."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Investment & Wealth Building",
                count: "200+ Success Stories",
                description: "Building wealth through smart investment strategies and property portfolios."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Retirement & Superannuation",
                count: "100+ Success Stories",
                description: "Securing comfortable retirements through strategic planning and SMSF management."
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <div className="text-yellow-600 font-semibold mb-3">{category.count}</div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have achieved their financial goals with Planet Wealth. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Free Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Speak with an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;