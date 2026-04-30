import React from 'react';
import {
  LayoutDashboard,
  Award,
  BarChart2,
  BookOpen,
  Settings,
  Plus
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
    { name: 'Issue Credentials', icon: <Award size={18} /> },
    { name: 'Analytics', icon: <BarChart2 size={18} /> },
    { name: 'Registry', icon: <BookOpen size={18} /> },
    { name: 'Settings', icon: <Settings size={18} /> },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-slate-100 sticky top-0 p-6 ml-0">
      <div className="mb-10">
        <h2 className="font-bold text-slate-900 text-lg">Institution Portal</h2>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
          Solana Network
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
              item.active
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-50">
        <button className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-3 rounded-lg font-bold text-sm shadow-md transition-all">
          <Plus size={18} />
          Mint Certificate
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
