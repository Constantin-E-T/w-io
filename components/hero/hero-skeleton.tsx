// components/hero/hero-skeleton.tsx
'use client';

// import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <div className="absolute inset-0 -z-10" 
        style={{ background: "linear-gradient(138deg, #D2D3DA 35.03%, #D8D8EE 94.63%)" }}>
      </div>
  )
}

// function FeatureCardSkeleton() {
//   return (
//     <div className="flex w-full max-w-md p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
//       <Skeleton className="h-12 w-12 rounded-md mr-4" />
//       <div className="flex-1 space-y-2">
//         <Skeleton className="h-6 w-32" />
//         <Skeleton className="h-4 w-full" />
//         <Skeleton className="h-4 w-5/6" />
//       </div>
//     </div>
//   )
// }

export default HeroSkeleton