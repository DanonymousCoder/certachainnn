import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../features/dashboard/Sidebar';
import StatCard from '../../features/dashboard/StatCard';
import ActivityTable from '../../features/dashboard/ActivityTable';

export default function Overview() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className="flex items-start">
          <Sidebar />

          <div className="flex-1">
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <StatCard label="Total Students" value="2,847" change="12%" />
              <StatCard label="Credentials Minted" value="1,256" change="23%" />
              <StatCard label="Avg Verification Time" value="2.3h" change="-5%" />
            </div>

            {/* Activity Table */}
            <ActivityTable />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
