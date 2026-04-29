import { CheckCircle2 } from 'lucide-react';

const UserPreview = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-6">
    <img 
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" 
      className="w-20 h-20 rounded-lg object-cover" 
      alt="User" 
    />
    <div className="space-y-2 flex-1">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-slate-800">Alex Chen</h2>
        <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100">
          <CheckCircle2 size={10} />
          <span className="text-[9px] font-bold uppercase">Verified</span>
        </div>
      </div>
      <p className="text-xs text-slate-500 font-medium">Senior Smart Contract Developer • UC Berkeley Alumni</p>
      <div className="flex gap-8 pt-2">
        <div>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Certificates</p>
          <p className="text-sm font-bold text-slate-700">14 Issued</p>
        </div>
        <div className="border-l border-slate-100 pl-8">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Verification</p>
          <p className="text-sm font-bold text-purple-600">Level 3</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserPreview;
