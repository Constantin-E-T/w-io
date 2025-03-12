// app/layout.tsx
import "@/app/globals.css"
import { Toaster } from "@/components/ui/sonner"
import { poppins } from "@/lib/fonts"
import { SportProvider } from '@/lib/contexts/SportContext';
import GridOverlay from '@/components/debug/GridOverlay';


export const metadata = {
  title: 'Woooba',
  description: 'Find sports near you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <SportProvider>
          {children}
        </SportProvider>
        <Toaster />
        <GridOverlay />
      </body>
    </html>
  )
}