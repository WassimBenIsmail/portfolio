import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OffersSection from './components/OffersSection';
import UseCasesSection from './components/UseCasesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OffersSection />
      <UseCasesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;