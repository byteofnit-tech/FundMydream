import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function CategoryCard({ title, icon: Icon, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-blue-500"
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-center font-semibold text-lg text-gray-900">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
}
