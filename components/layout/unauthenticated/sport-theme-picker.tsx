'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSportTheme, SportType } from '@/lib/contexts/SportContext';

interface SportThemePickerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SportThemePicker: React.FC<SportThemePickerProps> = ({ 
  isOpen, 
  onClose
}) => {
  const { activeSport, changeSport } = useSportTheme();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size to determine positioning
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 555);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  if (!isOpen) return null;

  const sports = [
    { id: 'BASKETBALL', name: 'Basketball', icon: '/icons/sportToggle/basketballToggleIcon__orange.svg' },
    { id: 'FOOTBALL', name: 'Football', icon: '/icons/sportToggle/footballToggleIcon__green.svg' },
  ];

  const handleSelectSport = (sportId: string) => {
    changeSport(sportId as SportType);
    onClose();
  };

  // Position style based on screen size
  const positionStyle = isMobile 
    ? { right: '50px' } // Mobile adjustment to center beneath the button
    : { left: '0' };    // Default position for desktop

  return (
    <div 
      className="absolute top-[55px] bg-white w-[214px] flex flex-col items-center rounded-[6px] border border-[#F1F5F9] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] z-50" 
      style={{ 
        padding: "6px 8px",
        ...positionStyle
      }}
    >
      <div className="w-full flex flex-col gap-[8px]">
        {sports.map((sport) => (
          <button 
            key={sport.id}
            onClick={() => handleSelectSport(sport.id)}
            className={`flex items-center w-full py-3 justify-between text-[#101828] text-[14px] font-[500] tracking-[0.5px] leading-[22px] font-['Poppins']`}
            style={{ padding: "6px 8px" }}
          >
            <div className="flex items-center">
              <div className="w-5 h-5 relative mr-3">
                <Image
                  src={sport.icon}
                  alt={sport.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span>{sport.name}</span>
            </div>
            {activeSport === sport.id && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#141548"/>
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SportThemePicker;