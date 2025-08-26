import React, { useState } from 'react';
import { Calculator as CalculatorIcon, DollarSign, PiggyBank, Shield } from 'lucide-react';

const Calculator = () => {
  const [activeCalculator, setActiveCalculator] = useState('loan');
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [superBalance, setSuperBalance] = useState(100000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [superRate, setSuperRate] = useState(7);
  const [superYears, setSuperYears] = useState(20);
  const [age, setAge] = useState(35);
  const [coverage, setCoverage] = useState(500000);

  const calculateLoanRepayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      return loanAmount / numberOfPayments;
    }
    
    return loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  };

  const calculateSuperGrowth = () => {
    const monthlyRate = superRate / 100 / 12;
    const numberOfPayments = superYears * 12;
    
    // Future value of current balance
    const futureCurrentBalance = superBalance * Math.pow(1 + superRate / 100, superYears);
    
    // Future value of monthly contributions
    const futureContributions = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) / monthlyRate);
    
    return futureCurrentBalance + futureContributions;
  };

  const calculateInsurancePremium = () => {
    // Simplified insurance calculation based on age and coverage
    const baseRate = 0.001;
    const ageFactor = Math.max(1, age / 30);
    const coverageFactor = coverage / 100000;
    
    return baseRate * ageFactor * coverageFactor * coverage * 12;
  };

  const calculators = [
    {
      id: 'loan',
      title: 'Loan Repayment Calculator',
      icon: <DollarSign className="w-6 h-6" />,
      description: 'Calculate your monthly loan repayments'
    },
    {
      id: 'super',
      title: 'Superannuation Growth',
      icon: <PiggyBank className="w-6 h-6" />,
      description: 'Estimate your super balance at retirement'
    },
    {
      id: 'insurance',
      title: 'Insurance Premium Estimator',
      icon: <Shield className="w-6 h-6" />,
      description: 'Get an estimate of insurance costs'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CalculatorIcon className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl font-bold mb-6">Financial Calculators</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Use our comprehensive financial calculators to make informed decisions about loans, 
              superannuation, and insurance. Get instant estimates to help plan your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Selection */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-6 rounded-lg text-left transition-all duration-300 ${
                  activeCalculator === calc.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`mr-3 ${activeCalculator === calc.id ? 'text-yellow-400' : 'text-blue-600'}`}>
                    {calc.icon}
                  </div>
                  <h3 className="font-semibold">{calc.title}</h3>
                </div>
                <p className={`text-sm ${activeCalculator === calc.id ? 'text-blue-100' : 'text-gray-500'}`}>
                  {calc.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loan Calculator */}
          {activeCalculator === 'loan' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Loan Repayment Calculator</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount ($)
                    </label>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      step="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate (% per annum)
                    </label>
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      max="20"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Term (years)
                    </label>
                    <input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                      max="40"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ${calculateLoanRepayment().toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-gray-600">Monthly Repayment</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        ${(calculateLoanRepayment() * loanTerm * 12).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-gray-600">Total Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        ${((calculateLoanRepayment() * loanTerm * 12) - loanAmount).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-gray-600">Total Interest</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Get Professional Loan Advice
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Super Calculator */}
          {activeCalculator === 'super' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Superannuation Growth Calculator</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Super Balance ($)
                    </label>
                    <input
                      type="number"
                      value={superBalance}
                      onChange={(e) => setSuperBalance(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      step="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Contributions ($)
                    </label>
                    <input
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      step="50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Annual Return (%)
                    </label>
                    <input
                      type="number"
                      value={superRate}
                      onChange={(e) => setSuperRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      max="15"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years Until Retirement
                    </label>
                    <input
                      type="number"
                      value={superYears}
                      onChange={(e) => setSuperYears(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                      max="40"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Retirement Balance</h3>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ${calculateSuperGrowth().toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-gray-600">Projected Super Balance</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        ${(monthlyContribution * superYears * 12).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-gray-600">Total Contributions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        ${(calculateSuperGrowth() - superBalance - (monthlyContribution * superYears * 12)).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-gray-600">Growth</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Optimize Your Super Strategy
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Insurance Calculator */}
          {activeCalculator === 'insurance' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance Premium Estimator</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Age
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="18"
                      max="80"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coverage Amount ($)
                    </label>
                    <input
                      type="number"
                      value={coverage}
                      onChange={(e) => setCoverage(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="50000"
                      step="50000"
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Coverage Options</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Life Insurance</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Total & Permanent Disability</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Income Protection</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Trauma Insurance</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Estimated Premium</h3>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      ${calculateInsurancePremium().toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-gray-600">Annual Premium Estimate</div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        ${(calculateInsurancePremium() / 12).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Premium</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> This is an estimate only. Actual premiums depend on your health, 
                    occupation, lifestyle, and other factors. We recommend a personalized quote.
                  </p>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Get Personalized Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Professional Financial Advice?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            While our calculators provide helpful estimates, nothing replaces personalized financial advice. 
            Book a free consultation to discuss your specific financial situation and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Free Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Speak with an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;