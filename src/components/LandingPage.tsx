import FeaturesSection from './FeaturesSection.tsx';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import React from "react";
import TeamSection from './TeamSection.tsx';
import TestimonialCard from './TestimonialsSection.tsx';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSection />
      <TestimonialCard />
      <TeamSection />
    </div>
  );
};

export default LandingPage;
