import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function UserNavbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 sticky top-0 z-40">
      <h1 className="text-xl font-semibold text-gray-700">
        Welcome, {user?.name || 'User'} 👋
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}