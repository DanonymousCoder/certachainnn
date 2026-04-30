import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link2, CheckCircle2, BrainCircuit, Download, Share2, ScanLine } from 'lucide-react';
import Sidebar from '../features/dashboard/Sidebar';

const SkillVerifier = () => {
  return (
    <div>
      <Navbar />

      <div className="flex min-h-screen bg-[#f8f9ff]">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 lg:p-12 py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">AI Skill Verifier</h1>
          <p className="text-slate-500 text-sm max-w-xl">
            Utilize our neural verification engine to validate professional competencies against the Solana blockchain.
          </p>
        </header>

        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="pl-4 text-slate-400"><Link2 size={18} /></div>
          <input
            className="flex-1 bg-transparent py-3 text-sm focus:outline-none"
            placeholder="Paste student profile link (e.g. certachain.io/profile/alex-chen)"
          />
          <button className="bg-black text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition">Verify</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-6">
            <img src="https://ui-avatars.com/api/?name=Alex+Chen&background=random" className="w-20 h-20 rounded-lg" alt="User" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">Alex Chen</h2>
                <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1">
                  <CheckCircle2 size={10} /> Verified
                </span>
              </div>
              <p className="text-xs text-slate-500">Senior Smart Contract Developer • UC Berkeley Alumni</p>
              <div className="flex gap-6 pt-2">
                <div>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Certificates</p>
                  <p className="text-sm font-bold">14 Issued</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Verification</p>
                  <p className="text-sm font-bold text-purple-600">Level 3</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl text-white flex flex-col justify-between">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ledger Status</p>
            <h3 className="text-xl font-bold">Live on Solana</h3>
            <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Real-Time Sync
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <BrainCircuit />
              <h3 className="font-bold">AI-Generated Skill Verification Report</h3>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-slate-400 font-bold uppercase">Match Confidence</p>
              <p className="text-2xl font-black text-purple-600">85%</p>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified Strengths</p>
            <div className="flex flex-wrap gap-2">
              {['Rust Performance Optimization', 'Anchor Framework', 'DeFi Protocol', 'Triton RPC'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-slate-600 italic">
                "Alex demonstrates an exceptional mastery of the Solana Sealevel runtime..."
              </p>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-linear-to-r from-purple-500 to-emerald-400 h-2 rounded-full w-[85%]" />
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-2 border border-slate-200 rounded-lg text-xs font-bold flex items-center gap-2">
                <Share2 size={14} /> Share Report
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-lg text-xs font-bold flex items-center gap-2">
                <Download size={14} /> Download Report
              </button>
            </div>
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 flex items-center gap-4">
              <div className="bg-slate-100 p-3 rounded-lg"><ScanLine /></div>
              <div>
                <p className="font-bold text-sm">Scan to Verify</p>
                <p className="text-xs text-slate-400">Instant mobile verification for in-person validation.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100">
              <p className="font-bold text-sm mb-2">Security Hash</p>
              <code className="bg-slate-100 p-3 rounded text-[10px] block font-mono text-slate-600">
                CERT-SHA256: 4f8d2e1a9c3b7f6e5d4c3b2a1a0b9c8d7e6f5a4...
              </code>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SkillVerifier;
