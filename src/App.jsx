import { Routes, Route } from "react-router-dom";

// Landing Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboard Layout
import DashboardLayout from "./components/layouts/DashboardLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Dashboard Pages
import Dashboard from "./pages/user/Dashboard";
import AddContact from "./pages/user/AddContact";
import ViewContacts from "./pages/user/ViewContacts";
import ContactDetails from "./pages/user/ContactDetails";
import EditContact from "./pages/user/EditContact";
import Favorites from "./pages/user/Favorites";
import Profile from "./pages/user/Profile";
import NotFound from "./pages/user/NotFound";
import OAuthSuccess from "./pages/auth/OAuthSuccess";

export default function App() {

  return (

    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Contact Page */}
      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="add"
          element={<AddContact />}
        />

        <Route
          path="view"
          element={<ViewContacts />}
        />

        <Route
          path="contact/:id"
          element={<ContactDetails />}
        />

        <Route
          path="edit/:id"
          element={<EditContact />}
        />

        <Route
          path="favorites"
          element={<Favorites />}
        />

        <Route
          path="profile"
          element={<Profile />}
        />

      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
      <Route
    path="/oauth-success"
    element={<OAuthSuccess />}
/>

    </Routes>

  );

}