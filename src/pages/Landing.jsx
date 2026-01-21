export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Generate leads from your content in under 10 minutes.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            LeadFlexUp turns your posts into captured leads with a simple follow-up board—no CRM setup, no extra tools.
          </p>
          <button className="px-12 py-5 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-xl shadow-xl">
            Start generating leads
          </button>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Sound familiar?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border-2 border-red-200">
              <p className="text-lg text-gray-700">
                Content goes out; you don't know if it drives calls.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-red-200">
              <p className="text-lg text-gray-700">
                Forms live everywhere; follow-up lives nowhere.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-red-200">
              <p className="text-lg text-gray-700">
                CRMs promise control but slow you down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The simple lead-generation system
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LeadFlexUp is the simple lead-generation system: create content, capture leads, follow up clearly, and see what's working—all in one.
            </p>
          </div>

          {/* Diagram Representation */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900">Content</h3>
              </div>
              
              <div className="hidden md:block text-blue-600 text-3xl">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900">Form</h3>
              </div>
              
              <div className="hidden md:block text-blue-600 text-3xl">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900">Lead Board</h3>
              </div>
              
              <div className="hidden md:block text-blue-600 text-3xl">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900">Insight</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            How it works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Create content</h3>
                  <p className="text-gray-300">
                    AI-assisted posts and promos tuned for lead capture.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Capture leads</h3>
                  <p className="text-gray-300">
                    Embeddable and shareable forms in minutes.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Follow up</h3>
                  <p className="text-gray-300">
                    Lightweight board for clear next steps.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">See what works</h3>
                  <p className="text-gray-300">
                    Channel and post-level insight so you double down fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What makes this different
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No CRM setup</h3>
              <p className="text-gray-700">
                Start capturing leads immediately. No configuration hell.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No tool switching</h3>
              <p className="text-gray-700">
                Content, forms, follow-up, and insights in one place.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built for small teams</h3>
              <p className="text-gray-700">
                Focused on leads, not admin work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Everything you need
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lead forms</h3>
              <p className="text-gray-700 mb-4">
                Shareable links and embeds that just work.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Create in minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Share anywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Auto-capture to board</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Content + scheduling</h3>
              <p className="text-gray-700 mb-4">
                Publish where your audience is, from one place.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>AI-assisted writing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Multi-channel posting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Schedule ahead</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Follow-up board</h3>
              <p className="text-gray-700 mb-4">
                Keep every contact moving without complexity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Drag-and-drop interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Status tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Team visibility</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Analytics</h3>
              <p className="text-gray-700 mb-4">
                Know which content and channels drive real leads.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Post performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Channel insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Lead attribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Common questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is this a CRM?
              </h3>
              <p className="text-gray-700">
                No—intentionally. It's a lean lead-generation and follow-up system. You get what you need to capture and track leads without the overhead of traditional CRMs.
              </p>
            </div>
            
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need a marketing team?
              </h3>
              <p className="text-gray-700">
                No. Solo founders and small teams launch in minutes. The AI assists with content creation, and the interface is designed to be self-explanatory.
              </p>
            </div>
            
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How fast will I see results?
              </h3>
              <p className="text-gray-700">
                You can publish and capture leads today; see which posts convert within your first week. The system is built for immediate action, not lengthy setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get your next lead faster—start now.
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            No credit card required. No lengthy setup. Just clear results.
          </p>
          <button className="px-12 py-5 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-xl shadow-xl">
            Start generating leads now
          </button>
          <p className="mt-6 text-sm text-blue-200">
            Join founders and small teams generating more leads with less complexity.
          </p>
        </div>
      </section>
    </div>
  );
}
