import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Features from '../components/home/Features';
import CTA from '../components/home/CTA';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff] selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Global Navigation */}
      <Navbar />

      <main className="grow">
        {/* 2. Hero Section: Includes the text and floating CredentialCard */}
        <section className="relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-150 h-150 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          <Hero />
        </section>

        {/* 3. Social Proof Section */}
        <TrustBar />

        {/* 4. Infrastructure/Features Section */}
        <div className="bg-white">
          <Features />
        </div>

        {/* 5. Conversion Section */}
        <CTA />
      </main>

      {/* 6. Legal & Links Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
