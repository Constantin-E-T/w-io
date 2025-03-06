'use client';

import { useEffect, useState } from 'react';
import { useSportTheme } from '@/lib/contexts/SportContext';
import { UnAuthenticatedHero } from "@/components/hero/unauthenticated-hero";
import SportSelection from "@/components/hero/SportSelection/SportSelection";

export default function UnAuthenticatedHome() {
  const { isLoading } = useSportTheme();
  const [showSportSelection, setShowSportSelection] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if a sport has been selected previously
    if (!isLoading) {
      const storedSport = localStorage.getItem('activeSport');
      setShowSportSelection(!storedSport);
      
      // Add a short delay before showing content
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }
  }, [isLoading]);

  const handleSportSelected = () => {
    setShowSportSelection(false);
  };

  return (
    <main>
      {/* Initial loading state */}
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 transition-opacity duration-500 ${isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="h-screen flex items-center justify-center">
          {/* Optional: Add a subtle pulse animation or logo here */}
        </div>
      </div>
      
      {/* Content containers (both rendered but only one visible) */}
      <div className={`${showSportSelection ? 'block' : 'hidden'}`}>
        <SportSelection onSportSelected={handleSportSelected} />
      </div>
      
      <div className={`${!showSportSelection ? 'block' : 'hidden'}`}>
        <UnAuthenticatedHero />
      </div>
    </main>
  );
}