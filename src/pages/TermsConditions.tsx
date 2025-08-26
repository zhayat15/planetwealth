import React from 'react';
import { FileText, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully as they govern your use of our website and services.
            </p>
            <div className="mt-6 text-sm text-blue-200">
              Last updated: January 2025
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
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notice</h3>
                  <p className="text-yellow-800">
                    By accessing and using this website, you agree to be bound by these Terms and Conditions. 
                    If you do not agree with any part of these terms, please do not use our website or services.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. About These Terms</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                These Terms and Conditions ("Terms") govern your access to and use of the Planet Wealth website 
                and any services provided through this platform. Planet Wealth Financial Advisory Pty Ltd 
                (ABN: [Insert ABN]) operates this website from Melbourne, Victoria, Australia.
              </p>
              <p className="text-gray-700">
                These Terms should be read in conjunction with our Privacy Policy and Financial Services Guide.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use of Website</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Permitted Use</h3>
                  <p className="text-gray-700">You may use this website for lawful purposes related to obtaining information about our financial services.</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Prohibited Activities</h3>
                  <p className="text-gray-700">You must not use this website for any illegal activities, spam, or activities that could damage our reputation or systems.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Financial Services</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Disclaimers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Information on this website is general in nature and does not constitute personal financial advice</span>
                </li>
                <li className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>We recommend seeking personal financial advice before making any financial decisions</span>
                </li>
                <li className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Past performance is not indicative of future results</span>
                </li>
                <li className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All financial products carry risks, and you should consider your personal circumstances</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Consultation Booking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Free Consultation Terms</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Initial consultations are genuinely free</li>
                  <li>• No obligation to purchase services</li>
                  <li>• 60-minute session maximum</li>
                  <li>• Available in-person or via video call</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Conditions</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 24-hour cancellation notice required</li>
                  <li>• Rescheduling available with reasonable notice</li>
                  <li>• Valid contact information required</li>
                  <li>• Melbourne metropolitan area preferred</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Website Content & Intellectual Property</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                All content on this website, including text, images, graphics, logos, and software, 
                is owned by Planet Wealth or used under license. This content is protected by Australian 
                and international copyright laws.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• You may view and download content for personal use only</li>
                <li>• Commercial use requires written permission</li>
                <li>• Reproduction or distribution is prohibited without consent</li>
                <li>• Third-party content remains property of respective owners</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Important Limitations</h3>
              <p className="text-red-800 mb-4">
                To the maximum extent permitted by law, Planet Wealth excludes all liability for:
              </p>
              <ul className="space-y-2 text-red-800">
                <li>• Any loss or damage arising from use of this website</li>
                <li>• Interruptions or delays in website availability</li>
                <li>• Accuracy or completeness of information</li>
                <li>• Third-party content or external links</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. External Links</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                Our website may contain links to external websites. We are not responsible for the content, 
                privacy practices, or terms of use of external sites. We recommend reviewing the privacy 
                policy and terms of any external website before providing personal information.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Changes to Terms</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                We may update these Terms from time to time. Changes will be posted on this page with 
                an updated "Last Modified" date. Your continued use of the website after any changes 
                constitutes acceptance of the new Terms.
              </p>
              <p className="text-gray-700">
                We encourage you to review these Terms regularly to stay informed of any updates.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Australian Consumer Law</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, 
                or remedy available under the Australian Consumer Law or any other applicable law that 
                cannot be lawfully excluded, restricted, or modified.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Information</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@planetwealth.com.au</p>
                <p><strong>Phone:</strong> 1300 004 254</p>
                <p><strong>Address:</strong> 921 High Street Road, Glen Waverley VIC 3150</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
          <p className="text-blue-100 mb-6">
            Our team is happy to clarify any aspects of our terms and conditions.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;