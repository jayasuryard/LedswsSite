import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One system for leads. Zero CRM overhead.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LeadFlexUp replaces scattered content tools, standalone forms, and heavy CRMs with one simple lead-generation and follow-up system.
          </p>
        </div>
      </section>

      {/* Feature Groups */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          What it does
        </h2>
        
        <div className="space-y-16">
          {/* Create & Distribute */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Create & distribute content
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              AI-assisted posts and promos; schedule and publish to your channels.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Generate lead-focused posts with AI assistance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Schedule across multiple social channels</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Publish from one dashboard</span>
              </li>
            </ul>
          </div>

          {/* Capture Leads */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Capture leads
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Embeddable and shareable forms with zero friction.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Create custom lead forms in minutes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Embed on your site or share as links</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automatically capture to your board</span>
              </li>
            </ul>
          </div>

          {/* Track Follow-ups */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Track follow-ups
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Lightweight board to move contacts from "New" to "Booked."
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Visual board with drag-and-drop</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Manual contact tracking</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Status updates in seconds</span>
              </li>
            </ul>
          </div>

          {/* See What Works */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-10 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              See what works
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Unified view from content → form → lead so you can double down fast.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>See which posts drive form fills</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Track channel performance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lead-level insights</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What It's NOT */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What it's NOT
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Not a CRM. No bloated fields, no enterprise workflows, no admin burden.
          </p>
          <p className="text-lg text-gray-400">
            LeadFlexUp is designed to help you generate and follow up on leads—not manage complex sales pipelines or enterprise processes.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Who it's best for
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <p className="text-lg text-gray-700">Founders</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <p className="text-lg text-gray-700">Solo marketers</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <p className="text-lg text-gray-700">Small teams (1–5 people)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <p className="text-lg text-gray-700">Local services</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 md:col-span-2">
              <p className="text-lg text-gray-700">Agencies managing their own inbound leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Start capturing leads today
          </h2>
          <Link to="/landing" className="inline-block px-10 py-5 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold text-xl">
            Start generating leads
          </Link>
        </div>
      </section>
    </div>
  );
}
