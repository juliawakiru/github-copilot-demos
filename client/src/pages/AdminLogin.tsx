import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export default function AdminLogin() {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/events', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        setError('Invalid admin key. Please try again.');
        return;
      }
      if (!res.ok) {
        setError('Server error. Please try again later.');
        return;
      }
      login(token);
      navigate('/admin/events');
    } catch {
      setError('Unable to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '60vh' }}
    >
      <div style={{ width: '360px' }}>
        <h2 className="mb-4">Admin Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Admin API Key</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter admin key"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="w-100" disabled={loading}>
            {loading ? 'Verifying…' : 'Login'}
          </Button>
        </Form>
      </div>
    </Container>
  );
}
