import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextValue {
  isAdminAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  isAdminAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => !!localStorage.getItem('adminToken'),
  );

  const login = (token: string) => {
    localStorage.setItem('adminToken', token);
    setIsAdminAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAdminAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
