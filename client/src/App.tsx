import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SiteNavbar from './components/SiteNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './pages/Admin/AdminLayout';
import AdminEvents from './pages/Admin/AdminEvents';
import AdminEventForm from './pages/Admin/AdminEventForm';
import AdminRegistrations from './pages/Admin/AdminRegistrations';
import AdminSettings from './pages/Admin/AdminSettings';
import { useAuth } from './context/AuthContext';

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function RequireAdminAuth({ children }: { children: React.ReactNode }) {
  const { isAdminAuthenticated } = useAuth();
  return isAdminAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/events/:id"
          element={
            <PublicLayout>
              <EventDetail />
            </PublicLayout>
          }
        />
        <Route
          path="/events/:id/register"
          element={
            <PublicLayout>
              <Register />
            </PublicLayout>
          }
        />

        {/* Admin login */}
        <Route
          path="/admin/login"
          element={
            <PublicLayout>
              <AdminLogin />
            </PublicLayout>
          }
        />

        {/* Admin routes (require authentication) */}
        <Route path="/admin" element={<RequireAdminAuth><AdminLayout /></RequireAdminAuth>}>
          <Route index element={<Navigate to="/admin/events" replace />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="events/new" element={<AdminEventForm />} />
          <Route path="events/:id/edit" element={<AdminEventForm />} />
          <Route path="registrations" element={<AdminRegistrations />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
