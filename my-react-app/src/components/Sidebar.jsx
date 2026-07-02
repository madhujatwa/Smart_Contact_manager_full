import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/user/dashboard', label: '🏠 Dashboard' },
  { to: '/user/contacts', label: '📋 Contacts' },
  { to: '/user/contacts/add', label: '➕ Add Contact' },
  { to: '/user/contacts/search', label: '🔍 Search' },
  { to: '/user/profile', label: '👤 Profile' },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed top-0 left-0 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">SCM</h1>
        <p className="text-xs text-slate-400 mt-1">Smart Contact Manager</p>
      </div>

      <ul className="mt-4 flex-1">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`block px-6 py-3 text-sm transition-colors hover:bg-slate-800 ${
                pathname === to ? 'bg-blue-600 text-white' : 'text-slate-300'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}