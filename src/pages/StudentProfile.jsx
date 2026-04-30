import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProfileHeader from '../components/profile/ProfileHeader';
import CredentialCard from '../components/profile/CredentialCard';
import VerificationSidebar from '../components/profile/VerificationSidebar';

const StudentProfile = () => {
  const credentials = [
    { title: 'M.S. in Computer Science', issuer: 'Stanford University', date: 'ISSUED JUNE 2023', type: "MASTER'S DEGREE", icon: 'edu' },
    { title: 'Blockchain Security Expert', issuer: 'Consensys Academy', date: 'ISSUED JAN 2024', type: 'CERTIFICATION', icon: 'shield' },
    { title: 'Senior Rust Engineer', issuer: 'Solana Labs (Verified)', date: 'ISSUED AUG 2023', type: 'WORK EXPERIENCE', icon: 'code' },
    { title: 'Cloud Architect Professional', issuer: 'AWS (Verified by CertaChain)', date: 'ISSUED NOV 2023', type: 'PROFESSIONAL LICENSE', icon: 'license' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <ProfileHeader />

            <section className="space-y-6">
              <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-bold text-slate-800">Professional Credentials</h2>
                <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">4 On-Chain Records</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {credentials.map((cred, index) => (
                  <CredentialCard key={index} {...cred} />
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <VerificationSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentProfile;
