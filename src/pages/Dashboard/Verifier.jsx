import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../features/dashboard/Sidebar';
import SearchInput from '../../features/verifier/SearchInput';
import AIReportCard from '../../features/verifier/AIReportCard';

export default function Verifier() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">AI Skill Verifier</h1>

            <SearchInput />

            <AIReportCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
