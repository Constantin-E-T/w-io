'use client';

import React from 'react';

interface NavbarContainerProps {
  children?: React.ReactNode;
  height?: string;
  backgroundColor?: string;
}

export function NavbarContainer({ 
  children,
  height = "100px",
  backgroundColor = "bg-blue-500" 
}: NavbarContainerProps) {
  return (
    <>
      {/* Spacer div to prevent content overlap due to fixed positioning */}
      <div style={{ height: height }}></div>
      
      <nav 
        className={`w-full border-b-1 border-gray-300 ${backgroundColor} fixed top-0 left-0 right-0 z-50 overflow-visible`}
        style={{ height: height }}
      >
        <div className="h-full mx-auto px-4 sm:px-6 lg:px-8 w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
          {children}
        </div>
      </nav>
    </>
  );
}

export default NavbarContainer;