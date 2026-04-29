import { ExternalLink, Landmark, Shield, Briefcase, Award } from 'lucide-react';

const CredentialCard = ({ title, issuer, date, type, icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group overflow-hidden">
    <Shield className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="flex justify-between items-start mb-6">
      <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
        {icon === 'edu' && <Landmark size={20} />}
        {icon === 'shield' && <Shield size={20} />}
        {icon === 'code' && <Briefcase size={20} />}
        {icon === 'license' && <Award size={20} />}
      </div>
      <span className="text-[9px] font-black bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-100 tracking-widest uppercase">
        {type}
      </span>
    </div>

    <div className="space-y-1 mb-8">
      <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="text-xs text-slate-500">{issuer}</p>
      <p className="text-[10px] font-bold text-slate-300 tracking-tighter uppercase">{date}</p>
    </div>

    <div className="flex justify-between items-center pt-4 border-t border-slate-50">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-slate-200 rounded animate-pulse" />
        <span className="text-[10px] font-mono text-slate-400">TX: 4x9s...k2p</span>
      </div>
      <button className="text-[10px] font-bold text-indigo-500 flex items-center gap-1 hover:underline">
        View On-Chain <ExternalLink size={10} />
      </button>
    </div>
  </div>
);

export default CredentialCard;
