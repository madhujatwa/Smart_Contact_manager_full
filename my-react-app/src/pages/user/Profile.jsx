import { useAuth } from '../../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="bg-white shadow rounded-xl p-8 max-w-xl">
        {/* Avatar */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-2xl font-bold">{user?.name}</p>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500 text-sm">Full Name</span>
            <span className="font-medium">{user?.name}</span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500 text-sm">Email</span>
            <span className="font-medium">{user?.email}</span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500 text-sm">Role</span>
            <span className="font-medium capitalize">{user?.role || 'User'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}