'use client';

import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick?: (isOpen: boolean) => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
  const handleClick = (): void => {
    if (onClick) onClick(!isOpen);
  };
  
  return (
    <div 
      id="nav-icon3" 
      className={isOpen ? 'open' : ''} 
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <style jsx>{`
        #nav-icon3 {
          width: 18px;
          height: 12px; /* Adjusted to match actual content height */
          position: relative;
          transform: rotate(0deg);
          transition: 0.5s ease-in-out;
          cursor: pointer;
          margin: 0 auto; /* Center horizontally */
        }
        #nav-icon3 span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: #141548;
          border-radius: 2px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }
        #nav-icon3 span:nth-child(1) {
          top: 0px;
        }
        #nav-icon3 span:nth-child(2),
        #nav-icon3 span:nth-child(3) {
          top: 5px;
        }
        #nav-icon3 span:nth-child(4) {
          top: 10px;
        }
        /* Open State */
        #nav-icon3.open span:nth-child(1) {
          top: 5px;
          width: 0%;
          left: 50%;
        }
        #nav-icon3.open span:nth-child(2) {
          transform: rotate(45deg);
        }
        #nav-icon3.open span:nth-child(3) {
          transform: rotate(-45deg);
        }
        #nav-icon3.open span:nth-child(4) {
          top: 5px;
          width: 0%;
          left: 50%;
        }
      `}</style>
    </div>
  );
};

export default HamburgerIcon;