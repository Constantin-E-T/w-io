import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface TextButtonProps {
  className?: string;
  text?: string;
  icon?: string; // Updated to accept a string path to the SVG
  onClick?: () => void;
}

const TextButton = ({ 
  className, 
  text = "Create Your PlayerProfile",
  icon,
  onClick
}: TextButtonProps) => {
  return (
    <Button
      className={cn(
        "w-[225px] h-[40px]",
        "px-5 py-2",
        "rounded-full",
        "bg-white hover:bg-white",
        "flex items-center justify-between",
        className
      )}
      style={{ 
        boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)'
      }}
      onClick={onClick}
    >
      <span 
        className="text-[#141548] font-poppins text-[14px] font-semibold leading-[24px] text-left"
      >
        {text}
      </span>
      
      {icon && (
        <div className="mx-3 w-5 h-5 flex-shrink-0 flex items-center justify-center">
          <Image 
            src={icon}
            alt="Button icon"
            width={24}
            height={24}
          />
        </div>
      )}
    </Button>
  );
};

export default TextButton;