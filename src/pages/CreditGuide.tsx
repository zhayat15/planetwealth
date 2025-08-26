import React from 'react';
import { CreditCard, Info, AlertCircle, CheckCircle, Phone, Mail } from 'lucide-react';

const CreditGuide = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CreditCard className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl font-bold mb-6">Credit Guide</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Important information about our credit assistance services, including our obligations 
              and your rights as a consumer.
            </p>
            <div className="mt-6 text-sm text-blue-200">
              Credit Guide Version 1.2 | Effective: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">About This Credit Guide</h3>
                  <p className="text-yellow-800">
                    This guide explains our credit assistance services and contains important information 
                    about your rights and our obligations under the National Consumer Credit Protection Act 2009.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Our Credit License</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Licensing Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Credit License:</strong> [Insert License Number]</li>
                    <li><strong>Licensed by:</strong> Australian Securities and Investments Commission (ASIC)</li>
                    <li><strong>License Type:</strong> Credit Representative</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Phone:</strong> 1300 004 254</li>
                    <li><strong>Email:</strong> credit@planetwealth.com.au</li>
                    <li><strong>Website:</strong> www.planetwealth.com.au</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Credit Assistance Services</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Can Help With</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Home loan applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Investment property loans
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Refinancing existing loans
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Construction loans
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Personal loans
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Car loans
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Business loans
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Credit card recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Our Credit Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600 text-sm">We assess your needs and financial situation to recommend suitable credit products.</p>
              </div>
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Application</h3>
                <p className="text-gray-600 text-sm">We help you complete applications and liaise with lenders on your behalf.</p>
              </div>
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Settlement</h3>
                <p className="text-gray-600 text-sm">We support you through to settlement and provide ongoing assistance as needed.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Commissions & Fees</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How We're Paid for Credit Services</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="mb-2"><strong>Upfront Commission:</strong> Typically 0.5% - 0.7% of the loan amount, paid by the lender</p>
                  <p className="text-sm text-gray-600">This does not increase the cost of your loan</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <p className="mb-2"><strong>Trail Commission:</strong> Ongoing payment (typically 0.1% - 0.3% annually) while the loan remains active</p>
                  <p className="text-sm text-gray-600">Helps us provide ongoing service and support</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights & Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Rights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Receive clear information about loan features and risks</li>
                  <li>• Have your complaints handled promptly</li>
                  <li>• Access external dispute resolution</li>
                  <li>• Receive a copy of your credit file</li>
                  <li>• Cancel contracts within cooling-off periods</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Responsibilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Provide accurate and complete information</li>
                  <li>• Inform us of any changes to your circumstances</li>
                  <li>• Consider whether credit is suitable for your needs</li>
                  <li>• Make repayments on time</li>
                  <li>• Read all documentation carefully</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Lender Panel</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                We work with a panel of reputable lenders to find you competitive loan options. 
                Our lender panel includes major banks, credit unions, and specialist lenders.
              </p>
              <p className="text-gray-700">
                <strong>Note:</strong> We don't work with every lender in the market. If you'd like a 
                complete list of our current lender panel, please contact us.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need More Information?</h3>
              <p className="text-gray-700 mb-6">
                If you have questions about our credit services or need clarification on any aspect 
                of this Credit Guide, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1300 004 254
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regulatory Notice */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-xl font-bold">Regulatory Notice</h3>
          </div>
          <p className="text-gray-300">
            Planet Wealth Financial Advisory Pty Ltd is licensed to provide credit assistance services. 
            For more information about our licensing and regulatory compliance, contact ASIC on 1300 300 630 
            or visit www.asic.gov.au
          </p>
        </div>
      </section>
    </div>
  );
};

export default CreditGuide;