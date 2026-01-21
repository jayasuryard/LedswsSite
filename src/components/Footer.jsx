import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">LeadFlexUp</h3>
            <p className="text-gray-600 text-sm">
              Turn content into leads without a CRM.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link></li>
              <li><Link to="/use-cases" className="text-gray-600 hover:text-gray-900 text-sm">Use Cases</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Get Started</h4>
            <Link to="/landing" className="inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
              Start now
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          © 2026 LeadFlexUp. Built for founders and small teams.
        </div>
      </div>
    </footer>
  );
}
