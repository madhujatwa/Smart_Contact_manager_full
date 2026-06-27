import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

export default function DashboardLayout() {

  return (

    <div className="min-h-screen bg-slate-100">

      {/* Top Navbar */}

      <Navbar />

      {/* Body */}

      <div className="flex pt-20">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <main className="flex-1 p-8 overflow-auto">

          <Outlet />

        </main>

      </div>

    </div>

  );

}