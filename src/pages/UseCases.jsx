import { Link } from 'react-router-dom';

export default function UseCases() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for teams like yours
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how LeadFlexUp fits your workflow
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="space-y-20">
          {/* Founders */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-10 md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Founders
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The pain</h3>
                <p className="text-lg text-gray-700">
                  Content is inconsistent; leads get buried; no clear signal on what works.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How LeadFlexUp fits</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Publish fast, capture leads instantly, keep follow-up visible.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Generate posts without overthinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Drop forms wherever your audience is</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>See every lead in one place</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Know what content drives conversations</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/landing" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                Start as a founder
              </Link>
            </div>
          </div>

          {/* Local Businesses */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-10 md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Local businesses
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The pain</h3>
                <p className="text-lg text-gray-700">
                  Word-of-mouth is slow; forms and calls get lost; no time for a CRM.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How LeadFlexUp fits</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Simple forms, clear board, see which offers bring inquiries.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Post promos and seasonal offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Capture walk-in and online inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Track who to follow up with today</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>See which campaigns work</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/landing" className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold">
                Start for your local business
              </Link>
            </div>
          </div>

          {/* Small Teams */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-10 md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Small teams
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The pain</h3>
                <p className="text-lg text-gray-700">
                  Too many tools, no shared view of follow-up.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How LeadFlexUp fits</h3>
                <p className="text-lg text-gray-700 mb-4">
                  One system for posts, forms, and lead status—no setup drag.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3">✓</span>
                    <span>Everyone sees the same board</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3">✓</span>
                    <span>Collaborate on content and forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3">✓</span>
                    <span>Assign follow-up with one click</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3">✓</span>
                    <span>Share insights across the team</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/landing" className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold">
                Start with your team
              </Link>
            </div>
          </div>

          {/* Agencies */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-2xl p-10 md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Agencies
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The pain</h3>
                <p className="text-lg text-gray-700">
                  Tracking your own inbound while serving clients is messy.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How LeadFlexUp fits</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Keep your agency's leads organized without another complex platform.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">✓</span>
                    <span>Promote your services with targeted content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">✓</span>
                    <span>Capture RFPs and project inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">✓</span>
                    <span>Track prospects without heavy CRM setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">✓</span>
                    <span>Separate from client work</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/landing" className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-semibold">
                Start for your agency
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join founders and small teams generating more leads with less complexity.
          </p>
          <Link to="/landing" className="inline-block px-10 py-5 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition font-semibold text-xl">
            Start generating leads
          </Link>
        </div>
      </section>
    </div>
  );
}
