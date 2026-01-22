import dashboardImg from '../assets//images/dashboard.png';

const ProductShowcase = () => {
  const showcaseItems = [
    {
      id: 'dashboard',
      title: 'Command Center Dashboard',
      description: 'Your business at a glance. See leads, revenue, and campaigns in one beautiful dashboard.',
      features: ['Real-time metrics', 'Activity feed', 'Quick actions', 'Custom widgets'],
    },
    {
      id: 'pipeline',
      title: 'Visual Lead Pipeline',
      description: 'Drag and drop leads through your sales process. Never lose track of an opportunity.',
      features: ['Custom stages', 'Lead scoring', 'Notes & history', 'Follow-up reminders'],
    },
    {
      id: 'inbox',
      title: 'Unified Inbox',
      description: 'Every message from every channel in one organized inbox. Respond faster, close more.',
      features: ['Multi-channel', 'Smart filters', 'Templates', 'Team assignments'],
    },
  ];

  return (
    <section id="product" className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal-500/10 text-teal-400 text-sm font-semibold rounded-full mb-4 border border-teal-500/20">
            Product Preview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            A workspace{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              designed for growth
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Beautiful, intuitive, and powerful. Built from the ground up for small business owners who want to spend less time on tools and more time closing deals.
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="relative">
          {/* Monitor/Desktop Mockup */}
          <div className="relative max-w-5xl mx-auto">
            {/* Monitor Frame */}
            <div className="relative">
              {/* Screen Bezel */}
              <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl border border-gray-700">
                {/* Screen Content */}
                <div className="bg-gray-900 rounded-2xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center gap-4 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-gray-700 rounded-lg px-4 py-1.5 flex items-center gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        app.leadflexup.com
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Preview */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 to-slate-100 relative">
                    <img 
                      src={dashboardImg}
                      alt="LeadFlexUp Dashboard Preview" 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                            <div class="w-full h-full border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center">
                              <div class="text-center">
                                <div class="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/20">
                                  <svg class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                  </svg>
                                </div>
                                <p class="text-gray-400 text-lg mb-2">Dashboard Preview</p>
                                <p class="text-gray-600 text-sm">Add your screenshot to src/assets/dashboard-preview.png</p>
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
              
              {/* Monitor Stand */}
              <div className="flex justify-center">
                <div className="w-32 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
              </div>
              <div className="flex justify-center -mt-1">
                <div className="w-48 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl" />
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -left-4 lg:-left-16 top-1/4 transform -translate-y-1/2 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">Analytics</span>
                </div>
                <p className="text-sm text-gray-600">Real-time insights at your fingertips</p>
              </div>
            </div>

            <div className="absolute -right-4 lg:-right-16 top-1/3 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">CRM</span>
                </div>
                <p className="text-sm text-gray-600">Manage leads with visual pipeline</p>
              </div>
            </div>

            <div className="absolute left-1/4 -bottom-4 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 max-w-[220px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">Automation</span>
                </div>
                <p className="text-sm text-gray-600">Set it and forget it email sequences</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <div key={item.id} className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {item.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
