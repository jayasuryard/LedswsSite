import { useState } from 'react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      title: 'Unified Inbox',
      description: 'Every message from email, social media, and web forms lands in one organized inbox. Never miss a lead again.',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      beamColor: '#14b8a6',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      title: 'Visual CRM Pipeline',
      description: 'Drag-and-drop leads through customizable stages. See your entire sales funnel at a glance and never lose track.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      beamColor: '#a855f7',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Automation',
      description: 'Create beautiful campaigns and automated sequences that nurture leads while you focus on closing deals.',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      beamColor: '#f97316',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      title: 'Social Media Hub',
      description: 'Schedule posts, monitor mentions, and engage with your audience across all platforms from one dashboard.',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      beamColor: '#3b82f6',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Smart Lead Forms',
      description: 'Build high-converting forms in minutes. Embed anywhere and track exactly which forms bring the best leads.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      beamColor: '#22c55e',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Actionable Analytics',
      description: 'Real-time dashboards show you exactly what\'s working. Make data-driven decisions to grow faster.',
      gradient: 'from-rose-500 to-red-500',
      bgGradient: 'from-rose-50 to-red-50',
      beamColor: '#f43f5e',
    },
  ];

  // Central hub icon
  const CenterIcon = () => (
    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-500/30">
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
  );

  return (
    <section id="features" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
            All-in-One Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              one workspace
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Stop paying for separate tools that don\'t talk to each other. 
            LeadFlexUp brings your entire growth stack under one roof.
          </p>
        </div>

        {/* Animated Beam Section - Desktop */}
        <div className="hidden lg:block relative mb-20">
          <div className="relative h-[500px] max-w-4xl mx-auto">
            {/* SVG for all beam lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {features.map((feature, index) => (
                  <linearGradient key={`gradient-${index}`} id={`beam-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={feature.beamColor} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={feature.beamColor} stopOpacity="0.2" />
                  </linearGradient>
                ))}
              </defs>
              
              {/* Draw lines from center to each node */}
              {features.map((feature, index) => {
                const angle = (index * 60) - 90;
                const radius = 180;
                const centerX = 50; // percentage
                const centerY = 50; // percentage
                const endX = centerX + (Math.cos((angle * Math.PI) / 180) * 18); // percentage offset
                const endY = centerY + (Math.sin((angle * Math.PI) / 180) * 36); // percentage offset (adjusted for aspect ratio)
                
                return (
                  <g key={`beam-${index}`}>
                    {/* Main beam line */}
                    <line
                      x1={`${centerX}%`}
                      y1={`${centerY}%`}
                      x2={`${endX}%`}
                      y2={`${endY}%`}
                      stroke={feature.beamColor}
                      strokeWidth={hoveredFeature === index ? "3" : "2"}
                      strokeOpacity={hoveredFeature === index ? "0.8" : "0.3"}
                      strokeDasharray={hoveredFeature === index ? "none" : "4 4"}
                      className="transition-all duration-300"
                    />
                    {/* Animated dot on hover */}
                    {hoveredFeature === index && (
                      <circle r="5" fill={feature.beamColor}>
                        <animate
                          attributeName="cx"
                          values={`${centerX}%;${endX}%`}
                          dur="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values={`${centerY}%;${endY}%`}
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>
            
            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <CenterIcon />
            </div>
            
            {/* Feature Nodes */}
            {features.map((feature, index) => {
              const angle = (index * 60) - 90;
              const radius = 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={feature.title}
                  className="absolute left-1/2 top-1/2 z-20"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Feature Node */}
                  <div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 bg-white border-2 ${
                      hoveredFeature === index ? 'scale-125 shadow-2xl' : 'scale-100'
                    }`}
                    style={{
                      borderColor: hoveredFeature === index ? feature.beamColor : '#e5e7eb',
                    }}
                  >
                    <div className="text-gray-700">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Tooltip on Hover */}
                  <div 
                    className={`absolute z-30 w-64 p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                      hoveredFeature === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}
                    style={{
                      left: x > 0 ? '100%' : 'auto',
                      right: x <= 0 ? '100%' : 'auto',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      marginLeft: x > 0 ? '12px' : 0,
                      marginRight: x <= 0 ? '12px' : 0,
                    }}
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Grid (original) */}
        <div className="grid md:grid-cols-2 lg:hidden gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.bgGradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-gray-700">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">And much more coming soon...</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['AI Content Writer', 'Lead Scoring', 'Team Collaboration', 'API Access', 'White Label'].map((item) => (
              <span key={item} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
