import React from 'react';
import { BookOpen, Download, TrendingUp, Shield, PiggyBank, Calculator, FileText, ExternalLink } from 'lucide-react';

const Resources = () => {
  const guides = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "First Home Buyer's Guide",
      description: "Everything you need to know about buying your first home in Melbourne, from deposits to settlement.",
      type: "PDF Guide",
      size: "2.3 MB"
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Superannuation Handbook", 
      description: "Comprehensive guide to maximizing your super including salary sacrifice strategies and investment options.",
      type: "PDF Guide",
      size: "1.8 MB"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Planning Checklist",
      description: "Step-by-step checklist to ensure you have the right insurance coverage for your family.",
      type: "PDF Checklist", 
      size: "950 KB"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Strategy Workbook",
      description: "Interactive workbook to help you define your investment goals and risk tolerance.",
      type: "PDF Workbook",
      size: "3.1 MB"
    }
  ];

  const articles = [
    {
      title: "5 Essential Financial Planning Steps for Young Professionals",
      excerpt: "Starting your financial journey early can make a huge difference. Learn the key steps every young professional should take.",
      readTime: "8 min read",
      category: "Financial Planning"
    },
    {
      title: "Understanding Melbourne's Property Market in 2025", 
      excerpt: "Current trends, predictions, and what it means for home buyers and investors in Melbourne.",
      readTime: "12 min read",
      category: "Property Investment"
    },
    {
      title: "SMSF vs Industry Super: Which is Right for You?",
      excerpt: "Compare the benefits and considerations of self-managed super funds versus industry funds.",
      readTime: "10 min read", 
      category: "Superannuation"
    },
    {
      title: "Tax-Effective Investment Strategies for 2025",
      excerpt: "Maximize your after-tax returns with these proven investment strategies and tax planning techniques.", 
      readTime: "15 min read",
      category: "Tax Planning"
    }
  ];

  const tools = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Loan Repayment Calculator",
      description: "Calculate your monthly loan repayments with different interest rates and terms.",
      action: "Use Calculator"
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Superannuation Growth Calculator",
      description: "See how your super balance could grow with different contribution strategies.",
      action: "Try Now"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Premium Estimator",
      description: "Get an estimate of insurance premiums based on your age and coverage needs.",
      action: "Get Estimate"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl font-bold mb-6">Financial Resources</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of financial guides, calculators, and educational content 
              to help you make informed decisions about your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Financial Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive guides to help you navigate your financial journey with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">{guide.type}</span>
                        {guide.size}
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Tools & Calculators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our interactive calculators to estimate repayments, growth projections, and insurance costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                  {tool.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights & Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest financial insights, market updates, and expert advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Read More <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our compliance documents and important legal information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Financial Services Guide",
                description: "Learn about our services, fees, and how we're authorized to help you.",
                link: "/financial-services-guide"
              },
              {
                title: "Credit Guide", 
                description: "Important information about our credit assistance services and responsibilities.",
                link: "/credit-guide"
              },
              {
                title: "Privacy Policy",
                description: "How we collect, use, and protect your personal information.",
                link: "/privacy-policy"
              },
              {
                title: "Terms & Conditions",
                description: "Terms governing the use of our website and services.",
                link: "/terms-conditions"
              }
            ].map((doc, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                <a 
                  href={doc.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
                >
                  View Document <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Personalized Advice?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            While our resources are helpful, nothing replaces personalized financial advice. 
            Book your free consultation to discuss your specific situation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Free Consultation
            </button>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;