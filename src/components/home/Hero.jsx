import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import CredentialCard from '../profile/CredentialCard';

export default function Hero() {
  return (
    <section className="px-6 py-24 lg:py-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <Badge type="solana">
            <CheckCircle2 size={12} className="mr-1" />
            Powered by Solana Mainnet
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            The LinkedIn of <span className="text-indigo-600">Verifiable Education</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            CertaChain is the global standard for academic credentials. We transform diplomas into secure, tamper-proof digital assets that empower professionals and streamline institutional verification.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button to="/profile/1" variant="primary" className="flex items-center justify-center gap-2 group">
              Claim Credentials
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/dashboard/overview" variant="secondary">
              Join as Institution
            </Button>
          </div>
        </div>

        {/* Right Column: Credential Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <CredentialCard />
          </div>
        </div>
      </div>
    </section>
  );
}
