import React , { useRef } from "react";

import FeaturesSection from './FeaturesSection.tsx';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import TeamSection from './TeamSection.tsx';
import TestimonialCard from './TestimonialsSection.tsx';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSection />
      <TeamSection />
      <TestimonialCard />
    </div>
  );
};

export default LandingPage;
