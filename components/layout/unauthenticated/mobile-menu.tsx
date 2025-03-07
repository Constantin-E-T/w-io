'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  // If not open, still render but with hidden visibility to prevent layout shifts
  // This prevents the parent button from moving when the menu opens
  
  return (
    <div 
      className={`absolute top-[55px] right-0 bg-white w-56 flex flex-col items-center rounded-md border border-[#F1F5F9] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] z-50 transition-all duration-200 overflow-hidden ${
        isOpen 
          ? "opacity-100 max-h-[200px]" 
          : "opacity-0 max-h-0 pointer-events-none border-transparent shadow-none"
      }`}
    >
      <div className="w-full py-4 px-4 border-b border-[#F1F5F9]">
        <h2 className="text-[#101828] text-sm font-medium tracking-[0.5px] leading-[22px] font-['Poppins']">
          Menu
        </h2>
      </div>
      
      <div className="w-full">
        <Link 
          href="/sign-in" 
          className="block w-full py-3 px-4 text-[#101828] text-sm font-medium tracking-[0.5px] leading-[22px] font-['Poppins'] hover:bg-[#F9FAFB]"
        >
          Sign In
        </Link>
        
        <Link 
          href="/sign-up" 
          className="block w-full py-3 px-4 text-[#101828] text-sm font-medium tracking-[0.5px] leading-[22px] font-['Poppins'] hover:bg-[#F9FAFB]"
        >
          Sign Up
        </Link>
        
        <Link 
          href="/messages" 
          className="block w-full py-3 px-4 text-[#101828] text-sm font-medium tracking-[0.5px] leading-[22px] font-['Poppins'] hover:bg-[#F9FAFB]"
        >
          Chat
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;