'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

type AnimatedSportButtonProps = {
  sport: string;
  iconSrc: string;
  buttonClassName: string;
};

const AnimatedSportButton = ({ 
  sport, 
  iconSrc, 
  buttonClassName 
}: AnimatedSportButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [rollDistance, setRollDistance] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const ballControls = useAnimation();
  const containerControls = useAnimation();
  const textControls = useAnimation();
  
  // Calculate proper roll distance based on button width
  useEffect(() => {
    const calculateRollDistance = () => {
      if (buttonRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth;
        const iconWidth = 38; // Width of the icon
        const padding = 16; // Add some safe padding
        
        // Calculate maximum safe distance to roll without overflowing
        // Subtract icon width and padding to ensure the ball stays within the container
        const maxSafeDistance = buttonWidth - iconWidth - padding;
        
        // Use the smaller of our target distance or the max safe distance
        setRollDistance(Math.min(maxSafeDistance, 130));
      }
    };
    
    // Calculate on mount and whenever clicked (to handle any layout changes)
    calculateRollDistance();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateRollDistance);
    
    return () => {
      window.removeEventListener('resize', calculateRollDistance);
    };
  }, [isClicked]);
  
  const handleClick = async () => {
    if (isClicked) return;
    
    setIsClicked(true);
    
    // Fade out text
    await textControls.start({ opacity: 0, transition: { duration: 0.2 } });
    
    // Start ball rolling animation with the calculated distance
    ballControls.start({ 
      x: rollDistance, 
      rotate: 360,
      transition: { 
        duration: .5, 
        ease: "easeInOut",
      }
    });
    
    // Reset everything after animations complete
    setTimeout(() => {
      setIsClicked(false);
      ballControls.start({ x: 0, rotate: 0, transition: { duration: 0 } });
      textControls.start({ opacity: 1, transition: { duration: 0.3 } });
    }, 2000);
  };

  return (
    <motion.button 
      ref={buttonRef}
      className={`
        ${buttonClassName}
        relative
        overflow-hidden
      `}
      onClick={handleClick}
    >
      {/* Container background that will shrink */}
      <motion.div 
        className="absolute top-0 left-0 h-full bg-opacity-20 rounded-full"
        initial={{ width: "100%" }}
        animate={containerControls}
      ></motion.div>
      
      <div className="flex items-center gap-3 sm:gap-4 relative z-10">
        <div className="relative">
          <motion.div
            initial={{ x: 0, rotate: 0 }}
            animate={ballControls}
            whileHover={isClicked ? {} : { rotate: 360, transition: { duration: 1 } }}
          >
            <Image 
              src={iconSrc} 
              alt={sport} 
              width={38} 
              height={38}
            />
          </motion.div>
        </div>
        
        <motion.span
          className="font-poppins font-semibold text-lg leading-7 text-white"
          initial={{ opacity: 1 }}
          animate={textControls}
        >
          {sport}
        </motion.span>
      </div>
    </motion.button>
  );
};

export default AnimatedSportButton;