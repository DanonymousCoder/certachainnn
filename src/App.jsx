import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import StudentProfile from './pages/StudentProfile';
import Overview from './pages/Dashboard/Overview';
import Institution from './pages/Dashboard/Institution';
import Verifier from './pages/Dashboard/Verifier';
import SkillVerifier from './pages/SkillVerifier';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<StudentProfile />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/institution" element={<Institution />} />
        <Route path="/dashboard/verifier" element={<SkillVerifier />} />
        <Route path="/dashboard/verifier-legacy" element={<Verifier />} />
        <Route path="/verifier" element={<SkillVerifier />} />

        {/* 404 Fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
