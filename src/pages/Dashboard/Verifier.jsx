import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../features/dashboard/Sidebar';
import SearchInput from '../../features/verifier/SearchInput';
import AIReportCard from '../../features/verifier/AIReportCard';

export default function Verifier() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className="flex items-start">
          <Sidebar />

          <div className="flex-1">
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">AI Skill Verifier</h1>

            <SearchInput />

            <AIReportCard />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
