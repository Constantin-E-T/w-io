'use client';

import { SportBackground } from '@/components/background/SportBackground';
import { HomePageCards } from '@/components/hero/HomePageCards';

export function UnAuthenticatedHero() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background component */}
      <SportBackground />
      
      {/* Content layer on top of background */}
      <div className="relative z-10 w-full h-full">
        <HomePageCards />
      </div>
    </div>
  );
}

export default UnAuthenticatedHero;