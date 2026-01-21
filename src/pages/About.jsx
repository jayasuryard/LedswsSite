import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-hero py-16 md:py-20">
        <div className="shell text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">Built for clarity. Designed for results.</h1>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-14">
        <div className="shell max-w-4xl space-y-6">
          <h2 className="section-title">Why this exists</h2>
          <p className="text-xl text-slate-700 leading-relaxed">Small teams were stuck between scattered tools and heavyweight CRMs.</p>
          <p className="text-xl text-slate-700 leading-relaxed">We built LeadFlexUp to make lead generation, capture, and follow-up simple.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-14 bg-slate-50">
        <div className="shell max-w-4xl">
          <h2 className="section-title mb-6">The problem we solve</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card-surface p-6 text-lg text-slate-700">Content performance is unclear</div>
            <div className="card-surface p-6 text-lg text-slate-700">Leads slip through cracks</div>
            <div className="card-surface p-6 text-lg text-slate-700">Traditional CRMs add admin instead of clarity</div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="shell max-w-5xl">
          <h2 className="section-title mb-10">Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-surface p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Simplicity first</h3>
              <p className="text-slate-600">No complexity, no bloat</p>
            </div>
            <div className="card-surface p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clarity over clutter</h3>
              <p className="text-slate-600">See what matters</p>
            </div>
            <div className="card-surface p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Results over dashboards</h3>
              <p className="text-slate-600">Action, not admin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="shell max-w-4xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">Today</h2>
          <p className="text-xl leading-relaxed">Built for founders and small teams who want more conversations, not more software overhead.</p>
          <p className="text-lg text-blue-100">We're obsessed with removing friction from the path between content and leads.</p>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16">
        <div className="shell max-w-5xl">
          <h2 className="section-title text-center mb-12">What we believe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Small teams deserve powerful tools</h3>
              <p className="text-slate-700">Without enterprise complexity or enterprise pricing.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-2">CRMs aren't always the answer</h3>
              <p className="text-slate-700">Sometimes you just need a clear system for leads.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Content should drive conversations</h3>
              <p className="text-slate-700">Not just engagement metrics.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Follow-up shouldn't be hard</h3>
              <p className="text-slate-700">A simple board beats scattered spreadsheets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-50">
        <div className="shell max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Join us</h2>
          <p className="text-xl text-slate-600">Start generating leads with clarity and confidence.</p>
          <Link to="/landing" className="cta-primary text-lg">Start generating leads</Link>
        </div>
      </section>
    </div>
  );
}
