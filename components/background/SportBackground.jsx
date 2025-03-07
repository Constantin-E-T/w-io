'use client';

import { useEffect, useState } from 'react';
import { useSportTheme } from '@/lib/contexts/SportContext';

export function SportBackground() {
  const { isFootball } = useSportTheme();
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Function to get the appropriate background image based on screen size and sport
    const updateBackgroundImage = () => {
      // Get current window width
      const width = window.innerWidth;
      
      // Determine size category based on the same breakpoints as NavbarContainer
      let sizeCategory;
      if (width < 640) {
        sizeCategory = 'SM'; // Small screens
      } else if (width < 768) {
        sizeCategory = 'SM'; // Small screens
      } else if (width < 1024) {
        sizeCategory = 'SM_M'; // Medium screens
      } else if (width < 1280) {
        sizeCategory = 'L_XL'; // Large screens
      } else {
        sizeCategory = '2xL'; // Extra large screens
      }
      
      // Determine the sport based on isFootball flag
      const sport = isFootball ? 'football' : 'basketball';
      
      // Return the appropriate image path
      return `/backgroundImages/${sport}${sizeCategory}.svg`;
    };

    // Set the initial background image
    setBackgroundImage(updateBackgroundImage());

    // Add event listener for window resize
    const handleResize = () => {
      setBackgroundImage(updateBackgroundImage());
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isFootball]);

  // Return a div with the background image taking full viewport without scroll
  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}
    />
  );
}

export default SportBackground;