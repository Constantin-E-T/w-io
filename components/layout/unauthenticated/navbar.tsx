'use client';

import { NavbarContainer } from '@/components/layout/common/navbar-container';
import { NavbarContent } from '@/components/layout/common/navbar-content';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function UnAuthenticatedNavbar() {
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
          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-[#EAECF0] text-[#141548] hover:bg-[#EAECF0] focus:ring-1 focus:bg-[#EAECF0] focus:ring-[#141548] focus:outline-none"
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
              className="border-[#EAECF0] text-[#141548] hover:bg-[#EAECF0] focus:ring-1 focus:bg-[#EAECF0] focus:ring-[#141548] focus:outline-none"
              style={{ borderRadius: '6px', borderWidth: '1px' }}
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>



            <Button
              asChild
              className="bg-[#141548] text-white hover:bg-[#212278] hover:text-white focus:bg-[#212278] focus:text-white focus:ring-[5px] focus:ring-[#EBEBFA] focus:outline-none"
              style={{ borderRadius: '6px' }}
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>


          </div>
        }
      />
    </NavbarContainer>
  );
}

export default UnAuthenticatedNavbar;