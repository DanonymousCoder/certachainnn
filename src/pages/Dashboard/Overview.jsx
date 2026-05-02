import React, { useState, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../features/dashboard/Sidebar';
import StatCard from '../../features/dashboard/StatCard';
import ActivityTable from '../../features/dashboard/ActivityTable';
import { getStats } from '../../utils/api';

export default function Overview() {
  const [stats, setStats] = useState({ totalCertificates: '--', totalStudents: '--', avgVerificationTime: null });

  useEffect(() => {
    getStats().then(res => {
      if (res.success) setStats(res);
    }).catch(() => {});
  }, []);

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
              <StatCard label="Total Students" value={stats.totalStudents} sub="Distinct wallet holders" />
              <StatCard label="Credentials Minted" value={stats.totalCertificates} sub="On-chain records" />
              <StatCard label="Avg Verification Time" value={stats.avgVerificationTime || 'N/A'} sub="Not tracked by the current API" />
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
