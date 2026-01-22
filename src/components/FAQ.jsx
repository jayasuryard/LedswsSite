import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'When will LeadFlexUp officially launch?',
      answer: 'We\'re currently in closed beta with early access members. Our public launch is planned for Q2 2026. By joining now, you get early access to all features and lock in founding member pricing forever.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level 256-bit SSL encryption, store data in SOC 2 compliant data centers, and are fully GDPR compliant. Your data is yours—we never sell or share it with third parties.',
    },
    {
      question: 'Can I manage multiple businesses?',
      answer: 'Yes! LeadFlexUp is built for multi-business management. Each business gets its own isolated workspace with separate leads, campaigns, and analytics. Perfect for agencies or entrepreneurs with multiple ventures.',
    },
    {
      question: 'What integrations do you support?',
      answer: 'We\'re building integrations with popular tools including Stripe, Zapier, Google Workspace, Slack, and major social platforms. During beta, we\'re prioritizing integrations based on user feedback.',
    },
    {
      question: 'Do I need technical skills to use LeadFlexUp?',
      answer: 'Not at all! LeadFlexUp is designed for non-technical business owners. Our drag-and-drop interface, pre-built templates, and guided workflows make it easy to get started in minutes.',
    },
    {
      question: 'What\'s included in the beta/free plan?',
      answer: 'Beta users get full access to core features: Unified Inbox, CRM Pipeline, Email Campaigns, Lead Forms, and Analytics. Some advanced features are reserved for paid plans, but you\'ll have everything you need to capture and convert leads.',
    },
    {
      question: 'How does founding member pricing work?',
      answer: 'Early adopters who join during beta get up to 50% off our regular pricing—forever. Once you lock in your rate, it never increases, even as we add new features and raise prices for new users.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no questions asked. During beta, the Starter plan is completely free. We believe in earning your business every month.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about LeadFlexUp. Can't find an answer? Reach out to us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-teal-200 shadow-lg shadow-teal-500/5'
                  : 'border-gray-200 hover:border-teal-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? 'bg-teal-100 text-teal-600 rotate-180'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <a
            href="mailto:hello@leadflexup.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-teal-300 hover:text-teal-700 transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@leadflexup.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
