import { Link2 } from 'lucide-react';

const SearchInput = () => (
  <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
    <div className="pl-4 text-slate-400">
      <Link2 size={18} />
    </div>
    <input 
      type="text" 
      placeholder="Paste a student wallet or profile link"
      className="flex-1 bg-transparent py-3 text-sm focus:outline-none placeholder:text-slate-300"
    />
    <button className="bg-black text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
      Verify
    </button>
  </div>
);

export default SearchInput;
