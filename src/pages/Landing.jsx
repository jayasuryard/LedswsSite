export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-hero py-20 md:py-28">
        <div className="shell grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">Generate leads from your content in under 10 minutes.</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">LeadFlexUp turns your posts into captured leads with a simple follow-up board—no CRM setup, no extra tools.</p>
            <button className="cta-primary text-lg">Start generating leads</button>
          </div>
          <div className="card-surface p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#e0f2ff,transparent_35%),radial-gradient(circle_at_80%_0%,#dfe7ff,transparent_40%)]" />
            <div className="relative space-y-4">
              <div className="stat-tile">
                <p className="text-sm opacity-90">Content → Form → Lead Board → Insight</p>
                <p className="text-2xl font-bold mt-1">Live funnel snapshot</p>
              </div>
              <div className="glass-panel p-5">
                <p className="text-sm text-slate-600">No CRM setup</p>
                <p className="text-lg font-semibold text-slate-900">Built for small teams</p>
              </div>
              <div className="glass-panel p-5 flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-600">Focused on leads, not admin work.</p>
                  <p className="text-base font-semibold text-slate-900">Simple lead-generation system</p>
                </div>
                <span className="text-blue-600 text-xl">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation */}
      <section className="py-16 bg-slate-50">
        <div className="shell max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Sound familiar?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card-surface p-6 border-2 border-red-200 text-slate-700">Content goes out; you don't know if it drives calls.</div>
            <div className="card-surface p-6 border-2 border-red-200 text-slate-700">Forms live everywhere; follow-up lives nowhere.</div>
            <div className="card-surface p-6 border-2 border-red-200 text-slate-700">CRMs promise control but slow you down.</div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="shell max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">The simple lead-generation system</h2>
            <p className="text-xl text-slate-600">LeadFlexUp is the simple lead-generation system: create content, capture leads, follow up clearly, and see what's working—all in one.</p>
          </div>
          <div className="card-surface p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">1</div>
                <h3 className="font-bold text-slate-900">Content</h3>
              </div>
              <div className="space-y-2">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">2</div>
                <h3 className="font-bold text-slate-900">Form</h3>
              </div>
              <div className="space-y-2">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">3</div>
                <h3 className="font-bold text-slate-900">Lead Board</h3>
              </div>
              <div className="space-y-2">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">4</div>
                <h3 className="font-bold text-slate-900">Insight</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="shell max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Create content</h3>
                  <p className="text-blue-100">AI-assisted posts and promos tuned for lead capture.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Capture leads</h3>
                  <p className="text-blue-100">Embeddable and shareable forms in minutes.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Follow up</h3>
                  <p className="text-blue-100">Lightweight board for clear next steps.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">See what works</h3>
                  <p className="text-blue-100">Channel and post-level insight so you double down fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16">
        <div className="shell max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10">What makes this different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-surface p-7 text-center bg-blue-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No CRM setup</h3>
              <p className="text-slate-700">Start capturing leads immediately. No configuration hell.</p>
            </div>
            <div className="card-surface p-7 text-center bg-blue-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No tool switching</h3>
              <p className="text-slate-700">Content, forms, follow-up, and insights in one place.</p>
            </div>
            <div className="card-surface p-7 text-center bg-blue-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Built for small teams</h3>
              <p className="text-slate-700">Focused on leads, not admin work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="shell max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Everything you need</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Lead forms</h3>
              <p className="text-slate-700 mb-3">Shareable links and embeds that just work.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Create in minutes</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Share anywhere</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Auto-capture to board</span></li>
              </ul>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Content + scheduling</h3>
              <p className="text-slate-700 mb-3">Publish where your audience is, from one place.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>AI-assisted writing</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Multi-channel posting</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Schedule ahead</span></li>
              </ul>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Follow-up board</h3>
              <p className="text-slate-700 mb-3">Keep every contact moving without complexity.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Drag-and-drop interface</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Status tracking</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Team visibility</span></li>
              </ul>
            </div>
            <div className="card-surface p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Analytics</h3>
              <p className="text-slate-700 mb-3">Know which content and channels drive real leads.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Post performance</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Channel insights</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span><span>Lead attribution</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-16 bg-white">
        <div className="shell max-w-4xl space-y-10">
          <h2 className="text-3xl md:text-4xl font-black text-center">Common questions</h2>
          <div className="space-y-5">
            <div className="card-surface p-7 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Is this a CRM?</h3>
              <p className="text-slate-700">No—intentionally. It's a lean lead-generation and follow-up system. You get what you need to capture and track leads without the overhead of traditional CRMs.</p>
            </div>
            <div className="card-surface p-7 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Do I need a marketing team?</h3>
              <p className="text-slate-700">No. Solo founders and small teams launch in minutes. The AI assists with content creation, and the interface is designed to be self-explanatory.</p>
            </div>
            <div className="card-surface p-7 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">How fast will I see results?</h3>
              <p className="text-slate-700">You can publish and capture leads today; see which posts convert within your first week. The system is built for immediate action, not lengthy setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-18 md:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="shell max-w-4xl text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">Get your next lead faster—start now.</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">No credit card required. No lengthy setup. Just clear results.</p>
          <button className="cta-primary bg-white text-blue-600 text-lg">Start generating leads now</button>
          <p className="text-sm text-blue-200">Join founders and small teams generating more leads with less complexity.</p>
        </div>
      </section>
    </div>
  );
}
