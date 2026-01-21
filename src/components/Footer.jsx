import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-900 text-white pt-14 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#38bdf8,transparent_25%),radial-gradient(circle_at_80%_0%,#818cf8,transparent_30%)]" />
      <div className="shell relative">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black mb-3">LeadFlexUp</h3>
            <p className="text-slate-200 text-sm leading-relaxed max-w-md">
              Turn content into leads without a CRM.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><Link to="/product" className="hover:text-white">Features</Link></li>
              <li><Link to="/use-cases" className="hover:text-white">Use Cases</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Get Started</h4>
            <Link to="/landing" className="cta-primary text-sm">
              Start now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-slate-300">
          © 2026 LeadFlexUp. Built for founders and small teams.
        </div>
      </div>
    </footer>
  );
}
