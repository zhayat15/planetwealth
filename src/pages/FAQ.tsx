import React, { useState } from 'react';
import { ChevronRight, Search, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'services', name: 'Our Services' },
    { id: 'process', name: 'Process & Consultation' },
    { id: 'fees', name: 'Fees & Costs' },
    { id: 'compliance', name: 'Compliance & Regulation' },
    { id: 'insurance', name: 'Insurance' },
    { id: 'loans', name: 'Loans & Mortgages' }
  ];

  const faqs = [
    {
      category: 'services',
      question: 'What financial planning services do you offer?',
      answer: 'We provide comprehensive financial planning services including investment advice, retirement planning, superannuation strategies, insurance advice, estate planning, and tax-effective strategies. Our goal is to help you achieve financial independence through personalized strategies tailored to your unique circumstances.'
    },
    {
      category: 'services',
      question: 'Do you help with Self-Managed Super Funds (SMSF)?',
      answer: 'Yes, we specialize in SMSF services including establishment, ongoing compliance, investment strategy development, and administration. We can help you determine if an SMSF is right for you and provide complete setup and management services.'
    },
    {
      category: 'process',
      question: 'What happens during the initial consultation?',
      answer: 'Your free initial consultation is a 60-minute session where we discuss your financial goals, current situation, and challenges. We\'ll explain how we can help and provide an overview of our services. There\'s no obligation, and we\'ll only recommend services that align with your needs.'
    },
    {
      category: 'process',
      question: 'How long does it take to develop a financial plan?',
      answer: 'Typically, we can develop a comprehensive financial plan within 2-3 weeks after your initial consultation. This includes time for research, strategy development, and preparation of your personalized financial roadmap. Complex situations may require additional time.'
    },
    {
      category: 'fees',
      question: 'How much do your services cost?',
      answer: 'Our fee structure is transparent and varies depending on the complexity of your needs. Initial consultations are always free. We offer both fee-for-service and ongoing advisory arrangements. All fees are discussed upfront with no hidden costs or surprises.'
    },
    {
      category: 'fees',
      question: 'Do you charge for initial consultations?',
      answer: 'No, all initial consultations are completely free with no obligation. This allows you to understand our services and how we can help before making any commitment. We believe in building relationships based on trust and value.'
    },
    {
      category: 'compliance',
      question: 'Are you licensed and regulated?',
      answer: 'Yes, we are fully licensed by ASIC (Australian Securities and Investments Commission) and adhere to all industry regulations. We maintain comprehensive professional indemnity insurance and follow strict compliance procedures to protect our clients\' interests.'
    },
    {
      category: 'compliance',
      question: 'How do you protect my personal information?',
      answer: 'We take privacy seriously and comply with the Privacy Act 1988. All personal information is encrypted, securely stored, and only used for the purposes of providing financial advice. We never share your information with third parties without your consent.'
    },
    {
      category: 'insurance',
      question: 'What types of insurance do you recommend?',
      answer: 'We assess your individual needs and may recommend life insurance, income protection, total and permanent disability (TPD) cover, or trauma insurance. The right insurance depends on your personal circumstances, family situation, and financial obligations.'
    },
    {
      category: 'insurance',
      question: 'Can you help me review my existing insurance?',
      answer: 'Absolutely. We provide comprehensive insurance reviews to ensure your coverage is adequate and cost-effective. We can compare your current policies with market alternatives and recommend improvements or consolidations where appropriate.'
    },
    {
      category: 'loans',
      question: 'Do you help with home loan applications?',
      answer: 'Yes, we provide comprehensive home loan services including pre-approval, loan applications, refinancing, and investment property loans. We work with multiple lenders to find competitive rates and terms that suit your situation.'
    },
    {
      category: 'loans',
      question: 'Can you help me refinance my existing mortgage?',
      answer: 'Definitely. We regularly help clients save thousands through strategic refinancing. We\'ll analyze your current loan, compare it with market alternatives, and handle the entire refinancing process if a better option is available.'
    },
    {
      category: 'process',
      question: 'How often will we review my financial plan?',
      answer: 'We recommend annual reviews as a minimum, but the frequency depends on your needs and chosen service level. Major life changes such as marriage, children, job changes, or inheritance may trigger additional reviews to ensure your strategy remains optimal.'
    },
    {
      category: 'services',
      question: 'Do you work with young professionals and families?',
      answer: 'Absolutely. We work with clients at all life stages, from young professionals starting their financial journey to families building wealth and retirees preserving capital. Our strategies are tailored to your current situation and future goals.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our financial advisory services, 
              processes, and how we can help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between list-none">
                    <span className="text-lg">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                  </summary>
                  <div className="mt-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-6">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our friendly team is here to help. 
            Contact us directly or book a free consultation to speak with one of our expert advisors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:1300004254" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                1300 004 254
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@planetwealth.com.au" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                info@planetwealth.com.au
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Start Chat Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;