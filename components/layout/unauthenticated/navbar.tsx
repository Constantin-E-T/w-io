'use client';

import { useState } from 'react';
import { NavbarContainer } from '@/components/layout/common/navbar-container';
import { NavbarContent } from '@/components/layout/common/navbar-content';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from './mobile-menu';
import HamburgerIcon from '@/components/ui/hamburger-menu-icon';

export function UnAuthenticatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer backgroundColor="bg-white" height="100px">
      <NavbarContent
        logo={{
          src: "/logo/WOOOBA__Logo__Dark.svg",
          alt: "Your Brand",
          href: "/",
          width: 194,
          height: 45
        }}
        rightItems={
          <>
            {/* Desktop Menu - Hidden on screens smaller than 468px */}
            <div className="flex items-center space-x-4 max-[501px]:hidden">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="border-[#EAECF0] text-[#141548] hover:bg-[#EAECF0] w-[48px] h-[40px] px-2"
                style={{ borderRadius: '6px', borderWidth: '1px' }}
              >
                <Link href="/messages">
                  <Image
                    src="/icons/navigation/message.svg"
                    alt="Messages"
                    width={24}
                    height={24}
                  />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#EAECF0] text-[#141548] hover:bg-[#EAECF0] w-[83px] h-[40px] px-2"
                style={{ borderRadius: '6px', borderWidth: '1px' }}
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>

              <Button
                asChild
                className="bg-[#141548] text-white hover:bg-[#212278] hover:text-white w-[104px] h-[40px] px-2"
                style={{ borderRadius: '6px' }}
              >
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Hamburger Menu - Only visible on screens smaller than 468px */}
            <div className="hidden max-[501px]:block relative">
              <button 
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-white border ${isMenuOpen ? 'border-[#141548]' : 'border-[#EAECF0]'} hover:border-[#A5B0C0] cursor-pointer`}
                onClick={toggleMenu}
                tabIndex={0}
              >
                <div className="flex items-center justify-center">
                  <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
                </div>
              </button>
              <MobileMenu isOpen={isMenuOpen} />
            </div>
          </>
        }
      />
    </NavbarContainer>
  );
}

export default UnAuthenticatedNavbar;