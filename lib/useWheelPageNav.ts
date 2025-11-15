'use client';

import { useEffect } from 'react';

const useWheelPageNav = (totalSections: number) => {
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1; // 1 = down, -1 = up
      const currentScroll = window.scrollY;
      const sectionHeight = window.innerHeight;
      const currentSection = Math.round(currentScroll / sectionHeight);
      let newSection = currentSection + direction;

      // Batasi antara 0 dan totalSections - 1
      newSection = Math.max(0, Math.min(newSection, totalSections - 1));

      if (newSection === currentSection) return;

      isScrolling = true;

      window.scrollTo({
        top: newSection * sectionHeight,
        behavior: 'smooth',
      });

      // Reset lock setelah animasi selesai (~800ms)
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [totalSections]);
};

export default useWheelPageNav;