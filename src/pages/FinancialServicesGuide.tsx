import React from 'react';
import { FileText, Shield, DollarSign, AlertTriangle, Phone, Mail } from 'lucide-react';

const FinancialServicesGuide = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl font-bold mb-6">Financial Services Guide</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Important information about our financial services, including our credentials, 
              services, fees, and how we're authorized to help you.
            </p>
            <div className="mt-6 text-sm text-blue-200">
              FSG Version 2.1 | Effective: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">About This Document</h3>
              <p className="text-blue-800">
                This Financial Services Guide (FSG) is designed to help you understand our services and make informed decisions about whether to use our financial services.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Who We Are</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Planet Wealth Financial Advisory Pty Ltd</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2"><strong>ABN:</strong> [Insert ABN Number]</p>
                  <p className="text-gray-700 mb-2"><strong>AFSL:</strong> [Insert AFSL Number]</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> 921 High Street Road, Glen Waverley VIC 3150</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> 1300 004 254</p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> info@planetwealth.com.au</p>
                  <p className="text-gray-700 mb-2"><strong>Website:</strong> www.planetwealth.com.au</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Financial Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Advisory Services</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Personal financial planning advice</li>
                  <li>• Investment strategy development</li>
                  <li>• Retirement and superannuation planning</li>
                  <li>• Estate planning coordination</li>
                  <li>• Tax-effective investment strategies</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Services</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Self-Managed Super Fund (SMSF) setup</li>
                  <li>• Personal insurance recommendations</li>
                  <li>• Managed investment solutions</li>
                  <li>• Mortgage and loan facilitation</li>
                  <li>• Superannuation fund recommendations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We're Authorized</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Planet Wealth holds an Australian Financial Services License (AFSL) issued by the 
                Australian Securities and Investments Commission (ASIC), which authorizes us to provide 
                financial product advice and deal in financial products.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <p className="text-gray-700 mb-2"><strong>Licensed Activities:</strong></p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Provide general and personal financial product advice</li>
                  <li>• Deal in financial products as agent for clients</li>
                  <li>• Operate managed investment schemes</li>
                  <li>• Provide credit assistance services</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Our Fees</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fee Transparency Promise</h3>
                <p className="text-gray-700">
                  All fees are disclosed upfront before any service is provided. We believe in complete 
                  transparency with no hidden costs or surprise charges.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Initial Consultation</h4>
                  <div className="text-2xl font-bold text-green-600 mb-2">FREE</div>
                  <p className="text-gray-600 text-sm">60-minute comprehensive consultation with no obligation</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Financial Plan Development</h4>
                  <div className="text-lg font-bold text-blue-600 mb-2">Fee for Service</div>
                  <p className="text-gray-600 text-sm">Transparent pricing based on complexity and scope</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Ongoing Advisory</h4>
                  <div className="text-lg font-bold text-blue-600 mb-2">Annual Fee</div>
                  <p className="text-gray-600 text-sm">Ongoing support, reviews, and plan adjustments</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. How We're Remunerated</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                We may receive remuneration through:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Direct</span>
                  <span><strong>Client fees</strong> for advice and ongoing services</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Disclosed</span>
                  <span><strong>Commission payments</strong> from product providers (fully disclosed)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Optional</span>
                  <span><strong>Volume bonuses</strong> from preferred providers (passed to clients where possible)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Professional Indemnity Insurance</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Shield className="w-8 h-8 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Coverage Protection</h3>
                  <p className="text-gray-700 mb-4">
                    We maintain comprehensive professional indemnity insurance that covers our financial services. 
                    This insurance provides coverage for claims that may arise from our financial services and 
                    meets the requirements set by ASIC.
                  </p>
                  <p className="text-gray-700">
                    Our insurance coverage extends to work performed by representatives who no longer work for us, 
                    providing ongoing protection for our clients.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Complaints Resolution</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Internal Dispute Resolution</h3>
                <p className="text-gray-700 mb-4">
                  If you have a complaint about our services, please contact us first:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Complaints Officer:</strong> compliance@planetwealth.com.au</p>
                  <p><strong>Phone:</strong> 1300 004 254</p>
                  <p><strong>Response Time:</strong> We aim to resolve complaints within 30 days</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">External Dispute Resolution</h3>
                <p className="text-gray-700 mb-4">
                  If you're not satisfied with our response, you can lodge a complaint with:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Australian Financial Complaints Authority (AFCA)</strong></p>
                  <p>Website: www.afca.org.au</p>
                  <p>Email: info@afca.org.au</p>
                  <p>Phone: 1800 931 678 (free call)</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Important Disclaimers</h2>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Risk Warnings</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• All investments carry risk and may lose value</li>
                    <li>• Past performance is not indicative of future results</li>
                    <li>• You should consider your personal circumstances before acting on any advice</li>
                    <li>• Seek independent tax and legal advice where appropriate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Now that you understand our services and approach, we'd love to discuss how we can 
                help you achieve your financial goals. Book your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Our Team
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServicesGuide;