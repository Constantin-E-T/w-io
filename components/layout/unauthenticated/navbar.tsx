'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useSportTheme } from '@/lib/contexts/SportContext'

export function UnAuthenticatedNavbar() {
  const { isFootball, isLoading } = useSportTheme();
  
  // Skeleton for loading state
  if (isLoading) {
    return (
      <nav className="w-full border-b bg-white fixed top-0 left-0 right-0 z-50">
        <div className="w-full lg:w-[1200px] mx-auto relative">
          <div className="flex h-20 items-center justify-between">
            {/* Logo skeleton */}
            <div className="flex-shrink-0">
              <div className="w-[183px] h-[45px] bg-gray-200 animate-pulse rounded"></div>
            </div>
            
            {/* Auth buttons skeleton */}
            <div className="flex items-center gap-6 ml-auto">
              <div className="w-[80px] h-11 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-[105px] h-11 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full border-b bg-white fixed top-0 left-0 right-0 z-50">
      <div className="w-full lg:w-[1200px] mx-auto relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo/WOOOBA__Logo__Dark.svg"
                alt="Woooba"
                width={183}
                height={45}
                className="w-[183px]"
                priority
              />
            </Link>
          </div>
          
          {/* Auth buttons */}
          <div className="flex items-center gap-6 ml-auto">
            <Button
              variant="ghost"
              className={`${
                isFootball 
                  ? "text-green-600 hover:text-green-700 hover:bg-green-50" 
                  : "text-orange-500 hover:text-orange-600 hover:bg-orange-50"
              } h-11 px-4 text-[14px] font-medium leading-[12px] tracking-[0.04em]`}
              asChild
            >
              <Link href="/sign-in">
                Sign In
              </Link>
            </Button>
            <Button
              className={`${
                isFootball 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-orange-500 hover:bg-orange-600"
              } h-11 w-[105px] text-[14px] font-medium leading-[12px] tracking-[0.04em]`}
              asChild
            >
              <Link href="/sign-up">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default UnAuthenticatedNavbar