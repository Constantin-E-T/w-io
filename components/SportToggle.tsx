// components/SportToggle.tsx
'use client';

import { useSportTheme } from '@/lib/contexts/SportContext';
import { Skeleton } from '@/components/ui/skeleton';

export default function SportToggle() {
  const { activeSport, changeSport, isLoading } = useSportTheme();

  if (isLoading) {
    return <Skeleton className="h-10 w-48 rounded-md" />;
  }

  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button
        onClick={() => changeSport('BASKETBALL')}
        className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors duration-200 ${
          activeSport === 'BASKETBALL' 
            ? 'bg-orange-500 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-50'
        } border border-gray-200`}
      >
        🏀 Basketball
      </button>
      
      <button
        onClick={() => changeSport('FOOTBALL')}
        className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors duration-200 ${
          activeSport === 'FOOTBALL' 
            ? 'bg-green-600 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-50'
        } border border-l-0 border-gray-200`}
      >
        ⚽ Football
      </button>
    </div>
  );
}