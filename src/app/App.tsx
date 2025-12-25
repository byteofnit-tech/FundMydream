import { useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ScholarshipForm } from './components/ScholarshipForm';
import { Categories } from './components/Categories';
import { auth } from "../firebase/firebase"; // The '..' goes up one level to 'src'

console.log("Firebase connected", auth);

export default function App() {
  const formSectionRef = useRef<HTMLDivElement>(null);
  const [showCategories, setShowCategories] = useState(false);

  const handleProceedClick = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = () => {
    setShowCategories(true);
    // Scroll to categories after a brief delay to allow state update
    setTimeout(() => {
      const categoriesSection = document.getElementById('categories-section');
      categoriesSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero onProceedClick={handleProceedClick} />

        {/* Form Section */}
        <div ref={formSectionRef}>
          <ScholarshipForm onSubmit={handleFormSubmit} />
        </div>

        {/* Categories Section - Only show after form submission */}
        {showCategories && (
          <div id="categories-section">
            <Categories />
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">ScholarShips!</h3>
                <p className="text-gray-400">
                  Helping students find and secure scholarships for their educational journey.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: info@scholarships.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: 123 Education St.</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 ScholarShips! All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}