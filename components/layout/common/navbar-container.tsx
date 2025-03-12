'use client';

import React from 'react';
import { ContainerLayout } from '@/components/layout/common/ContainerLayout';

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
        <ContainerLayout className="h-full py-5">
          {children}
        </ContainerLayout>
      </nav>
    </>
  );
}

export default NavbarContainer;