'use client';

import React from 'react';
import { cn } from "@/lib/utils";

interface ContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
  topMargin?: boolean;
}

export function ContainerLayout({ 
  children, 
  className,
  topMargin = true,
}: ContainerLayoutProps) {
  return (
    <div className={cn(
      "h-full mx-auto w-full",
      // Max widths at different breakpoints
      "max-w-[510px] xs:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]",
      // Side margins that exactly match the Figma specs
      "px-[20px] md:px-[30px] lg:px-[50px] xl:px-[110px] 2xl:px-[130px]",
      // Top margin (can be disabled with prop)
      topMargin && "pt-[28px] md:pt-[50px]",
      className
    )}>
      {children}
    </div>
  );
}

export default ContainerLayout;