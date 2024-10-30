import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import AdminLayout from './layouts/AdminLayout';
import GeneralLayout from './layouts/GeneralLayout';
import Loader from './components/Loader'; // Loader component
import Services from './pages/general/Services';
import GameSection from './pages/general/GameSection';
import GameSect from './pages/general/GameSect';
import MemoryGame from './pages/Games/MemoryGames';
import MathGame from './pages/Games/MathGame';
import WordMatch from './pages/Games/WordMatch';
import User from './pages/admin/User';
import ScoreTracking from './pages/admin/ScoreTracking';
import UploadVideos from './pages/admin/UploadVideos';

// Lazy load the pages
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Games = lazy(() => import('./pages/admin/User'));
const Videos = lazy(() => import('./pages/admin/ScoreTracking'));
const LandingPage = lazy(() => import('./pages/general/LandingPage'));
const AboutUs = lazy(() => import('./pages/general/AboutUs'));
const Login = lazy(() => import('./pages/general/Login'));
const Register = lazy(() => import('./pages/general/Register'));

// Custom hook to track page changes and trigger loader
const usePageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger loader on route change
    setLoading(true);

    // Ensure loader stays for at least 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second duration

    return () => clearTimeout(timer); // Cleanup timeout on unmount or route change
  }, [location]);

  return loading;
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

// Separated component to handle routes and the loader logic
const AppRoutes = () => {
  const isLoading = usePageLoader(); // Check if loading state is active

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      {/* General Pages */}
      <Route path="/" element={<GeneralLayout><LandingPage /></GeneralLayout>} />
      <Route path="/about" element={<GeneralLayout><AboutUs /></GeneralLayout>} />
      <Route path="/login" element={<GeneralLayout><Login /></GeneralLayout>} />
      <Route path="/register" element={<GeneralLayout><Register /></GeneralLayout>} />
      <Route path="/services" element={<GeneralLayout><Services /></GeneralLayout>} />
      <Route path="/VideoSection" element={<GeneralLayout><GameSection /></GeneralLayout>} />
      <Route path="/GamesSection" element={<GeneralLayout><GameSect /></GeneralLayout>} />

      {/* Admin Pages */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} /> {/* Default to dashboard */}
      <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/user" element={<AdminLayout><User /></AdminLayout>} />
      <Route path="/admin/tracking" element={<AdminLayout><ScoreTracking /></AdminLayout>} />
      <Route path="/admin/upload" element={<AdminLayout><UploadVideos /></AdminLayout>} />

      {/* Game Pages */}
      <Route path="/MemoryGames" element={<GeneralLayout><MemoryGame /></GeneralLayout>} />
      <Route path="/MathGames" element={<GeneralLayout><MathGame /></GeneralLayout>} />
      <Route path="/WordGames" element={<GeneralLayout><WordMatch /></GeneralLayout>} />
    </Routes>
  );
};

export default App;
