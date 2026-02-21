import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {
  CalendarEvent, People, Gear, ArrowLeft, BoxArrowRight,
} from 'react-bootstrap-icons';
import { useConfig } from '../../context/ConfigContext';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout() {
  const { config } = useConfig();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { to: '/admin/events', label: 'Events', icon: <CalendarEvent className="me-2" /> },
    { to: '/admin/registrations', label: 'Registrations', icon: <People className="me-2" /> },
    { to: '/admin/settings', label: 'Settings', icon: <Gear className="me-2" /> },
  ];

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="admin-sidebar d-flex flex-column p-3" style={{ width: '220px', flexShrink: 0 }}>
        <div className="text-white fw-bold fs-5 mb-1 ps-2">{config.name}</div>
        <div className="text-white opacity-50 small ps-2 mb-4">Admin Panel</div>

        <Nav className="flex-column flex-grow-1">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link px-3 py-2 ${location.pathname.startsWith(to) ? 'active' : ''}`}
            >
              {icon}{label}
            </Link>
          ))}
        </Nav>

        <div className="mt-auto">
          <Link to="/" className="nav-link px-3 py-2 text-white opacity-75">
            <ArrowLeft className="me-2" />
            Public Site
          </Link>
          <button
            onClick={handleLogout}
            className="nav-link px-3 py-2 text-white opacity-75 btn btn-link w-100 text-start"
          >
            <BoxArrowRight className="me-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-grow-1 bg-light">
        <Outlet />
      </div>
    </div>
  );
}
