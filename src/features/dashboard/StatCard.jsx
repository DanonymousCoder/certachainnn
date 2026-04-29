import Card from '../../components/ui/Card';

export default function StatCard({ label, value, change }) {
  return (
    <Card className="text-center">
      <p className="text-sm font-semibold text-gray-600 mb-2">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      {change && <p className="text-xs text-green-600">↑ {change} from last month</p>}
    </Card>
  );
}
