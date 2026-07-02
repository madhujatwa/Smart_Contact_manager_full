import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import UserNavbar from './UserNavbar';

export default function UserLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 min-h-screen bg-gray-100 flex flex-col">
        <UserNavbar />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}