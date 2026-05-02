import { MapPin, GraduationCap, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';

const shortWallet = (walletAddress = '') => (
  walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Wallet unavailable'
);

const ProfileHeader = ({ profile }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-8 items-start sm:items-center">
    <div className="relative">
      <img 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
        className="w-32 h-32 rounded-xl object-cover" 
        alt="Profile"
      />
      <div className="absolute -bottom-2 -right-2 bg-[#7030d8] p-1.5 rounded-lg border-4 border-white">
        <ShieldCheck size={16} className="text-white" />
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold text-slate-900">{profile.name}</h1>
        <div className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
          <CheckCircle2 size={12} className="text-indigo-500" />
          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-tighter">Identity Verified</span>
        </div>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
        {profile.summary}
      </p>
      <div className="flex flex-wrap gap-6 text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
        <span className="flex items-center gap-2"><MapPin size={14}/> On-Chain Identity</span>
        <span className="flex items-center gap-2"><GraduationCap size={14}/> {profile.primaryCourse}</span>
        <span className="flex items-center gap-2"><Globe size={14} /> {shortWallet(profile.walletAddress)}</span>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
