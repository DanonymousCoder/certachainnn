import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { label: 'Overview', href: '/dashboard/overview' },
    { label: 'AI Skill Verifier', href: '/dashboard/verifier' },
    { label: 'Legacy Verifier', href: '/dashboard/verifier-legacy' },
    { label: 'Student Profile', href: '/profile/1' },
    { label: 'Landing', href: '/' },
    { label: 'Classic Home', href: '/home' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 h-fit sticky top-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Menu</h3>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
