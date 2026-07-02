import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getContact, updateContact } from '../../services/contactService';
import MessageBox from '../../components/MessageBox';

export default function UpdateContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', email: '', phoneNumber: '',
    address: '', description: '', favourite: false,
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getContact(id);
        const c = res.data;
        setForm({
          name: c.name || '',
          email: c.email || '',
          phoneNumber: c.phoneNumber || '',
          address: c.address || '',
          description: c.description || '',
          favourite: c.favourite || false,
        });
      } catch {
        setError('Failed to load contact.');
      } finally {
        setFetching(false);
      }
    };
    fetch();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      if (image) formData.append('image', image);
      await updateContact(id, formData);
      navigate('/user/contacts');
    } catch {
      setError('Failed to update contact.');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Update Contact</h1>

      <div className="bg-white shadow rounded-xl p-8 max-w-2xl">
        <MessageBox message={error} type="error" onClose={() => setError('')} />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                name="name" required value={form.name} onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input
                name="phoneNumber" required value={form.phoneNumber} onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                name="address" value={form.address} onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description" value={form.description} onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">New Profile Picture</label>
            <input
              type="file" accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox" name="favourite" id="favourite"
              checked={form.favourite} onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="favourite" className="text-sm font-medium">
              Mark as Favourite
            </label>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit" disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? 'Updating...' : 'Update Contact'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/user/contacts')}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}