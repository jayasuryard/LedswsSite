import { Link } from 'react-router-dom';

export default function UseCases() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-hero py-16 md:py-20">
        <div className="shell text-center space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">Built for teams like yours</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">See how LeadFlexUp fits your workflow</p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 md:py-20">
        <div className="shell space-y-14">
          <div className="card-surface p-10 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Founders</h2>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The pain</h3>
                <p className="text-lg text-slate-700 mb-6">Content is inconsistent; leads get buried; no clear signal on what works.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How LeadFlexUp fits</h3>
                  <p className="text-lg text-slate-700 mb-4">Publish fast, capture leads instantly, keep follow-up visible.</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Generate posts without overthinking</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Drop forms wherever your audience is</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>See every lead in one place</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Know what content drives conversations</span></li>
                  </ul>
                </div>
                <Link to="/landing" className="cta-primary">Start as a founder</Link>
              </div>
            </div>
          </div>

          <div className="card-surface p-10 md:p-12 bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Local businesses</h2>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The pain</h3>
                <p className="text-lg text-slate-700 mb-6">Word-of-mouth is slow; forms and calls get lost; no time for a CRM.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How LeadFlexUp fits</h3>
                  <p className="text-lg text-slate-700 mb-4">Simple forms, clear board, see which offers bring inquiries.</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Post promos and seasonal offers</span></li>
                    <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Capture walk-in and online inquiries</span></li>
                    <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Track who to follow up with today</span></li>
                    <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>See which campaigns work</span></li>
                  </ul>
                </div>
                <Link to="/landing" className="cta-primary bg-green-600 hover:shadow-xl">Start for your local business</Link>
              </div>
            </div>
          </div>

          <div className="card-surface p-10 md:p-12 bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Small teams</h2>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The pain</h3>
                <p className="text-lg text-slate-700 mb-6">Too many tools, no shared view of follow-up.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How LeadFlexUp fits</h3>
                  <p className="text-lg text-slate-700 mb-4">One system for posts, forms, and lead status—no setup drag.</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3"><span className="text-purple-600">✓</span><span>Everyone sees the same board</span></li>
                    <li className="flex items-start gap-3"><span className="text-purple-600">✓</span><span>Collaborate on content and forms</span></li>
                    <li className="flex items-start gap-3"><span className="text-purple-600">✓</span><span>Assign follow-up with one click</span></li>
                    <li className="flex items-start gap-3"><span className="text-purple-600">✓</span><span>Share insights across the team</span></li>
                  </ul>
                </div>
                <Link to="/landing" className="cta-primary bg-purple-600 hover:shadow-xl">Start with your team</Link>
              </div>
            </div>
          </div>

          <div className="card-surface p-10 md:p-12 bg-gradient-to-br from-orange-50 to-yellow-100">
            <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Agencies</h2>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The pain</h3>
                <p className="text-lg text-slate-700 mb-6">Tracking your own inbound while serving clients is messy.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How LeadFlexUp fits</h3>
                  <p className="text-lg text-slate-700 mb-4">Keep your agency's leads organized without another complex platform.</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3"><span className="text-orange-600">✓</span><span>Promote your services with targeted content</span></li>
                    <li className="flex items-start gap-3"><span className="text-orange-600">✓</span><span>Capture RFPs and project inquiries</span></li>
                    <li className="flex items-start gap-3"><span className="text-orange-600">✓</span><span>Track prospects without heavy CRM setup</span></li>
                    <li className="flex items-start gap-3"><span className="text-orange-600">✓</span><span>Separate from client work</span></li>
                  </ul>
                </div>
                <Link to="/landing" className="cta-primary bg-orange-600 hover:shadow-xl">Start for your agency</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="shell max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Ready to get started?</h2>
          <p className="text-xl text-slate-200">Join founders and small teams generating more leads with less complexity.</p>
          <Link to="/landing" className="cta-primary bg-white text-slate-900">Start generating leads</Link>
        </div>
      </section>
    </div>
  );
}
