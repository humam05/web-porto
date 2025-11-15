'use client';

import { useEffect } from 'react';
import PageIndicator from '@/components/ui/PageIndicator';
import WorkSection from '@/components/sections/WorkSection';
import AboutSection from '@/components/sections/AboutSection';
import useWheelPageNav from '@/lib/useWheelPageNav';
import ContactSection from '@/components/sections/ContactSection';
import Hero from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';

const SECTIONS = 5;

export default function HomePage() {
  useWheelPageNav(SECTIONS);

  
  useEffect(() => {
    document.documentElement.style.scrollbarWidth = 'none';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  }, []);

  return (
    <>
      <PageIndicator TOTAL_SECTIONS={SECTIONS} />
      <Hero />      
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
