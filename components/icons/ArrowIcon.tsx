// components/icons/ArrowIcon.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ArrowForwardIconProps {
  className?: string;
}

const ArrowForwardIcon: React.FC<ArrowForwardIconProps> = ({ className }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      <path 
        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" 
        fill="#141548"
      />
    </svg>
  );
};

export default ArrowForwardIcon;