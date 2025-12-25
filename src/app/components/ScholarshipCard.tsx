import { Award, MapPin, GraduationCap, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Scholarship } from '../data/scholarships';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isDeadlineSoon = () => {
    const deadline = new Date(scholarship.deadline);
    const today = new Date();
    const daysUntilDeadline = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilDeadline <= 30 && daysUntilDeadline > 0;
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{scholarship.title}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              {scholarship.organization}
            </CardDescription>
          </div>
          {isDeadlineSoon() && (
            <Badge variant="destructive">Closing Soon</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="flex items-center gap-2 text-2xl font-semibold text-blue-600">
          <DollarSign className="w-6 h-6" />
          {formatAmount(scholarship.amount)}
        </div>

        <p className="text-gray-600">{scholarship.description}</p>

        <div className="space-y-3">
          <div className="flex items-start gap-2 text-sm">
            <GraduationCap className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-700">Academic Level</div>
              <div className="text-gray-600">{scholarship.eligibility.academicLevel.join(', ')}</div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <MapPin className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-700">Location</div>
              <div className="text-gray-600">{scholarship.eligibility.location.join(', ')}</div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <Users className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-700">Citizenship</div>
              <div className="text-gray-600">{scholarship.eligibility.citizenship.join(', ')}</div>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-sm font-medium text-gray-700 mb-2">Required GPA: {scholarship.eligibility.minGPA}+</div>
            <div className="flex flex-wrap gap-1">
              {scholarship.eligibility.fieldOfStudy.slice(0, 3).map((field) => (
                <Badge key={field} variant="secondary" className="text-xs">
                  {field}
                </Badge>
              ))}
              {scholarship.eligibility.fieldOfStudy.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{scholarship.eligibility.fieldOfStudy.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <div className="w-full text-sm text-gray-600">
          Deadline: <span className="font-medium text-gray-900">{formatDate(scholarship.deadline)}</span>
        </div>
        <Button className="w-full" onClick={() => window.open(scholarship.applicationLink, '_blank')}>
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
}
