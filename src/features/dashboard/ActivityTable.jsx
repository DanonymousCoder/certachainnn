import Card from '../../components/ui/Card';

export default function ActivityTable() {
  const activities = [
    { id: 1, student: "Alex Rivera", action: "Certificate Minted", date: "2024-06-15", status: "Complete" },
    { id: 2, student: "Jordan Chen", action: "Verification Requested", date: "2024-06-14", status: "Pending" },
    { id: 3, student: "Sam Johnson", action: "Profile Verified", date: "2024-06-13", status: "Complete" }
  ];

  return (
    <Card className="overflow-hidden">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
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
              <td className="px-4 py-3 text-sm text-gray-900">{activity.student}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{activity.action}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{activity.date}</td>
              <td className="px-4 py-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${activity.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {activity.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
