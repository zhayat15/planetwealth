import React, { useState, useEffect } from 'react';
import CMSLogin from './CMSLogin';
import CMSDashboard from './CMSDashboard';

const CMSApp: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Check for existing session on component mount
  useEffect(() => {
    const session = localStorage.getItem('cms_session');
    if (session) {
      const sessionData = JSON.parse(session);
      // Check if session is still valid (24 hours)
      if (Date.now() - sessionData.timestamp < 24 * 60 * 60 * 1000) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('cms_session');
      }
    }
  }, []);

  const handleLogin = (credentials: { username: string; password: string }) => {
    // Simple authentication - in production, this would be handled by a secure backend
    if (credentials.username === 'admin' && credentials.password === 'planetwealth2025') {
      setIsAuthenticated(true);
      setLoginError('');
      
      // Store session
      localStorage.setItem('cms_session', JSON.stringify({
        user: credentials.username,
        timestamp: Date.now()
      }));
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('cms_session');
  };

  if (!isAuthenticated) {
    return <CMSLogin onLogin={handleLogin} error={loginError} />;
  }

  return <CMSDashboard onLogout={handleLogout} />;
};

export default CMSApp;