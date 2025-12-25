import { Button } from './ui/button';

interface HeroProps {
  onProceedClick: () => void;
}

export function Hero({ onProceedClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Make Your Chances <span className="text-blue-600">High!</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover thousands of scholarships tailored to your unique profile. 
              Your dream education is just a search away.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={onProceedClick}
            >
              Proceed! Find Scholarships
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1735027425955-26c35d7a9f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnQlMjBzdHVkeWluZyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjYyOTYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Student with book" 
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}