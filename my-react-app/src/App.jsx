import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import UserLayout from './components/UserLayout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';

import Dashboard from './pages/user/Dashboard';
import Profile from './pages/user/Profile';
import Contacts from './pages/user/Contacts';
import AddContact from './pages/user/AddContact';
import UpdateContact from './pages/user/UpdateContact';
import Search from './pages/user/Search';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected User Routes */}
          <Route element={<ProtectedRoute><UserLayout /></ProtectedRoute>}>
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/contacts" element={<Contacts />} />
            <Route path="/user/contacts/add" element={<AddContact />} />
            <Route path="/user/contacts/update/:id" element={<UpdateContact />} />
            <Route path="/user/contacts/search" element={<Search />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}