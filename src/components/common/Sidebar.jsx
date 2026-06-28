import {
  FaHome,
  FaUserPlus,
  FaAddressBook,
  FaStar,
  FaUser,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const logout = () => {
    localStorage.clear();
    setSidebarOpen(false);
    navigate("/login");
  };

  const menuClass = ({ isActive }) =>
    `flex items-center justify-between p-3 md:p-4 rounded-xl transition-all ${isActive
      ? "bg-blue-600 text-white"
      : "hover:bg-blue-100 text-slate-700"
    }`;

  return (
    <>
      <aside
        className={`
fixed
top-20
left-0
h-[calc(100vh-80px)]
w-72
bg-white
shadow-xl
z-50
transform
transition-transform
duration-300

${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

lg:translate-x-0
lg:static
lg:h-auto
lg:block
`}
      >      {/* Profile */}

        <div className="flex flex-col items-center py-6 border-b">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg" />

          <h2 className="mt-4 text-xl font-bold">
            {user.name || "User"}
          </h2>

        </div>

        {/* Menu */}

        <div className="p-3 md:p-4 space-y-2">

          <NavLink to="/dashboard" className={menuClass}
            onClick={() => setSidebarOpen(false)}>
            <div className="flex items-center gap-3">
              <FaHome />
              Dashboard
            </div>
          </NavLink>

          <NavLink to="/dashboard/add" className={menuClass}
            onClick={() => setSidebarOpen(false)}>
            <div className="flex items-center gap-3">
              <FaUserPlus />
              Add Contact
            </div>

            <span className="text-xs bg-blue-500 text-white px-2 rounded-full">
              New
            </span>
          </NavLink>

          <NavLink to="/dashboard/view" className={menuClass} onClick={() => setSidebarOpen(false)}>
            <div className="flex items-center gap-3">
              <FaAddressBook />
              View Contacts
            </div>

            <span className="text-xs bg-slate-200 px-2 rounded-full">
              0
            </span>
          </NavLink>

          <NavLink to="/dashboard/favorites" className={menuClass} onClick={() => setSidebarOpen(false)}>
            <div className="flex items-center gap-3">
              <FaStar />
              Favorites
            </div>
          </NavLink>

          <NavLink to="/dashboard/profile" className={menuClass} onClick={() => setSidebarOpen(false)}>
            <div className="flex items-center gap-3">
              <FaUser />
              Profile
            </div>
          </NavLink>

          <button
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-100 text-slate-700"
          >
            <FaCommentDots />
            Feedback
          </button>

          <button
            onClick={logout}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-100 text-red-600"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </aside>
      {sidebarOpen && (

        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
        />

      )}

    </>

  );

}