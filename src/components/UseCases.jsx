import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UseCases = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const useCases = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Agencies & Consultants',
      description: 'Manage multiple client accounts from one dashboard. Keep leads organized and campaigns running smoothly.',
      useCases: ['Manage multiple businesses', 'Client reporting', 'White-label options'],
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      accentColor: 'teal',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: 'E-commerce & Retail',
      description: 'Turn browsers into buyers. Capture leads, send targeted campaigns, and track what drives sales.',
      useCases: ['Cart abandonment', 'Product campaigns', 'Customer segmentation'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      accentColor: 'purple',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Real Estate',
      description: 'Never miss a property inquiry. Respond instantly and nurture buyers through their journey.',
      useCases: ['Lead response time', 'Property alerts', 'Follow-up automation'],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      accentColor: 'orange',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Professional Services',
      description: 'Law firms, accountants, coaches—manage client inquiries and build lasting relationships.',
      useCases: ['Appointment booking', 'Client onboarding', 'Retainer management'],
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      accentColor: 'blue',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'SaaS & Tech',
      description: 'Convert trial users to paying customers. Track engagement and automate onboarding sequences.',
      useCases: ['Trial conversion', 'Feature announcements', 'User engagement'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'green',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Education & Coaching',
      description: 'Fill your courses and programs. Build an email list and convert subscribers to students.',
      useCases: ['Course launches', 'Webinar funnels', 'Student communication'],
      gradient: 'from-rose-500 to-red-500',
      bgGradient: 'from-rose-50 to-red-50',
      accentColor: 'rose',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    const ctx = gsap.context(() => {
      // Get the last card's ScrollTrigger start position
      const lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: 'center center',
      });

      // Iterate over each card
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        const scale = isLast ? 1 : 0.9 + (index * 0.015);
        const scaleDown = gsap.to(card, {
          scale: scale,
          filter: isLast ? 'brightness(1)' : 'brightness(' + (0.7 + index * 0.05) + ')',
        });
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: () => lastCardST.start,
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          ease: 'none',
          animation: scaleDown,
          toggleActions: 'restart none none reverse',
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="use-cases" className="bg-gray-900 relative">
      {/* Section Header */}
      <div className="sticky top-0 z-0 py-20 lg:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-teal-500/10 text-teal-400 text-sm font-semibold rounded-full mb-4 border border-teal-500/20">
            Built For You
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Perfect for{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-400">
              any business
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you're a solopreneur, agency, or growing team—LeadFlexUp adapts to your unique workflow.
          </p>
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div ref={containerRef} className="relative">
        {useCases.map((useCase, index) => (
          <div
            key={useCase.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-full min-h-[85vh] md:min-h-[90vh]"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className={"bg-linear-to-br " + useCase.bgGradient + " rounded-3xl overflow-hidden shadow-2xl border border-white/20"}>
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
                    {/* Icon */}
                    <div className={"inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-linear-to-br " + useCase.gradient + " text-white mb-6 shadow-lg"}>
                      {useCase.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Use Cases Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {useCase.useCases.map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#early-access"
                      className={"inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r " + useCase.gradient + " text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 w-fit group"}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Image Side */}
                  <div className="relative h-64 md:h-auto order-1 md:order-2">
                    <div className="absolute inset-0 md:relative md:h-full">
                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className={"absolute inset-0 bg-linear-to-t md:bg-linear-to-l " + useCase.bgGradient + " opacity-30"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer for smooth transition */}
      <div className="h-[20vh] bg-gray-900" />
    </section>
  );
};

export default UseCases;
