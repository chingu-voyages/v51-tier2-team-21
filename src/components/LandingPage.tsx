import FeaturesSection from '../components/FeaturesSection';
import Header from '../components/Header.tsx';
import HeroSection from '../components/Hero';
import React from "react";
import TeamSection from '../components/TeamSection';
import TestimonialCard from '../components/TestimonialsSection';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialCard />
      <TeamSection />
    </div>
  );
};

export default LandingPage;
