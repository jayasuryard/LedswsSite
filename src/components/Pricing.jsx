import { useState } from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for solopreneurs just getting started.',
      monthlyPrice: 29,
      launchPrice: 0,
      launchNote: 'Free during beta',
      features: [
        '1 Business workspace',
        '500 leads/month',
        'Unified Inbox',
        'Lead CRM Pipeline',
        'Basic Email Campaigns',
        'Lead Forms (3)',
        'Community support',
      ],
      cta: 'Join Beta Free',
      popular: false,
      available: true,
    },
    {
      name: 'Growth',
      description: 'For growing businesses ready to scale.',
      monthlyPrice: 79,
      launchPrice: 39,
      launchNote: '50% off for founding members',
      features: [
        '3 Business workspaces',
        '5,000 leads/month',
        'Everything in Starter, plus:',
        'Advanced Email Automation',
        'Social Media Scheduling',
        'Lead Scoring',
        'Business Analytics',
        'Priority support',
      ],
      cta: 'Get Founding Member Deal',
      popular: true,
      available: true,
    },
    {
      name: 'Pro',
      description: 'For agencies and power users.',
      monthlyPrice: 199,
      launchPrice: null,
      launchNote: 'Coming soon',
      features: [
        'Unlimited workspaces',
        'Unlimited leads',
        'Everything in Growth, plus:',
        'AI Content Studio',
        'White-label options',
        'Advanced Integrations',
        'Custom reporting',
        'Dedicated support',
        'API access',
      ],
      cta: 'Join Waitlist',
      popular: false,
      available: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
            Early Access Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lock in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              founding member
            </span>{' '}
            pricing
          </h2>
          <p className="text-lg text-gray-600">
            Join during beta and keep your discounted rate forever. Prices will increase at public launch.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-amber-800">Founding Member Benefits</p>
              <p className="text-sm text-amber-700">Locked-in pricing + Early access + Priority support</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-teal-500 shadow-xl shadow-teal-500/10 scale-105 z-10'
                  : 'border border-gray-200 hover:border-teal-200 hover:shadow-xl'
              } ${!plan.available ? 'opacity-75' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    Best Value
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.launchPrice !== null ? (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                        ${plan.launchPrice}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-400 line-through">
                        ${plan.monthlyPrice}/month
                      </span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {plan.launchNote}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-400">
                        ${plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="mt-2">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                        {plan.launchNote}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.available ? 'text-teal-500' : 'text-gray-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${feature.includes('Everything in') ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#early-access"
                className={`block w-full py-4 text-center font-semibold rounded-xl transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 shadow-lg shadow-teal-500/30'
                    : plan.available
                    ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-sm">No credit card for beta</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
