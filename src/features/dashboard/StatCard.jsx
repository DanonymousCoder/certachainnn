import Card from '../../components/ui/Card';

export default function StatCard({ label, value, change, trend, alert, sub }) {
  return (
    <Card className="text-center">
      <p className="text-sm font-semibold text-gray-600 mb-2">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      {change && <p className="text-xs text-green-600">↑ {change} from last month</p>}
      {trend && <p className="text-xs font-semibold text-purple-500">{trend}</p>}
      {alert && <p className="text-xs font-semibold text-red-500">{alert}</p>}
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </Card>
  );
}
