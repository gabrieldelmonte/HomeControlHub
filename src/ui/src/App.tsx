import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const App: React.FC = () => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    console.log('Checking authentication. Token:', token);
    const isAuth = Boolean(token && token.trim() !== '');
    console.log('Is authenticated:', isAuth);
    return isAuth;
  };

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated() ? <Navigate to="/dashboard" replace /> : <LoginRegister />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated() ? <Dashboard /> : <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated() ? "/dashboard" : "/login"} replace />} 
          />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
