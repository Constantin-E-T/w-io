// components/hero/hero-skeleton.tsx
'use client';

import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <section className="w-full bg-gray-50 mt-10">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 py-20">
        {/* Toggle skeleton */}
        <div className="flex justify-center mb-8">
          <Skeleton className="h-10 w-48 rounded-md" />
        </div>
        
        <div className="w-full lg:w-[1200px] h-full lg:h-[496px] mx-auto bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 h-full">
            {/* Left Column - Text skeletons */}
            <div className="flex flex-col justify-center p-8 space-y-6">
              <Skeleton className="h-5 w-40" />
              
              <div className="space-y-2">
                <Skeleton className="h-16 w-3/4" />
                <Skeleton className="h-16 w-1/2" />
              </div>
              
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-5/6" />
              
              <Skeleton className="h-12 w-48" />
              
              <Skeleton className="h-7 w-3/4" />
            </div>

            {/* Right Column - Feature card skeletons */}
            <div className="flex flex-col justify-center items-end space-y-6 p-8">
              <FeatureCardSkeleton />
              <FeatureCardSkeleton />
              <FeatureCardSkeleton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCardSkeleton() {
  return (
    <div className="flex w-full max-w-md p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
      <Skeleton className="h-12 w-12 rounded-md mr-4" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  )
}

export default HeroSkeleton