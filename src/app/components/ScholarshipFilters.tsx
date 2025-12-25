import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { fieldsOfStudy, locations, academicLevels, citizenshipOptions } from '../data/scholarships';

export interface FilterCriteria {
  searchQuery: string;
  minGPA: string;
  fieldOfStudy: string;
  location: string;
  academicLevel: string;
  citizenship: string;
}

interface ScholarshipFiltersProps {
  filters: FilterCriteria;
  onFilterChange: (filters: FilterCriteria) => void;
  onReset: () => void;
}

export function ScholarshipFilters({ filters, onFilterChange, onReset }: ScholarshipFiltersProps) {
  const handleChange = (key: keyof FilterCriteria, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Find Your Perfect Scholarship</h2>
        <Button variant="ghost" onClick={onReset}>Reset Filters</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Search Query */}
        <div className="lg:col-span-3 space-y-2">
          <Label htmlFor="search">Search Keywords</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              id="search"
              type="text"
              placeholder="Search by scholarship name or organization..."
              value={filters.searchQuery}
              onChange={(e) => handleChange('searchQuery', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Minimum GPA */}
        <div className="space-y-2">
          <Label htmlFor="gpa">Minimum GPA</Label>
          <Input
            id="gpa"
            type="number"
            step="0.1"
            min="0"
            max="4.0"
            placeholder="e.g., 3.5"
            value={filters.minGPA}
            onChange={(e) => handleChange('minGPA', e.target.value)}
          />
        </div>

        {/* Field of Study */}
        <div className="space-y-2">
          <Label htmlFor="field">Field of Study</Label>
          <Select value={filters.fieldOfStudy} onValueChange={(value) => handleChange('fieldOfStudy', value)}>
            <SelectTrigger id="field">
              <SelectValue placeholder="Select field" />
            </SelectTrigger>
            <SelectContent>
              {fieldsOfStudy.map((field) => (
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select value={filters.location} onValueChange={(value) => handleChange('location', value)}>
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Academic Level */}
        <div className="space-y-2">
          <Label htmlFor="level">Academic Level</Label>
          <Select value={filters.academicLevel} onValueChange={(value) => handleChange('academicLevel', value)}>
            <SelectTrigger id="level">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {academicLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Citizenship */}
        <div className="space-y-2">
          <Label htmlFor="citizenship">Citizenship Status</Label>
          <Select value={filters.citizenship} onValueChange={(value) => handleChange('citizenship', value)}>
            <SelectTrigger id="citizenship">
              <SelectValue placeholder="Select citizenship" />
            </SelectTrigger>
            <SelectContent>
              {citizenshipOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
