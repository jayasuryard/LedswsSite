import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist signup:', email);
    setEmail('');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/40">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-300/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-teal-400 rounded-full opacity-60 animate-float" />
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-teal-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Launch Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full mb-6 border border-teal-200/50">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            <span className="text-sm font-semibold text-teal-700">
              🚀 Now in Early Access — Be a Founding Member
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Stop Losing Leads.
            <span className="block mt-2">
              Start{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500">
                  Growing
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 8.5C50 2 150 2 198 8.5" stroke="url(#hero-underline)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#0d9488"/>
                      <stop offset="0.5" stopColor="#14b8a6"/>
                      <stop offset="1" stopColor="#06b6d4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}Faster.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            One workspace to capture leads, nurture prospects, and close sales — 
            <span className="text-gray-800 font-medium"> without juggling 10 different tools.</span>
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all shadow-lg shadow-gray-200/50"
              />
            </div>
            <button
              type="submit"
              className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-2xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Early Access
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free during beta</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Founding member perks</span>
            </div>
          </div>
        </div>

        {/* Laptop Mockup with Dashboard */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 via-transparent to-transparent blur-3xl -z-10 scale-110" />
          
          {/* Laptop Frame */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-t-3xl p-3 pb-0 shadow-2xl">
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
              </div>
              
              <div className="relative bg-gray-100 rounded-t-xl overflow-hidden">
                <div className="bg-gray-200 px-4 py-2 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-lg px-4 py-1 text-xs text-gray-500 flex items-center gap-2 shadow-sm">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      app.leadflexup.com/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Preview - Using actual image or fallback */}
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                  <img 
                    src="/dashboard-preview.png"
                    alt="LeadFlexUp Dashboard" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Dashboard UI */}
                  <div className="absolute inset-0 bg-slate-50 p-4 hidden" style={{ display: 'flex' }}>
                    <div className="flex w-full gap-4">
                      {/* Sidebar */}
                      <div className="w-48 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="font-bold text-sm text-gray-800">LeadFlexUp</span>
                        </div>
                        <div className="space-y-2">
                          {['Dashboard', 'Inbox', 'Leads', 'Campaigns', 'Analytics'].map((item, i) => (
                            <div key={item} className={`px-3 py-2 rounded-lg text-xs font-medium ${i === 0 ? 'bg-teal-50 text-teal-700' : 'text-gray-600'}`}>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 space-y-4">
                        {/* Stats Row */}
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { label: 'Total Leads', value: '—', color: 'teal' },
                            { label: 'Conversion', value: '—', color: 'purple' },
                            { label: 'Revenue', value: '—', color: 'orange' },
                            { label: 'Active', value: '—', color: 'blue' },
                          ].map((stat) => (
                            <div key={stat.label} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                              <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                              <p className="text-xs text-gray-500">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Chart Area */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 h-32">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-medium text-gray-700">Lead Activity</span>
                            <span className="text-xs text-gray-400">Last 7 days</span>
                          </div>
                          <div className="flex items-end justify-between h-16 gap-2">
                            {[30, 45, 35, 60, 50, 75, 55].map((h, i) => (
                              <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-sm" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                        </div>
                        
                        {/* Pipeline */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <span className="text-sm font-medium text-gray-700">Pipeline</span>
                          <div className="flex gap-2 mt-3">
                            {['New', 'Contacted', 'Qualified', 'Won'].map((stage) => (
                              <div key={stage} className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
                                <p className="text-xs text-gray-500">{stage}</p>
                                <p className="text-sm font-bold text-gray-700">—</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="relative h-5 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gray-600 rounded-full mx-20" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-gray-600/50 rounded-t-lg" />
            </div>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-2xl rounded-full" />
          </div>

          {/* Floating UI Cards */}
          <div className="absolute -left-4 lg:-left-12 top-1/4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-float hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">New Lead</p>
                <p className="text-xs text-gray-500">via Contact Form</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 lg:-right-12 top-1/3 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Email Sent</p>
                <p className="text-xs text-gray-500">Auto follow-up</p>
              </div>
            </div>
          </div>

          <div className="absolute right-8 lg:right-4 bottom-16 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Deal Won</p>
                <p className="text-xs text-gray-500">Pipeline updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
