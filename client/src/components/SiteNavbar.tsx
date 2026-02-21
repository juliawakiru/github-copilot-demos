import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { SunFill, MoonStarsFill } from 'react-bootstrap-icons';
import { useConfig } from '../context/ConfigContext';
import { useTheme } from '../context/ThemeContext';

export default function SiteNavbar() {
  const { config } = useConfig();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <Navbar className="site-navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          {config.logoUrl ? (
            <img src={config.logoUrl} alt={config.name} height={32} className="me-2" />
          ) : null}
          {config.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === '/'}
            >
              Events
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin"
              active={location.pathname.startsWith('/admin')}
            >
              Admin
            </Nav.Link>
            <Button
              variant="link"
              className="text-white p-1 ms-2"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <MoonStarsFill size={18} /> : <SunFill size={18} />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
