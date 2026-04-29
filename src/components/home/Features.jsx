import { ShieldCheck, Cpu, Zap } from 'lucide-react';
import Card from '../ui/Card';

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Tamper-proof",
      description: "Every certificate is cryptographically signed. Once issued, academic records cannot be altered, forged, or lost."
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Smart matching algorithms connect students to employers based on their verified skills and verified historical performance."
    },
    {
      icon: Zap,
      title: "Zero-Cost Scalability",
      description: "Built on Solana, allowing institutions to mint millions of certificates for fractions of a penny with instant settlement."
    }
  ];

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Infrastructure for <br className="sm:hidden" /> Professional Trust
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          We leverage the speed of Solana and the immutability of blockchain to create a decentralized ledger for lifelong learning.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <Card key={i} className="flex flex-col gap-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <feature.icon size={24} className="text-gray-700" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
