import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-hero py-16 md:py-20">
        <div className="shell text-center space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            One system for leads. Zero CRM overhead.
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            LeadFlexUp replaces scattered content tools, standalone forms, and heavy CRMs with one simple lead-generation and follow-up system.
          </p>
        </div>
      </section>

      {/* Feature groups */}
      <section className="py-16 md:py-20">
        <div className="shell">
          <div className="text-center mb-14">
            <h2 className="section-title">What it does</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-surface p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Create & distribute content</h3>
              <p className="text-lg text-slate-700 mb-6">AI-assisted posts and promos; schedule and publish to your channels.</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Generate lead-focused posts with AI assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Schedule across multiple social channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Publish from one dashboard</span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-8 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Capture leads</h3>
              <p className="text-lg text-slate-700 mb-6">Embeddable and shareable forms with zero friction.</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Create custom lead forms in minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Embed on your site or share as links</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Automatically capture to your board</span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-8 bg-gradient-to-br from-purple-50 to-pink-50">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Track follow-ups</h3>
              <p className="text-lg text-slate-700 mb-6">Lightweight board to move contacts from "New" to "Booked."</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600">✓</span>
                  <span>Visual board with drag-and-drop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600">✓</span>
                  <span>Manual contact tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600">✓</span>
                  <span>Status updates in seconds</span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-8 bg-gradient-to-br from-orange-50 to-yellow-50">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">See what works</h3>
              <p className="text-lg text-slate-700 mb-6">Unified view from content → form → lead so you can double down fast.</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>See which posts drive form fills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Track channel performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Lead-level insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What it's NOT */}
      <section className="py-16 md:py-18 bg-slate-900 text-white">
        <div className="shell max-w-4xl text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">What it's NOT</h2>
          <p className="text-xl text-slate-200">Not a CRM. No bloated fields, no enterprise workflows, no admin burden.</p>
          <p className="text-lg text-slate-300">LeadFlexUp is designed to help you generate and follow up on leads—not manage complex sales pipelines or enterprise processes.</p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 md:py-20">
        <div className="shell">
          <div className="text-center mb-12">
            <h2 className="section-title">Who it's best for</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-surface p-6 text-lg text-slate-700">Founders</div>
            <div className="card-surface p-6 text-lg text-slate-700">Solo marketers</div>
            <div className="card-surface p-6 text-lg text-slate-700">Small teams (1–5 people)</div>
            <div className="card-surface p-6 text-lg text-slate-700">Local services</div>
            <div className="card-surface p-6 text-lg text-slate-700 md:col-span-2">Agencies managing their own inbound leads</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="shell max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Start capturing leads today</h2>
          <Link to="/landing" className="cta-primary bg-white text-blue-600 shadow-xl">
            Start generating leads
          </Link>
        </div>
      </section>
    </div>
  );
}
