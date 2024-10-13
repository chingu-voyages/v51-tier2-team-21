import React, { useRef } from 'react';

import FeaturesSection from './FeaturesSection.tsx';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import TeamSection from './TeamSection.tsx';
import TestimonialCard from './TestimonialsSection.tsx';

const LandingPage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // function to scroll to a section smoothly
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onTeamClick={() => scrollToSection(teamRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
      />
      <Hero />
      <div ref={featuresRef} id="features">
        <FeaturesSection />
      </div>
      <div ref={teamRef} id="team">
        <TeamSection />
      </div>
      <div ref={testimonialsRef} id="testimonials"></div>
      <TestimonialCard />
    </div>
  );
};

export default LandingPage;
