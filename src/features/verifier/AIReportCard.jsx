import { BrainCircuit, Download, Share2 } from 'lucide-react';

const AIReportCard = () => (
  <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
    <div className="p-6 border-b border-slate-50 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <BrainCircuit size={20} className="text-slate-800" />
        <h3 className="font-bold text-slate-800">AI-Generated Skill Verification Report</h3>
      </div>
      <div className="text-right">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Match Confidence</p>
        <p className="text-2xl font-black text-[#7030d8]">Live</p>
      </div>
    </div>

    <div className="p-8 space-y-8">
      <div className="space-y-3">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Strengths</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-md border border-indigo-100">
            Awaiting backend response
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Analysis</p>
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-purple-500">
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Run a live credential verification to populate this panel with the backend-generated report."
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role Alignment</p>
          <p className="text-xs font-bold text-slate-700">Pending</p>
        </div>
        <div className="w-full h-2.5 bg-indigo-50 rounded-full overflow-hidden">
          <div
            className="h-full w-0 rounded-full"
            style={{ backgroundImage: 'linear-gradient(to right, #a855f7, #34d399)' }}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button className="px-6 py-2.5 border border-slate-200 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-50">
          <Share2 size={14} /> Share Report
        </button>
        <button className="px-6 py-2.5 bg-black text-white rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-800">
          <Download size={14} /> Download Full Report
        </button>
      </div>
    </div>
  </div>
);

export default AIReportCard;
