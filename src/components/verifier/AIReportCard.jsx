import { BrainCircuit } from 'lucide-react';

const AIReportCard = () => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <BrainCircuit size={18} className="text-indigo-600" />
        <h3 className="text-lg font-bold">AI Skill Report</h3>
      </div>
      <div className="text-sm text-slate-500 font-bold">Match Confidence: <span className="text-indigo-600">85%</span></div>
    </div>

    <p className="text-sm text-slate-600 leading-relaxed">
      This report summarizes skill alignment and verified strengths derived from CertaChain's neural verifier and on-chain credential checks.
    </p>
  </div>
);

export default AIReportCard;
