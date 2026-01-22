import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import UseCases from '../components/UseCases';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import EarlyAccessCTA from '../components/EarlyAccessCTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <ProductShowcase />
      <UseCases />
      <Pricing />
      <FAQ />
      <EarlyAccessCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
