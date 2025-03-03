// lib/contexts/SportContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type SportType = 'FOOTBALL' | 'BASKETBALL';

interface SportContextType {
  activeSport: SportType;
  changeSport: (sport: SportType) => void;
  isFootball: boolean;
  isBasketball: boolean;
  isLoading: boolean;
}

const SportContext = createContext<SportContextType | undefined>(undefined);

export function SportProvider({ children }: { children: ReactNode }) {
  const [activeSport, setActiveSport] = useState<SportType>('BASKETBALL');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Add a small delay to ensure consistent loading state for skeletons
      const timer = setTimeout(() => {
        const storedSport = localStorage.getItem('activeSport') as SportType;
        if (storedSport && (storedSport === 'BASKETBALL' || storedSport === 'FOOTBALL')) {
          setActiveSport(storedSport);
        }
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      setIsLoading(false);
    }
  }, []);

  const changeSport = (sport: SportType) => {
    setActiveSport(sport);
    try {
      localStorage.setItem('activeSport', sport);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const isFootball = activeSport === 'FOOTBALL';

  return (
    <SportContext.Provider value={{
      activeSport,
      changeSport,
      isFootball,
      isBasketball: !isFootball,
      isLoading
    }}>
      {children}
    </SportContext.Provider>
  );
}

export function useSportTheme() {
  const context = useContext(SportContext);
  if (context === undefined) {
    throw new Error('useSportTheme must be used within a SportProvider');
  }
  return context;
}