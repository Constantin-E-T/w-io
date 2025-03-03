'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card/unauthenticated cards/feature-card"
import { useSportTheme } from '@/lib/contexts/SportContext' 
import SportToggle from '@/components/SportToggle'
import HeroSkeleton from './hero-skeleton'

export function UnAuthenticatedHero() {
  // Get the theme and loading state from context
  const { isFootball, isLoading } = useSportTheme();
  
  // Show skeleton while loading
  if (isLoading) {
    return <HeroSkeleton />;
  }
  
  return (
    <section className="w-full bg-white mt-10">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 py-20">
        {/* Add the sport toggle at the top but with minimal spacing */}
        <div className="flex justify-center mb-4">
          <SportToggle />
        </div>
        
        <div className="w-full lg:w-[1200px] h-full lg:h-[496px] mx-auto bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 h-full">
            {/* Left Column - Hero Text */}
            <div className="flex flex-col justify-center">
              <p className="font-bold text-[18px] leading-[22px] tracking-[.5px] mb-6 text-indigo-950">SEEK • CHALLENGE • PLAY</p>

              <h1 className="font-extrabold text-indigo-950 mb-6 text-[56px] leading-[64px] tracking-[0.02em]">
                Your <span className={isFootball ? "text-green-600" : "text-orange-500"}>
                  {isFootball ? "Football" : "Basketball"}
                </span><br />
                Starts Here
              </h1>

              <p className="font-semibold text-black text-[18px] leading-[28px] mb-6">
                Woooba connects you to the pickup {isFootball ? "soccer" : "basketball"} 
                games happening near you.
              </p>

              <p className="font-semibold text-black text-[18px] leading-[28px] mb-6">
                It just takes seconds to create your profile and get going.
              </p>

              <Button
                className={`${
                  isFootball 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-orange-500 hover:bg-orange-600"
                } h-12 w-fit font-medium text-white text-[14px] leading-[12px] tracking-[0.04em] px-7`}
                asChild
              >
                <Link href="/sign-up">
                  {isFootball ? "Join a Match" : "Find a Game"}
                </Link>
              </Button>

              <p className="mt-6 font-semibold text-black text-[18px] leading-[28px]">
                <span className={`${
                  isFootball ? "text-green-600" : "text-orange-500"
                } hover:underline cursor-pointer`}>
                  Questions? <Link href="/chat">Chat with us!</Link>
                </span> We&apos;d love to hear from you.
              </p>
            </div>

            {/* Right Column - Features */}
            <div className="flex flex-col justify-center items-end space-y-6">
              <FeatureCard
                icon="/icons/hero/search-icon.svg"
                title={isFootball ? "Find Matches" : "Find Games"}
                description={`Search the map or your location to find ${isFootball ? "matches" : "games"} that fit your skill and interest`}
              />

              <FeatureCard
                icon="/icons/hero/organize-game.svg"
                title={isFootball ? "Organize a Match" : "Organize a Game"}
                description={`Explore the map, choose a location (or create one!), title your ${isFootball ? "match" : "game"}, set the time & cost and invite players`}
              />

              <FeatureCard
                icon="/icons/hero/download-app.svg"
                title="Download the Mobile App"
                description="For an optimized mobile experience with all the powerful features of Woooba, download our app"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnAuthenticatedHero