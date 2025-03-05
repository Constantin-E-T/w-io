'use client';

import { useState } from 'react';
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
  
  const ballControls = useAnimation();
  const containerControls = useAnimation();
  const textControls = useAnimation();
  
  const handleClick = async () => {
    if (isClicked) return;
    
    setIsClicked(true);
    
    // Fade out text
    await textControls.start({ opacity: 0, transition: { duration: 0.2 } });
    
    // Start ball rolling animation
    ballControls.start({ 
      x: 130, 
      rotate: 360,
      transition: { 
        duration: 1, 
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
      className={`
        ${buttonClassName}
        relative
        overflow-visible
      `}
      onClick={handleClick}
    >
      {/* Container background that will shrink */}
      <motion.div 
        className="absolute top-0 left-0 h-full bg-opacity-20 rounded-md"
        initial={{ width: "100%" }}
        animate={containerControls}
      ></motion.div>
      
      <div className="flex items-center gap-[12px] sm:gap-[16px] relative z-10">
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
          className="font-poppins font-semibold text-[18px] leading-[28px] text-white"
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