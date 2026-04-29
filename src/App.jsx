import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentProfile from './pages/StudentProfile';
import Overview from './pages/Dashboard/Overview';
import SkillVerifier from './pages/SkillVerifier';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile/:id" element={<StudentProfile />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/verifier" element={<SkillVerifier />} />
        <Route path="/verifier" element={<SkillVerifier />} />

        {/* 404 Fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
