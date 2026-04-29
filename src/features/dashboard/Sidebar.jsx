import Card from '../../components/ui/Card';

export default function Sidebar() {
  const menuItems = [
    { label: "Overview", href: "/dashboard/overview", active: true },
    { label: "AI Skill Verifier", href: "/dashboard/verifier" },
    { label: "Students", href: "/dashboard/students" },
    { label: "Settings", href: "/dashboard/settings" }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 h-fit sticky top-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Menu</h3>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
              item.active
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
