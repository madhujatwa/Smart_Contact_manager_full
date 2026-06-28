import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import { useState } from "react";

export default function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="min-h-screen bg-slate-100">

      {/* Top Navbar */}

     <Navbar
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
/>

      {/* Body */}

     <div className="flex flex-col lg:flex-row pt-20">

        {/* Sidebar */}

       <div className="w-full lg:w-72">
  <Sidebar
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
/>
</div>

        {/* Main Content */}

<main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <Outlet />

        </main>

      </div>

    </div>

  );

}