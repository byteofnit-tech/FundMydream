import { Building, Landmark, Briefcase, Users, Flag, Building2 } from 'lucide-react';
import { CategoryCard } from './CategoryCard';

export function Categories() {
  const categories = [
    {
      id: 1,
      title: 'Government Scholarships',
      icon: Landmark,
    },
    {
      id: 2,
      title: 'Private Scholarships',
      icon: Briefcase,
    },
    {
      id: 3,
      title: 'Central Scholarships',
      icon: Flag,
    },
    {
      id: 4,
      title: 'State Scholarships',
      icon: Building2,
    },
    {
      id: 5,
      title: 'SC/ST Scholarships',
      icon: Users,
    },
    {
      id: 6,
      title: 'Minority Scholarships',
      icon: Building,
    },
  ];

  const handleCategoryClick = (categoryTitle: string) => {
    console.log('Selected category:', categoryTitle);
    // You can add navigation or filtering logic here
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Categories of Each Scholarship
          </h2>
          <p className="text-xl text-gray-600">
            Browse scholarships by category to find the perfect match for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
