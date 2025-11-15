'use client';

import { useEffect, useState } from 'react';

const TOTAL_SECTIONS = 5; // misal: Home, Work, About, Contact

export default function PageIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSection = (index: number) => {
    setActiveIndex(index);
    // Nanti kita animate scroll ke section ke-index
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const currentIndex = Math.round(scrollY / sectionHeight);
      setActiveIndex(Math.min(currentIndex, TOTAL_SECTIONS - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSection(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}