import { ScholarshipCard } from './ScholarshipCard';
import { Scholarship } from '../data/scholarships';
import { Search } from 'lucide-react';

interface ScholarshipListProps {
  scholarships: Scholarship[];
  isFiltered: boolean;
}

export function ScholarshipList({ scholarships, isFiltered }: ScholarshipListProps) {
  if (scholarships.length === 0 && isFiltered) {
    return (
      <div className="text-center py-16">
        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">No scholarships found</h3>
        <p className="text-gray-500">
          Try adjusting your filters to see more results
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">
          {isFiltered ? `${scholarships.length} Scholarship${scholarships.length !== 1 ? 's' : ''} Found` : 'All Scholarships'}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>
    </div>
  );
}
