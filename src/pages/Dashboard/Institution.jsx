import { useState, useEffect } from 'react';
import { Calendar, Download, Search, ArrowUpRight } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../features/dashboard/Sidebar';
import StatCard from '../../features/dashboard/StatCard';
import ActivityTable from '../../features/dashboard/ActivityTable';
import { getAllCertificates, getStats } from '../../utils/api';

export default function Institution() {
  const [stats, setStats] = useState({ totalCertificates: '--', totalStudents: '--', avgVerificationTime: null });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getStats().then(res => {
      if (res.success) setStats(res);
    }).catch(() => {});

    getAllCertificates(50).then((res) => {
      if (!res.success) {
        return;
      }

      const today = new Date();
      const lastSevenDays = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() - (6 - index));
        const key = date.toISOString().slice(0, 10);
        const count = res.certificates.filter((certificate) => (
          certificate.issueDate.slice(0, 10) === key
        )).length;

        return {
          label: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
          count
        };
      });

      setChartData(lastSevenDays);
    }).catch(() => {});
  }, []);

  const maxCount = Math.max(...chartData.map((item) => item.count), 1);

  return (
    <div className="flex min-h-screen bg-[#f8f9ff] flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <div className="flex items-start">
          <Sidebar />
          <section className="flex-1">
            <div className="max-w-7xl mx-auto w-full px-6 py-10 lg:py-14 space-y-8">
              <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
                  <p className="text-sm text-gray-500">Manage academic records for your institution on Solana.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-gray-50">
                    <Calendar size={14} /> Last 30 Days
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-gray-800">
                    <Download size={14} /> Export Ledger
                  </button>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard label="Total Certificates Issued" value={stats.totalCertificates} sub="On-chain records" />
                <StatCard label="Active Students" value={stats.totalStudents} sub="Distinct wallet holders" />
                <StatCard label="Avg Verification Time" value={stats.avgVerificationTime || 'N/A'} sub="Not tracked by the current API" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="font-bold text-slate-800">Issuance Trends</h3>
                    <div className="flex bg-slate-50 p-1 rounded-md text-[10px] font-bold">
                      <button className="px-3 py-1 bg-white shadow-sm rounded text-indigo-600">Mints</button>
                      <button className="px-3 py-1 text-gray-400">Verifications</button>
                    </div>
                  </div>
                  <div className="flex items-end justify-between h-48 gap-2">
                    {chartData.map((item) => (
                      <div key={item.label} className="flex flex-col items-center flex-1 gap-4">
                        <div
                          style={{ height: `${(item.count / maxCount) * 100}%` }}
                          className={`w-full rounded-t-sm transition-all ${item.count === maxCount ? 'bg-[#7030d8]' : 'bg-indigo-100'}`}
                        />
                        <span className="text-[10px] font-bold text-gray-400">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#111827] p-8 rounded-xl text-white space-y-6">
                  <Search className="text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold">Student Registry</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Locate academic records across the Solana ledger using wallet addresses.
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      placeholder="Enter wallet address..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-xs focus:outline-none"
                    />
                    <button className="absolute right-2 top-2 bg-white text-black p-1 rounded">
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <ActivityTable />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
