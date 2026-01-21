import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const linkBase = 'text-sm font-semibold transition px-3 py-2 rounded-lg';
  const active = 'bg-slate-100 text-slate-900';
  const inactive = 'text-slate-600 hover:text-slate-900 hover:bg-slate-100';

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200/70 shadow-sm">
      <div className="shell py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
          LeadFlexUp
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link to="/product" className={`${linkBase} ${pathname === '/product' ? active : inactive}`}>
            Product
          </Link>
          <Link to="/use-cases" className={`${linkBase} ${pathname === '/use-cases' ? active : inactive}`}>
            Use Cases
          </Link>
          <Link to="/pricing" className={`${linkBase} ${pathname === '/pricing' ? active : inactive}`}>
            Pricing
          </Link>
          <Link to="/about" className={`${linkBase} ${pathname === '/about' ? active : inactive}`}>
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/landing" className="cta-primary text-sm">
            Start generating leads
          </Link>
        </div>

        <button className="md:hidden text-slate-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
