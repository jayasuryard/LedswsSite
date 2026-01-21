import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            LeadFlexUp
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/product" className="text-gray-600 hover:text-gray-900 transition">
              Product
            </Link>
            <Link to="/use-cases" className="text-gray-600 hover:text-gray-900 transition">
              Use Cases
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link to="/landing" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Start generating leads
            </Link>
          </div>

          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
