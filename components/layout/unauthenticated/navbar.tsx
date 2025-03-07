'use client';

import { useState, useEffect } from 'react';
import { NavbarContainer } from '@/components/layout/common/navbar-container';
import { NavbarContent } from '@/components/layout/common/navbar-content';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from './mobile-menu';
import HamburgerIcon from '@/components/ui/hamburger-menu-icon';
import SportThemePicker from './sport-theme-picker';
import { useSportTheme } from '@/lib/contexts/SportContext';
import { Skeleton } from '@/components/ui/skeleton';

export function UnAuthenticatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSportPickerOpen, setIsSportPickerOpen] = useState<boolean>(false);
  const [sportSelected, setSportSelected] = useState<boolean>(false);
  const { activeSport, isLoading } = useSportTheme();

  useEffect(() => {
    // Check if a sport has been selected
    const storedSport = localStorage.getItem('activeSport');
    setSportSelected(!!storedSport);
  }, [activeSport]);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    if (isSportPickerOpen) setIsSportPickerOpen(false);
  };

  const toggleSportPicker = (): void => {
    setIsSportPickerOpen(!isSportPickerOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Sport theme config
  const sportThemes = {
    BASKETBALL: {
      icon: '/icons/sportToggle/basketballToggleIcon__white.svg',
      color: 'bg-[#F4501E]',
      hoverColor: 'hover:bg-[#F88D6D]',
      focusStyle: 'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FAB39E]',
      hoverBorder: 'hover:border-[#C33509]',
      activeBorder: 'border-[#C33509]'
    },
    FOOTBALL: {
      icon: '/icons/sportToggle/footballToggleIcon__white.svg',
      color: 'bg-[#00A550]',
      hoverColor: 'hover:bg-[#7BEAAF]',
      focusStyle: 'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#7BEAAF]',
      hoverBorder: 'hover:border-[#158449]',
      activeBorder: 'border-[#158449]'
    }
  };

  const currentTheme = sportSelected && activeSport ? 
    sportThemes[activeSport as keyof typeof sportThemes] : null;

  // Show skeleton while loading
  if (isLoading) {
    return (
      <NavbarContainer backgroundColor="bg-white" height="100px">
        <NavbarContent
          logo={{
            src: "/logo/WOOOBA__Logo__Dark.svg",
            alt: "WOOOBA Logo",
            href: "/",
            width: 194,
            height: 45
          }}
          rightItems={
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-12" />
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-24" />
            </div>
          }
        />
      </NavbarContainer>
    );
  }

  return (
    <NavbarContainer backgroundColor="bg-white" height="100px">
      <NavbarContent
        logo={{
          src: "/logo/WOOOBA__Logo__Dark.svg",
          alt: "WOOOBA Logo",
          href: "/",
          width: 194,
          height: 45
        }}
        rightItems={
          <>
            {/* Desktop Menu - Hidden on screens smaller than 555px */}
            <div className="flex items-center space-x-4 max-[555px]:hidden">
              {/* Sport Theme Picker Button with Dropdown - Only show if sport is selected */}
              {sportSelected && currentTheme && (
                <div className="relative">
                  <button
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${currentTheme.color} ${currentTheme.hoverColor} ${currentTheme.focusStyle} border ${isSportPickerOpen ? currentTheme.activeBorder : 'border-transparent'} ${currentTheme.hoverBorder} cursor-pointer`}
                    onClick={toggleSportPicker}
                    tabIndex={0}
                  >
                    <div className="flex items-center justify-center w-5 h-5 relative">
                      <Image
                        src={currentTheme.icon}
                        alt={`${activeSport} theme`}
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </button>
                  <SportThemePicker 
                    isOpen={isSportPickerOpen}
                    onClose={() => setIsSportPickerOpen(false)}
                  />
                </div>
              )}

              <Button
                asChild
                variant="outline"
                size="icon"
                className="border-[#EAECF0] text-[#141548] hover:bg-[#EAECF0] w-[48px] h-[40px] px-2"
                style={{ borderRadius: '6px', borderWidth: '1px' }}
              >
                <Link href="/messages">
                  <div style={{ width: 24, height: 24, position: 'relative' }}>
                    <Image
                      src="/icons/navigation/message.svg"
                      alt="Messages"
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
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

            {/* Mobile View - Only visible on screens smaller than 555px */}
            <div className="hidden max-[555px]:flex items-center space-x-3 relative">
              {/* Sport Theme Picker for Mobile - Only show if sport is selected */}
              {sportSelected && currentTheme && (
                <>
                  <button
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${currentTheme.color} ${currentTheme.hoverColor} ${currentTheme.focusStyle} border ${isSportPickerOpen ? currentTheme.activeBorder : 'border-transparent'} ${currentTheme.hoverBorder} cursor-pointer`}
                    onClick={toggleSportPicker}
                    tabIndex={0}
                  >
                    <div className="flex items-center justify-center w-6 h-6 relative">
                      <Image
                        src={currentTheme.icon}
                        alt={`${activeSport} theme`}
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </button>
                  <SportThemePicker 
                    isOpen={isSportPickerOpen}
                    onClose={() => setIsSportPickerOpen(false)}
                  />
                </>
              )}
              
              {/* Mobile Hamburger Menu - Menu container is now relative */}
              <div className="relative">
                <button
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white border ${isMenuOpen ? 'border-[#141548]' : 'border-[#EAECF0]'} hover:border-[#A5B0C0] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#A5B0C0] cursor-pointer`}
                  onClick={toggleMenu}
                  tabIndex={0}
                  style={{ transform: 'translateX(0)' }} /* Ensure button doesn't move */
                >
                  <div className="flex items-center justify-center">
                    <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
                  </div>
                </button>
                {/* Menu is now a child of this container for proper alignment */}
                <MobileMenu isOpen={isMenuOpen} />
              </div>
            </div>
          </>
        }
      />
    </NavbarContainer>
  );
}

export default UnAuthenticatedNavbar;