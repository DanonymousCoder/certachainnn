import React from 'react';
import Sidebar from '../features/dashboard/Sidebar';
import SearchInput from '../components/verifier/SearchInput';
import UserPreview from '../components/verifier/UserPreview';
import AIReportCard from '../components/verifier/AIReportCard';
import FooterSecurity from '../components/verifier/FooterSecurity';

const SkillVerifier = () => {
  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />
      
      <main className="flex-1 p-4 md:p-8 lg:p-12 space-y-8 max-w-5xl">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">AI Skill Verifier</h1>
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
            Utilize our neural verification engine to validate professional competencies against the Solana blockchain. Real-time cryptographic proof of academic and technical mastery.
          </p>
        </header>

        <SearchInput />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UserPreview />
          </div>
          <div className="lg:col-span-1">
            <LedgerStatusCard />
          </div>
        </div>

        <AIReportCard />

        <FooterSecurity />
      </main>
    </div>
  );
};

const LedgerStatusCard = () => (
  <div className="bg-[#111827] p-6 rounded-xl text-white h-full flex flex-col justify-between relative overflow-hidden">
    <div className="absolute top-4 right-4 text-emerald-400 opacity-50">
      <div className="flex gap-1">
        {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-current rounded-full" />)}
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ledger Status</p>
      <h3 className="text-xl font-bold">Live on Solana</h3>
      <p className="text-[9px] font-mono text-slate-500">SOL // 7a9f...3b1c_v2</p>
    </div>
    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-4">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      Real-Time Sync
    </div>
  </div>
);

export default SkillVerifier;
