'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type SportType = 'BASKETBALL' | 'FOOTBALL';

interface SportContextType {
  activeSport: SportType | null;
  isLoading: boolean;
  changeSport: (sport: SportType) => void;
}

const SportContext = createContext<SportContextType | undefined>(undefined);

export function SportProvider({ children }: { children: React.ReactNode }) {
  const [activeSport, setActiveSport] = useState<SportType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize from localStorage on component mount
    const storedSport = localStorage.getItem('activeSport') as SportType | null;
    if (storedSport) {
      setActiveSport(storedSport);
    }
    setIsLoading(false);
  }, []);

  const changeSport = (sport: SportType) => {
    // Save to localStorage first
    localStorage.setItem('activeSport', sport);
    
    // Update context state
    setActiveSport(sport);
    
    // Dispatch a custom event to notify other components
    const event = new Event('sportChanged');
    window.dispatchEvent(event);
  };

  return (
    <SportContext.Provider value={{ activeSport, isLoading, changeSport }}>
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