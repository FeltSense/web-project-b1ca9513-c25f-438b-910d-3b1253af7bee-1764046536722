'use client';

import { Check, Download } from 'lucide-react';

const features = [
  'Unlimited cloud storage',
  'Advanced AI analytics',
  'Priority 24/7 support',
  'Custom integrations',
  'Enterprise security',
  'Dedicated account manager',
  'API access',
  'Regular updates'
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your business, all in one plan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Plan</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-6xl font-bold">$29</span>
                <span className="text-2xl text-blue-100">/month</span>
              </div>
              <p className="mt-4 text-xl text-blue-100">Billed monthly, cancel anytime</p>
            </div>

            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-full p-1">
                      <Check className="text-blue-600" size={20} />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center px-8 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <Download size={24} />
                Get Started Now
              </a>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">256-bit</div>
              <div className="text-gray-600">SSL Encryption</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">SOC 2</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}