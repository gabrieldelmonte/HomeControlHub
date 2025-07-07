import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import FAQ from "./components/FAQ";
import Support from "./components/Support";
import Profile from "./components/Profile";
import AddDevice from "./components/AddDevice";
import DeviceDetails from "./components/DeviceDetails";

const App: React.FC = () => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return Boolean(token && token.trim() !== "");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/register"
          element={
            <Register />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />
        <Route
          path="/faq"
          element={<FAQ />}
        />
        <Route
          path="/support"
          element={<Support />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/add-device"
          element={<AddDevice />}
        />
        <Route
          path="/device/:deviceId"
          element={<DeviceDetails />}
        />
        <Route
          path="/"
          element={
            <Login />
          }
        />
      </Routes>
    </Router>
  );
};

/*
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Login />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated() ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/faq"
          element={
            isAuthenticated() ? <FAQ /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/support"
          element={
            isAuthenticated() ? <Support /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/"
          element={
            <Navigate
              to={isAuthenticated() ? "/dashboard" : "/login"}
              replace
            />
          }
        />
      </Routes>
    </Router>
  );
};
*/

export default App;
