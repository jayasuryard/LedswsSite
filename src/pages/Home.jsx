import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-hero pb-16 pt-12 md:pt-20">
        <div className="shell grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-8">
            <div className="pill w-fit">Lead generation & follow-up</div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900">
              Turn content into leads without a CRM.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              LeadFlexUp helps founders and small teams create, distribute, and capture leads with a simple follow-up board and clear insight on what works.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/landing" className="cta-primary text-base">
                Start generating leads
              </Link>
              <a href="#how-it-works" className="cta-ghost text-base">
                See how it works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="card-surface p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#e0f2ff,transparent_35%),radial-gradient(circle_at_80%_0%,#dfe7ff,transparent_40%)]" />
              <div className="relative space-y-4">
                <div className="stat-tile">
                  <p className="text-sm opacity-90">Content → Form → Lead</p>
                  <p className="text-2xl font-bold mt-1">Live capture board</p>
                </div>
                <div className="glass-panel p-5">
                  <p className="text-sm text-slate-600">Content goes live; nobody knows if it drives conversations.</p>
                  <p className="text-lg font-semibold text-slate-900 mt-2">See it all in one board</p>
                </div>
                <div className="glass-panel p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-bold text-xl flex items-center justify-center">✓</div>
                  <div>
                    <p className="text-sm text-slate-600">Embeddable and shareable lead forms.</p>
                    <p className="text-lg font-semibold text-slate-900">Capture without the clutter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-18 md:py-20">
        <div className="shell">
          <div className="card-surface p-10 md:p-12 bg-white/80">
            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-start">
              <div>
                <h2 className="section-title mb-6 text-slate-900 text-center md:text-left">The problem</h2>
                <div className="space-y-4">
                  <div className="glass-panel p-6 border border-slate-200">
                    <p className="text-lg text-slate-700">Content goes live; nobody knows if it drives conversations.</p>
                  </div>
                  <div className="glass-panel p-6 border border-slate-200">
                    <p className="text-lg text-slate-700">Leads arrive in forms, then get lost in inboxes.</p>
                  </div>
                  <div className="glass-panel p-6 border border-slate-200">
                    <p className="text-lg text-slate-700">CRMs feel heavy, overbuilt, and slow to set up.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why CRMs aren't the answer for small teams</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">•</span>
                    <span>Too many fields, not enough follow-up.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">•</span>
                    <span>Requires admin time you don't have.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">•</span>
                    <span>Built for big sales orgs, not lean founders.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-18 md:py-20">
        <div className="shell">
          <div className="text-center mb-14">
            <h2 className="section-title mb-3">How LeadFlexUp works</h2>
            <p className="section-subtitle">Content → Distribution → Capture → Follow-up → Insight</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="card-surface p-6 text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-700 mb-3">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Create</h3>
              <p className="text-slate-600">AI-assisted posts and promos tuned for lead capture.</p>
            </div>
            <div className="card-surface p-6 text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-700 mb-3">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Distribute</h3>
              <p className="text-slate-600">Schedule and publish to your socials from one place.</p>
            </div>
            <div className="card-surface p-6 text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-700 mb-3">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Capture</h3>
              <p className="text-slate-600">Embeddable and shareable lead forms.</p>
            </div>
            <div className="card-surface p-6 text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-700 mb-3">4</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Follow-up</h3>
              <p className="text-slate-600">Lightweight board to keep every contact moving.</p>
            </div>
            <div className="card-surface p-6 text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-700 mb-3">5</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Insight</h3>
              <p className="text-slate-600">See which posts and channels drive real leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-18 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="shell">
          <div className="text-center mb-14">
            <h2 className="section-title">Core benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">More leads</h3>
              <p className="text-slate-600">From every post.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Faster follow-up</h3>
              <p className="text-slate-600">Clearer tracking.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Immediate visibility</h3>
              <p className="text-slate-600">Into what's working.</p>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Fewer tools</h3>
              <p className="text-slate-600">To juggle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview narrative */}
      <section className="py-18 md:py-20">
        <div className="shell max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="section-title mb-3">A week in</h2>
            <p className="section-subtitle">See how LeadFlexUp works in real time</p>
          </div>
          <div className="space-y-4">
            <div className="glass-panel p-5 flex gap-4 items-start border border-slate-200">
              <div className="text-sm font-semibold text-blue-600 w-16">Day 1</div>
              <p className="text-lg text-slate-700">Publish 3 AI-assisted posts and drop a shareable form link.</p>
            </div>
            <div className="glass-panel p-5 flex gap-4 items-start border border-slate-200">
              <div className="text-sm font-semibold text-blue-600 w-16">Day 3</div>
              <p className="text-lg text-slate-700">New leads appear on the board; you drag them to "Contacted."</p>
            </div>
            <div className="glass-panel p-5 flex gap-4 items-start border border-slate-200">
              <div className="text-sm font-semibold text-blue-600 w-16">Day 5</div>
              <p className="text-lg text-slate-700">See which post drove the most form fills; double down.</p>
            </div>
            <div className="glass-panel p-5 flex gap-4 items-start border border-slate-200">
              <div className="text-sm font-semibold text-blue-600 w-16">Day 7</div>
              <p className="text-lg text-slate-700">Pipeline is clear; next week's posts are scheduled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="shell grid md:grid-cols-3 gap-6 text-center">
          <div className="glass-panel bg-white/5 border border-white/10 p-6">
            <p className="text-lg font-semibold">Built for founders.</p>
          </div>
          <div className="glass-panel bg-white/5 border border-white/10 p-6">
            <p className="text-lg font-semibold">Used by small teams.</p>
          </div>
          <div className="glass-panel bg-white/5 border border-white/10 p-6">
            <p className="text-lg font-semibold">Trusted by local service businesses.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-18 md:py-20">
        <div className="shell max-w-4xl text-center card-surface p-10 md:p-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Ready for more leads, less clutter?</h2>
          <Link to="/landing" className="cta-primary text-lg">
            Start generating leads now
          </Link>
        </div>
      </section>
    </div>
  );
}
