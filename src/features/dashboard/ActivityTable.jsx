import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import { getAllCertificates } from '../../utils/api';
import { Loader2 } from 'lucide-react';

export default function ActivityTable() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCertificates(25)
      .then(res => {
        if (res.success) {
          setActivities(res.certificates.map(c => ({
            id: c.id,
            student: c.studentName,
            action: "Certificate Minted",
            date: new Date(c.issueDate).toLocaleDateString(),
            status: "Complete"
          })));
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Card className="overflow-hidden">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin text-indigo-600" />
        </div>
      ) : activities.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Student</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Action</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Date</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">{activity.student}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{activity.action}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{activity.date}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${activity.status === 'Complete' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-10 text-slate-500 text-sm italic">
          No recent activity found on the ledger.
        </div>
      )}
    </Card>
  );
}
