import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WalletContextProvider from './components/WalletContextProvider';
import LandingPage from './pages/LandingPage';
import StudentProfile from './pages/StudentProfile';
import Overview from './pages/Dashboard/Overview';
import Institution from './pages/Dashboard/Institution';
import SkillVerifier from './pages/SkillVerifier';
import IssueCertificate from './pages/IssueCertificate';
import ClaimCredentials from './pages/ClaimCredentials';

export default function App() {
  return (
    <WalletContextProvider>
      <Router>
        <Routes>
          {/* Landing / Home */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />

          {/* Student profile - requires wallet connection */}
          <Route path="/profile/:id" element={<StudentProfile />} />
          <Route path="/profile/me" element={<StudentProfile />} />
          <Route path="/claim" element={<ClaimCredentials />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/institution" element={<Institution />} />
          <Route path="/dashboard/issue" element={<IssueCertificate />} />

          {/* Skill Verifier */}
          <Route path="/verifier" element={<SkillVerifier />} />
          <Route path="/dashboard/verifier" element={<SkillVerifier />} />

          {/* Redirect unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </WalletContextProvider>
  );
}
