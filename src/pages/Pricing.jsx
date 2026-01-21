import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple plans. Clear value.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built to get leads live in minutes, not months.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">For solo founders</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$49</span>
              <span className="text-gray-600">/month</span>
            </div>
            
            <Link to="/landing" className="block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold mb-8">
              Start Starter
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">AI-assisted posts</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Social scheduling</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Shareable/embeddable forms</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Basic follow-up board</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Channel-level insights</span>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-blue-600 text-white border-2 border-blue-600 rounded-2xl p-8 hover:shadow-xl transition relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
              POPULAR
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Team</h3>
            <p className="text-blue-100 mb-6">For small teams 2–5</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-blue-100">/month</span>
            </div>
            
            <Link to="/landing" className="block w-full text-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold mb-8">
              Start Team
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Everything in Starter</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Team collaboration</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Saved templates</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Multi-channel scheduling</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Deeper lead insights</span>
              </div>
            </div>
          </div>

          {/* Agency */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Agency</h3>
            <p className="text-gray-600 mb-6">For agencies & multi-brand</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$199</span>
              <span className="text-gray-600">/month</span>
            </div>
            
            <Link to="/landing" className="block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold mb-8">
              Start Agency
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Everything in Team</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Multiple workspaces</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Client-ready reporting views</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Priority support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Framing */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Simple plans, no per-seat surprises
          </h2>
          <p className="text-lg text-gray-700">
            Built to get leads live in minutes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently asked questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is this a CRM?
              </h3>
              <p className="text-gray-700">
                No. It's a lead-generation and follow-up system built to avoid CRM overhead. You get content creation, lead capture, and a lightweight board—without the complexity of enterprise CRMs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need a marketing team?
              </h3>
              <p className="text-gray-700">
                No. LeadFlexUp is built for lean founders and small teams. You can generate content, capture leads, and track follow-up without any marketing expertise.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How fast can I see results?
              </h3>
              <p className="text-gray-700">
                You can publish, capture, and track leads within your first week—often day one for inbound forms. The system is designed for immediate results, not lengthy setup.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I switch plans?
              </h3>
              <p className="text-gray-700">
                Yes. Upgrade or downgrade anytime. Your data stays with you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I need more than 5 people?
              </h3>
              <p className="text-gray-700">
                The Agency plan supports multiple workspaces and larger teams. Contact us if you need custom arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Start generating leads today
          </h2>
          <Link to="/landing" className="inline-block px-10 py-5 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition font-semibold text-xl">
            Choose your plan
          </Link>
        </div>
      </section>
    </div>
  );
}
