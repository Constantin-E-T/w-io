'use client';

import { useEffect, useState } from 'react';
import { useSportTheme } from '@/lib/contexts/SportContext';

export function SportBackground() {
  const { isFootball, isLoading } = useSportTheme();
  const [backgrounds, setBackgrounds] = useState({
    current: { url: '', active: true },
    previous: { url: '', active: false }
  });
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    // Function to get the appropriate background image based on screen size and sport
    const getBackgroundImage = () => {
      // Get current window width
      const width = window.innerWidth;
      
      // Determine size category based on the same breakpoints as NavbarContainer
      let sizeCategory;
      if (width < 768) {
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

    // Initial load or sport change
    if (!isLoading) {
      const newImageUrl = getBackgroundImage();
      
      // Only update if the image is actually different
      if (newImageUrl !== backgrounds.current.url) {
        // Preload the new image
        const img = new Image();
        img.onload = () => {
          setIsPreloaded(true);
          
          // Swap backgrounds with the new one
          setBackgrounds(prev => ({
            previous: { ...prev.current, active: false },
            current: { url: newImageUrl, active: true }
          }));
        };
        img.src = newImageUrl;
        setIsPreloaded(false);
      }
    }

    // Add event listener for window resize
    const handleResize = () => {
      if (isLoading) return;
      
      const newImageUrl = getBackgroundImage();
      // Only update if the screen size would result in a different image
      if (newImageUrl !== backgrounds.current.url) {
        // Preload the new image
        const img = new Image();
        img.onload = () => {
          setIsPreloaded(true);
          
          // Swap backgrounds with the new one
          setBackgrounds(prev => ({
            previous: { ...prev.current, active: false },
            current: { url: newImageUrl, active: true }
          }));
        };
        img.src = newImageUrl;
        setIsPreloaded(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isFootball, isLoading, backgrounds.current.url]);

  // Loading state
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Previous background (fading out) */}
      {backgrounds.previous.url && (
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            isPreloaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${backgrounds.previous.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            zIndex: 1
          }}
        />
      )}
      
      {/* Current background (fading in) */}
      {backgrounds.current.url && (
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ease-in ${
            isPreloaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${backgrounds.current.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            zIndex: 2
          }}
        />
      )}
    </div>
  );
}

export default SportBackground;