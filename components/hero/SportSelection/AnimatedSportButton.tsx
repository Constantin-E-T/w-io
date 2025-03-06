'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type AnimatedSportButtonProps = {
  sport: string;
  iconSrc: string;
  buttonClassName: string;
  onClick?: () => void;
};

const AnimatedSportButton = ({ 
  sport, 
  iconSrc, 
  buttonClassName,
  onClick
}: AnimatedSportButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button 
      ref={buttonRef}
      className={`
        ${buttonClassName}
        relative
        overflow-hidden
        cursor-pointer
      `}
      onClick={handleClick}
      whileHover="hover"
    >
      <div className="flex items-center gap-3 sm:gap-4 relative z-10">
        <div className="relative">
          <motion.div
            initial={{ rotate: 0 }}
            variants={{
              hover: { rotate: 360, transition: { duration: 1 } }
            }}
          >
            <Image 
              src={iconSrc} 
              alt={sport} 
              width={38} 
              height={38}
              style={{ width: 'auto', height: 'auto' }}
            />
          </motion.div>
        </div>
        
        <span className="font-poppins font-semibold text-lg leading-7 text-white">
          {sport}
        </span>
      </div>
    </motion.button>
  );
};

export default AnimatedSportButton;