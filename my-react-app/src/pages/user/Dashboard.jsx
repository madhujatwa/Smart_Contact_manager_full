import { useEffect, useState } from 'react';
import { getContacts } from '../../services/contactService';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ total: 0, favourites: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getContacts(0, 1000);
        const contacts = res.data.content || res.data;
        const favourites = contacts.filter((c) => c.favourite).length;
        setStats({ total: contacts.length, favourites });
      } catch {
        console.log('Failed to load stats');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome back, {user?.name} 👋</p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Total Contacts</p>
          <p className="text-4xl font-bold text-blue-600 mt-2">
            {loading ? '...' : stats.total}
          </p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Favourites</p>
          <p className="text-4xl font-bold text-yellow-500 mt-2">
            {loading ? '...' : stats.favourites}
          </p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500 text-sm">Account</p>
          <p className="text-lg font-semibold text-gray-700 mt-2 truncate">
            {user?.email}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/user/contacts/add"
          className="bg-blue-600 text-white rounded-xl p-5 hover:bg-blue-700 transition"
        >
          <p className="text-2xl mb-2">➕</p>
          <p className="font-semibold">Add Contact</p>
        </Link>
        <Link
          to="/user/contacts"
          className="bg-white shadow rounded-xl p-5 hover:shadow-md transition"
        >
          <p className="text-2xl mb-2">📋</p>
          <p className="font-semibold">View All Contacts</p>
        </Link>
        <Link
          to="/user/contacts/search"
          className="bg-white shadow rounded-xl p-5 hover:shadow-md transition"
        >
          <p className="text-2xl mb-2">🔍</p>
          <p className="font-semibold">Search Contacts</p>
        </Link>
      </div>
    </div>
  );
}