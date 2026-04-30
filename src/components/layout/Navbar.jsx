import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">CertaChain</Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/dashboard/institution"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}`
            }
          >
            Institution
          </NavLink>
          <NavLink
            to="/profile/1"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}`
            }
          >
            Students
          </NavLink>
          <NavLink
            to="/verifier"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}`
            }
          >
            Employers
          </NavLink>
        </div>
        <Link
          to="/dashboard/verifier"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Connect Wallet
        </Link>
      </div>
    </nav>
  );
}
