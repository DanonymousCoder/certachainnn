import { BrainCircuit } from 'lucide-react';

const AIReportCard = () => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <BrainCircuit size={18} className="text-indigo-600" />
        <h3 className="text-lg font-bold">AI Skill Report</h3>
      </div>
      <div className="text-sm text-slate-500 font-bold">Match Confidence: <span className="text-indigo-600">Live</span></div>
    </div>

    <p className="text-sm text-slate-600 leading-relaxed">
      Run a verification to load a live skill report from the backend and display the returned score and strengths here.
    </p>
  </div>
);

export default AIReportCard;
