import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Cpu } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CredentialCard from '../components/profile/CredentialCard';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-16 items-center">
        <div className="space-y-8">
          <Badge type="solana">
            <CheckCircle2 size={12} className="mr-1" />
            Powered by Solana Mainnet
          </Badge>

          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            The LinkedIn of <span className="text-indigo-600">Verifiable Education</span>
          </h1>

          <p className="text-lg text-gray-600">
            CertaChain is the global standard for academic credentials. We transform diplomas into secure, tamper-proof digital assets that empower professionals and streamline institutional verification.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Button to="/claim" variant="primary" className="flex items-center justify-center gap-2 group">
              Claim Credentials
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/dashboard/overview" variant="secondary">
              Join as Institution
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <CredentialCard />
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Infrastructure for Professional Trust
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Tamper-proof",
                desc: "Every certificate is cryptographically signed. Once issued, academic records cannot be altered, forged, or lost."
              },
              {
                icon: Cpu,
                title: "AI-Powered",
                desc: "Smart matching algorithms connect students to employers based on their verified skills and verified historical performance."
              },
              {
                icon: Zap,
                title: "Zero-Cost Scalability",
                desc: "Built on Solana, allowing institutions to mint millions of certificates for fractions of a penny."
              }
            ].map((feature, i) => (
              <Card key={i} className="flex flex-col gap-4">
                <feature.icon size={24} className="text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-white">
            Ready to secure your future?
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of students and institutions moving education to the global ledger.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button to="/verifier" variant="gradient">Get Started Now</Button>
            <Button to="/home" variant="ghost" className="text-white border-2 border-gray-600 hover:bg-gray-800">
              View Demo Registry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
