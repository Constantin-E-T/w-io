'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarContentProps {
    children?: React.ReactNode;
    logo?: {
        src: string;
        alt: string;
        href?: string;
        width?: number;
        height?: number;
    };
    links?: Array<{
        href: string;
        label: string;
        icon?: ReactNode;
    }>;
    rightItems?: ReactNode;
}

export function NavbarContent({
    children,
    logo,
    links,
    rightItems
}: NavbarContentProps) {
    return (
        <div className="h-full flex items-center w-full">
            <div 
                className="w-full h-[45px] py-[2.5px] mt-[33px] mb-[22px] relative"
            >
                {/* Container with zero padding */}
                <div className="flex items-center justify-between h-full w-full absolute inset-0">
                    {/* Logo section flush with left edge */}
                    {logo && (
  <div className="flex items-center">
    {logo.href ? (
      <Link href={logo.href} className="block">
        <div style={{ width: logo.width || 40, height: logo.height || 40, position: 'relative' }}>
          <Image 
            src={logo.src} 
            alt={logo.alt} 
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </Link>
    ) : (
      <div style={{ width: logo.width || 40, height: logo.height || 40, position: 'relative' }}>
        <Image 
          src={logo.src} 
          alt={logo.alt} 
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    )}
  </div>
)}
                    
                    {/* Links section */}
                    {links && links.length > 0 && (
                        <div className="hidden md:flex items-center space-x-4 h-full">
                            {links.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.href}
                                    className="flex items-center text-white h-full"
                                >
                                    {link.icon && <span className="mr-1">{link.icon}</span>}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                    
                    {/* Right items section flush with right edge */}
                    {rightItems && (
                        <div className="flex items-center h-full">
                            {rightItems}
                        </div>
                    )}
                    
                    {/* Any additional children */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default NavbarContent;