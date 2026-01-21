import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-hero py-16 md:py-20">
        <div className="shell text-center space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">Simple plans. Clear value.</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Built to get leads live in minutes, not months.</p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 md:py-20">
        <div className="shell grid md:grid-cols-3 gap-6">
          <div className="card-surface p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-600 mb-6">For solo founders</p>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-900">$49</span>
              <span className="text-slate-500">/month</span>
            </div>
            <Link to="/landing" className="cta-primary w-full justify-center mb-8">Start Starter</Link>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>AI-assisted posts</span></div>
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Social scheduling</span></div>
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Shareable/embeddable forms</span></div>
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Basic follow-up board</span></div>
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Channel-level insights</span></div>
            </div>
          </div>

          <div className="card-surface p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative shadow-2xl">
            <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Team</h3>
            <p className="text-blue-50 mb-6">For small teams 2–5</p>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-blue-50">/month</span>
            </div>
            <Link to="/landing" className="bg-white text-blue-600 font-semibold rounded-lg w-full flex justify-center py-3 mb-8 hover:bg-blue-50 transition">Start Team</Link>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><span className="text-white">✓</span><span>Everything in Starter</span></div>
              <div className="flex items-start gap-3"><span className="text-white">✓</span><span>Team collaboration</span></div>
              <div className="flex items-start gap-3"><span className="text-white">✓</span><span>Saved templates</span></div>
              <div className="flex items-start gap-3"><span className="text-white">✓</span><span>Multi-channel scheduling</span></div>
              <div className="flex items-start gap-3"><span className="text-white">✓</span><span>Deeper lead insights</span></div>
            </div>
          </div>

          <div className="card-surface p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Agency</h3>
            <p className="text-slate-600 mb-6">For agencies & multi-brand</p>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-900">$199</span>
              <span className="text-slate-500">/month</span>
            </div>
            <Link to="/landing" className="cta-primary w-full justify-center mb-8">Start Agency</Link>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Everything in Team</span></div>
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Multiple workspaces</span></div>
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Client-ready reporting views</span></div>
              <div className="flex items-start gap-3"><span className="text-blue-600">✓</span><span>Priority support</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value framing */}
      <section className="py-14 bg-blue-50">
        <div className="shell text-center space-y-3 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Simple plans, no per-seat surprises</h2>
          <p className="text-lg text-slate-700">Built to get leads live in minutes.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-18 md:py-20">
        <div className="shell max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently asked questions</h2>
          </div>
          <div className="space-y-6">
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Is this a CRM?</h3>
              <p className="text-slate-700">No. It's a lead-generation and follow-up system built to avoid CRM overhead. You get content creation, lead capture, and a lightweight board—without the complexity of enterprise CRMs.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Do I need a marketing team?</h3>
              <p className="text-slate-700">No. LeadFlexUp is built for lean founders and small teams. You can generate content, capture leads, and track follow-up without any marketing expertise.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How fast can I see results?</h3>
              <p className="text-slate-700">You can publish, capture, and track leads within your first week—often day one for inbound forms. The system is designed for immediate results, not lengthy setup.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Can I switch plans?</h3>
              <p className="text-slate-700">Yes. Upgrade or downgrade anytime. Your data stays with you.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What if I need more than 5 people?</h3>
              <p className="text-slate-700">The Agency plan supports multiple workspaces and larger teams. Contact us if you need custom arrangements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="shell max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Start generating leads today</h2>
          <Link to="/landing" className="cta-primary bg-white text-slate-900">Choose your plan</Link>
        </div>
      </section>
    </div>
  );
}
