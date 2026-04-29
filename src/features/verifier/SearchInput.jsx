import Card from '../../components/ui/Card';
import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <Card className="flex items-center gap-3">
      <Search size={20} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search skills or credentials..."
        className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400"
      />
    </Card>
  );
}
