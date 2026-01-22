import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn content into leads without a CRM.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            LeadFlexUp helps founders and small teams create, distribute, and capture leads with a simple follow-up board and clear insight on what works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/landing" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
              Start generating leads
            </Link>
            <a href="#how-it-works" className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition font-semibold text-lg">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              The problem
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <p className="text-lg text-gray-700">
                  Content goes live; nobody knows if it drives conversations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <p className="text-lg text-gray-700">
                  Leads arrive in forms, then get lost in inboxes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <p className="text-lg text-gray-700">
                  CRMs feel heavy, overbuilt, and slow to set up.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-white rounded-xl border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why CRMs aren't the answer for small teams
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <span>Too many fields, not enough follow-up.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <span>Requires admin time you don't have.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <span>Built for big sales orgs, not lean founders.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            How LeadFlexUp works
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center">
            Content → Distribution → Capture → Follow-up → Insight
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Create</h3>
              <p className="text-gray-600">
                AI-assisted posts and promos tuned for lead capture.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Distribute</h3>
              <p className="text-gray-600">
                Schedule and publish to your socials from one place.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capture</h3>
              <p className="text-gray-600">
                Embeddable and shareable lead forms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up</h3>
              <p className="text-gray-600">
                Lightweight board to keep every contact moving.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insight</h3>
              <p className="text-gray-600">
                See which posts and channels drive real leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Core benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">More leads</h3>
              <p className="text-gray-600">From every post.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Faster follow-up</h3>
              <p className="text-gray-600">Clearer tracking.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Immediate visibility</h3>
              <p className="text-gray-600">Into what's working.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fewer tools</h3>
              <p className="text-gray-600">To juggle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            A week in
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            See how LeadFlexUp works in real time
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-20 text-sm font-semibold text-blue-600">
                Day 1
              </div>
              <p className="text-gray-700 text-lg">
                Publish 3 AI-assisted posts and drop a shareable form link.
              </p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-20 text-sm font-semibold text-blue-600">
                Day 3
              </div>
              <p className="text-gray-700 text-lg">
                New leads appear on the board; you drag them to "Contacted."
              </p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-20 text-sm font-semibold text-blue-600">
                Day 5
              </div>
              <p className="text-gray-700 text-lg">
                See which post drove the most form fills; double down.
              </p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-20 text-sm font-semibold text-blue-600">
                Day 7
              </div>
              <p className="text-gray-700 text-lg">
                Pipeline is clear; next week's posts are scheduled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-lg font-medium">Built for founders.</p>
            </div>
            <div>
              <p className="text-lg font-medium">Used by small teams.</p>
            </div>
            <div>
              <p className="text-lg font-medium">Trusted by local service businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for more leads, less clutter?
          </h2>
          <Link to="/landing" className="inline-block px-10 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-xl">
            Start generating leads now
          </Link>
        </div>
      </section>
    </div>
  );
}
