import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchContacts, deleteContact } from '../../services/contactService';
import MessageBox from '../../components/MessageBox';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const [contacts, setContacts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    setLoading(true);
    setSearched(false);
    try {
      const res = await searchContacts(keyword.trim(), 0, 100);
      const data = res.data;
      setContacts(data.content || data);
      setSearched(true);
    } catch {
      setMessage({ text: 'Search failed. Try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    try {
      await deleteContact(id);
      setContacts((prev) => prev.filter((c) => c.id !== id));
      setMessage({ text: 'Contact deleted.', type: 'success' });
    } catch {
      setMessage({ text: 'Failed to delete.', type: 'error' });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Search Contacts</h1>

      <MessageBox
        message={message.text}
        type={message.type}
        onClose={() => setMessage({ text: '', type: '' })}
      />

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-3 mb-8">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search by name, email or phone..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {loading && (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}

      {searched && !loading && contacts.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg">No contacts found for "{keyword}"</p>
        </div>
      )}

      {contacts.length > 0 && (
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">{c.name}</td>
                  <td className="px-6 py-4 text-gray-500">{c.email}</td>
                  <td className="px-6 py-4 text-gray-500">{c.phoneNumber}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link
                      to={`/user/contacts/update/${c.id}`}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200 text-xs"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}