'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative">
      {/* Footer background with opacity */}
      <div className="absolute inset-0 bg-[#141548] opacity-50 mix-blend-multiply"></div>
      
      {/* Footer content container */}
      <footer className="h-[50px] relative z-10 flex items-center">
        <Link 
          href="https://www.woooba.com" 
          className="
            text-white font-poppins text-[14px] font-medium leading-[14px]
            w-[199.167px] h-[16px]
            ml-[130px]
            hover:underline transition-duration-200
          "
        >
          Who is WOOOBA?
        </Link>
      </footer>
    </div>
  );
};

export default Footer;