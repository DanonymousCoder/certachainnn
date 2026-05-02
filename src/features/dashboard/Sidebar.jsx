import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Award,
  BrainCircuit,
  Plus
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard/overview' },
    { name: 'Issue Credentials', icon: <Award size={18} />, path: '/dashboard/issue' },
    { name: 'AI Skill Verifier', icon: <BrainCircuit size={18} />, path: '/verifier' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-slate-100 sticky top-0 p-6">
      <div className="mb-10">
        <h2 className="font-bold text-slate-900 text-lg">Institution Portal</h2>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
          Solana Devnet
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
              location.pathname === item.path
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-100">
        <Link
          to="/dashboard/issue"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg font-bold text-sm shadow-md transition-all"
        >
          <Plus size={18} />
          Issue Certificate
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
