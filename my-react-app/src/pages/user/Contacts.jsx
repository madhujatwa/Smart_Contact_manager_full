import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getContacts,
  deleteContact,
  toggleFavourite,
} from '../../services/contactService';
import MessageBox from '../../components/MessageBox';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const loadContacts = async (p = 0) => {
    setLoading(true);
    try {
      const res = await getContacts(p, 10);
      const data = res.data;
      setContacts(data.content || data);
      setTotalPages(data.totalPages || 1);
      setPage(p);
    } catch {
      setMessage({ text: 'Failed to load contacts.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts(0);
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    try {
      await deleteContact(id);
      setMessage({ text: 'Contact deleted.', type: 'success' });
      loadContacts(page);
    } catch {
      setMessage({ text: 'Failed to delete.', type: 'error' });
    }
  };

  const handleFavourite = async (id) => {
    try {
      await toggleFavourite(id);
      loadContacts(page);
    } catch {
      setMessage({ text: 'Failed to update favourite.', type: 'error' });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Contacts</h1>
        <Link
          to="/user/contacts/add"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Contact
        </Link>
      </div>

      <MessageBox
        message={message.text}
        type={message.type}
        onClose={() => setMessage({ text: '', type: '' })}
      />

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : contacts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">📭</p>
          <p className="text-lg">No contacts found.</p>
          <Link to="/user/contacts/add" className="text-blue-600 hover:underline mt-2 block">
            Add your first contact
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Fav</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">{c.name}</td>
                  <td className="px-6 py-4 text-gray-500">{c.email}</td>
                  <td className="px-6 py-4 text-gray-500">{c.phoneNumber}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleFavourite(c.id)}>
                      {c.favourite ? '⭐' : '☆'}
                    </button>
                  </td>
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-6">
          <button
            disabled={page === 0}
            onClick={() => loadContacts(page - 1)}
            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {page + 1} of {totalPages}
          </span>
          <button
            disabled={page + 1 >= totalPages}
            onClick={() => loadContacts(page + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}