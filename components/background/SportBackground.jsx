'use client';

import { useEffect, useState } from 'react';
import { useSportTheme } from '@/lib/contexts/SportContext';

export function SportBackground() {
  const { isFootball, isLoading } = useSportTheme();
  const [transition, setTransition] = useState({
    inProgress: false,
    fromSport: null,
    toSport: null,
    stage: 'idle' // 'idle', 'fadeOut', 'intermediate', 'fadeIn'
  });
  const [currentBackground, setCurrentBackground] = useState({
    url: '',
    visible: true,
    scale: 100
  });
  const [nextBackground, setNextBackground] = useState({
    url: '',
    visible: false,
    scale: 0
  });

  useEffect(() => {
    // Skip if loading
    if (isLoading) return;
    
    // Function to get the appropriate background image based on screen size and sport
    const getBackgroundImage = (sportType) => {
      // Get current window width
      const width = window.innerWidth;
      
      // Determine size category based on breakpoints
      let sizeCategory;
      if (width < 768) {
        sizeCategory = 'SM';
      } else if (width < 1024) {
        sizeCategory = 'SM_M';
      } else if (width < 1280) {
        sizeCategory = 'L_XL';
      } else {
        sizeCategory = '2xL';
      }
      
      // Determine the sport
      const sport = sportType === 'football' ? 'football' : 'basketball';
      
      // Return the appropriate image path
      return `/backgroundImages/${sport}${sizeCategory}.svg`;
    };

    // Determine current sport
    const currentSport = isFootball ? 'football' : 'basketball';
    
    // Initial load or sport change
    if (!currentBackground.url) {
      // First load - just set the background
      const newImageUrl = getBackgroundImage(currentSport);
      setCurrentBackground({
        url: newImageUrl,
        visible: true,
        scale: 100
      });
    } else if ((currentSport === 'football' && currentBackground.url.includes('basketball')) || 
               (currentSport === 'basketball' && currentBackground.url.includes('football'))) {
      
      // Sport has changed - start transition sequence
      const newImageUrl = getBackgroundImage(currentSport);
      const previousSport = currentBackground.url.includes('football') ? 'football' : 'basketball';
      
      // Start transition - prepare both backgrounds for smooth transition
      setTransition({
        inProgress: true,
        fromSport: previousSport,
        toSport: currentSport,
        stage: 'fadeOut'
      });
      
      // Preload the new image
      const img = new Image();
      img.src = newImageUrl;
      
      // Set up the next background but keep it invisible
      setNextBackground({
        url: newImageUrl,
        visible: false,
        scale: 0
      });
      
      // Phase 1: Start shrinking current image while preparing next image
      setCurrentBackground(prev => ({
        ...prev,
        scale: 0,  // Start shrinking
        visible: false // Start fading out
      }));
      
      // Phase 2: After a brief delay, start showing the next image
      setTimeout(() => {
        setTransition(prev => ({
          ...prev,
          stage: 'fadeIn'
        }));
        
        // Make the next image visible and start scale animation
        setNextBackground(prev => ({
          ...prev,
          visible: true, // Start fading in
        }));
        
        // Start growing the next image
        setTimeout(() => {
          setNextBackground(prev => ({
            ...prev,
            scale: 100 // Grow to full size
          }));
          
          // Phase 3: Transition complete - swap backgrounds and reset
          setTimeout(() => {
            // First, clear the old background completely
            setCurrentBackground({
              url: '',
              visible: false,
              scale: 0
            });
            
            // After a small delay, set the new current background
            setTimeout(() => {
              setCurrentBackground({
                url: newImageUrl,
                visible: true,
                scale: 100
              });
              
              // Finally clear the next background and reset transition
              setNextBackground({
                url: '',
                visible: false,
                scale: 0
              });
              
              setTransition({
                inProgress: false,
                fromSport: null,
                toSport: null,
                stage: 'idle'
              });
            }, 50);
          }, 900);
        }, 50);
      }, 400); // Shorter delay to create a more connected transition
    }

    // Add event listener for window resize
    const handleResize = () => {
      if (isLoading || transition.inProgress) return;
      
      const currentSport = isFootball ? 'football' : 'basketball';
      const newImageUrl = getBackgroundImage(currentSport);
      
      // Only update if the screen size would result in a different image
      if (newImageUrl !== currentBackground.url) {
        // Preload the new image
        const img = new Image();
        img.onload = () => {
          setCurrentBackground({
            url: newImageUrl,
            visible: true,
            scale: 100
          });
        };
        img.src = newImageUrl;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isFootball, isLoading, currentBackground.url, transition.inProgress]);

  // Loading state
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
    );
  }

  // Determine transition background color
  const transitionBgColor = transition.toSport === 'football' 
    ? 'bg-[#298024]' // Green for transition to football
    : 'bg-[#F27507]'; // Orange for transition to basketball

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Intermediate color background - always present but opacity changes */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          transition.inProgress ? 'opacity-100' : 'opacity-0'
        } ${transitionBgColor}`}
        style={{
          width: '100vw',
          height: '100vh',
          zIndex: 1
        }}
      />
      
      {/* Current background image (the one being replaced) */}
      {currentBackground.url && (
        <div 
          className={`absolute inset-0 transition-all duration-900 ease-in-out ${
            currentBackground.visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${currentBackground.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            zIndex: 2,
            transformOrigin: 'center',
            transform: `scale(${currentBackground.scale / 100})`
          }}
        />
      )}
      
      {/* Next background image (the one appearing) */}
      {nextBackground.url && (
        <div 
          className={`absolute inset-0 transition-all duration-900 ease-in-out ${
            nextBackground.visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${nextBackground.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            zIndex: 3, // Higher z-index to appear on top
            transformOrigin: 'center',
            transform: `scale(${nextBackground.scale / 100})`
          }}
        />
      )}
    </div>
  );
}

export default SportBackground;