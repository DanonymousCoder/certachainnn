import { Landmark, Cpu, Home, Atom } from 'lucide-react';

export default function TrustBar() {
  const partners = [
    { icon: Landmark, text: "ACADEMIA" },
    { icon: Cpu, text: "GLOBAL TECH" },
    { icon: Home, text: "STANFORD" },
    { icon: Atom, text: "SOLANA FOUNDATION" }
  ];

  return (
    <section className="bg-white border-y border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-12">
          Trusted by Global Leaders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50">
          {partners.map((partner) => (
            <div key={partner.text} className="flex items-center gap-3 font-bold text-lg tracking-tight text-gray-700">
              <partner.icon size={24} />
              <span>{partner.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
