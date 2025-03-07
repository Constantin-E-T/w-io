'use client';

import { useSportTheme } from '@/lib/contexts/SportContext' 
import SportToggle from '@/components/SportToggle'
import HeroSkeleton from './hero-skeleton'
import { SportBackground } from '@/components/background/SportBackground'

export function UnAuthenticatedHero() {
  // Get the loading state from context
  const { isLoading } = useSportTheme();
  
  // Show skeleton while loading
  if (isLoading) {
    return <HeroSkeleton />;
  }
  
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Add full viewport SportBackground component */}
      <SportBackground />
      
      {/* Sport toggle centered at the top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <SportToggle />
      </div>
    </div>
  )
}

export default UnAuthenticatedHero