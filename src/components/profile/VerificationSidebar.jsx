import { QrCode, Copy, Download, Share2, ShieldCheck } from 'lucide-react';

const VerificationSidebar = () => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-8 sticky top-24">
    <h3 className="text-xl font-bold text-slate-800">Verification Gateway</h3>

    <div className="border border-slate-900 p-6 rounded-xl space-y-4">
      <div className="bg-slate-900 rounded-lg p-6 flex flex-col items-center">
        <div className="bg-white p-2 rounded-lg mb-4">
          <QrCode size={140} className="text-slate-900" />
        </div>
        <p className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">Scan to instantly verify</p>
        <div className="w-10 h-1 bg-[#7030d8] mt-3 rounded-full" />
      </div>
    </div>

    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Shareable Profile Link</label>
        <div className="flex items-center justify-between bg-indigo-50/50 border border-indigo-100 p-3 rounded-lg">
          <span className="text-[11px] font-mono text-indigo-900">certachain.io/p/chidi-okoro</span>
          <Copy size={14} className="text-indigo-400 cursor-pointer" />
        </div>
      </div>

      <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
        <Download size={18} /> Download Verified CV
      </button>
      <button className="w-full bg-white border border-slate-200 text-slate-700 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
        <Share2 size={18} /> Share Credentials
      </button>
    </div>

    <div className="bg-indigo-50 p-5 rounded-xl flex items-start gap-3">
      <ShieldCheck className="text-indigo-500 shrink-0" size={20} />
      <div className="space-y-1">
        <h4 className="text-xs font-bold text-indigo-950">Cryptographic Proof</h4>
        <p className="text-[10px] text-indigo-600/70 leading-relaxed">
          All credentials displayed here are immutable records anchored on the Solana blockchain.
        </p>
      </div>
    </div>
  </div>
);

export default VerificationSidebar;
