import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for clarity. Designed for results.
          </h1>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Why this exists
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Small teams were stuck between scattered tools and heavyweight CRMs.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            We built LeadFlexUp to make lead generation, capture, and follow-up simple.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            The problem we solve
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-lg text-gray-700">
                Content performance is unclear
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-lg text-gray-700">
                Leads slip through cracks
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-lg text-gray-700">
                Traditional CRMs add admin instead of clarity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Simplicity first</h3>
              <p className="text-gray-600">No complexity, no bloat</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clarity over clutter</h3>
              <p className="text-gray-600">See what matters</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Results over dashboards</h3>
              <p className="text-gray-600">Action, not admin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Today
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Built for founders and small teams who want more conversations, not more software overhead.
          </p>
          <p className="text-lg text-blue-100">
            We're obsessed with removing friction from the path between content and leads.
          </p>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What we believe
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Small teams deserve powerful tools
              </h3>
              <p className="text-gray-700">
                Without enterprise complexity or enterprise pricing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CRMs aren't always the answer
              </h3>
              <p className="text-gray-700">
                Sometimes you just need a clear system for leads.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Content should drive conversations
              </h3>
              <p className="text-gray-700">
                Not just engagement metrics.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Follow-up shouldn't be hard
              </h3>
              <p className="text-gray-700">
                A simple board beats scattered spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start generating leads with clarity and confidence.
          </p>
          <Link to="/landing" className="inline-block px-10 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-xl">
            Start generating leads
          </Link>
        </div>
      </section>
    </div>
  );
}
