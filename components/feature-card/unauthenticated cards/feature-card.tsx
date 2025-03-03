// components/feature-card/unauthenticated-cards/feature-card.tsx
import { Card } from "@/components/ui/card"
import Image from 'next/image'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="w-[466px] h-[162px] p-8 shadow-[0px_2px_4px_0px_rgba(45,45,45,0.08),0px_4px_8px_0px_rgba(45,45,45,0.08)] hover:shadow-[0px_8px_16px_0px_rgba(45,45,45,0.12)]">
      <div className="flex gap-4 h-full">
        <div className="w-16 h-16 flex items-start pt-1 pl-2 flex-shrink-0">
          <Image
            src={icon}
            alt={title}
            width={45}
            height={45}
            className="text-white"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-[18px] font-semibold leading-[28px] text-indigo-950 mb-1">{title}</h3>
          <p className="text-[14px] font-light leading-[22px] tracking-[0.01em]">{description}</p>
        </div>
      </div>
    </Card>
  )
}