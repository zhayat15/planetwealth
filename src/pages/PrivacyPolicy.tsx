import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Your Privacy Rights</h3>
              <p className="text-blue-800">
                We are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contact details (name, email, phone, address)</li>
                <li>• Financial information (income, assets, liabilities)</li>
                <li>• Investment objectives and risk tolerance</li>
                <li>• Employment and family circumstances</li>
                <li>• Tax file numbers (where required)</li>
                <li>• Identification documents</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Lock className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Uses</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Provide financial advice and services</li>
                  <li>• Develop personalized financial strategies</li>
                  <li>• Maintain client relationships</li>
                  <li>• Comply with legal and regulatory requirements</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <Eye className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Send service updates and newsletters</li>
                  <li>• Respond to inquiries and feedback</li>
                  <li>• Provide ongoing client support</li>
                  <li>• Market relevant financial products</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing & Disclosure</h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                We may share your personal information with:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Required</span>
                  <span><strong>Product providers</strong> when arranging financial products on your behalf</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Required</span>
                  <span><strong>Legal and regulatory bodies</strong> when required by law</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Consent</span>
                  <span><strong>Professional service providers</strong> such as accountants or lawyers (with your consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">Consent</span>
                  <span><strong>Related entities</strong> within our corporate group (with your consent)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                We implement comprehensive security measures to protect your information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure servers with regular backups</li>
                  <li>• Limited access on a need-to-know basis</li>
                  <li>• Regular security audits and updates</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Physical security for paper records</li>
                  <li>• Staff training on privacy requirements</li>
                  <li>• Secure disposal of sensitive information</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Correction</h3>
                <p className="text-gray-700 text-sm">
                  You have the right to access and request correction of your personal information. 
                  Contact us if you believe any information we hold is inaccurate or incomplete.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Complaints Process</h3>
                <p className="text-gray-700 text-sm">
                  If you have concerns about how we handle your privacy, contact our Privacy Officer. 
                  We'll investigate and respond within 30 days.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Cookies & Website Analytics</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Our website uses cookies and analytics tools to improve user experience:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Essential cookies:</strong> Required for website functionality</li>
                <li>• <strong>Analytics cookies:</strong> Help us understand website usage</li>
                <li>• <strong>Marketing cookies:</strong> Used for targeted advertising (with consent)</li>
                <li>• <strong>Preference cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Third-Party Services</h2>
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                We use reputable third-party services to enhance our operations. These providers 
                have their own privacy policies and security measures:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Zoho CRM:</strong> Customer relationship management</li>
                <li>• <strong>Google Analytics:</strong> Website performance tracking</li>
                <li>• <strong>Email providers:</strong> Client communication</li>
                <li>• <strong>Cloud storage:</strong> Secure document storage</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Data Retention</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to provide our services 
                and comply with legal obligations. Generally, we keep client records for at least 7 years 
                after the end of our relationship, as required by ASIC regulations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Officer</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@planetwealth.com.au</p>
                <p><strong>Phone:</strong> 1300 004 254</p>
                <p><strong>Address:</strong> 921 High Street Road, Glen Waverley VIC 3150</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions About This Policy?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or how we handle your personal information, 
                please contact our Privacy Officer or book a consultation to discuss your concerns.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact Privacy Officer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;