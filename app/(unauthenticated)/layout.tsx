import Footer from "@/components/layout/unauthenticated/footer"
import { UnAuthenticatedNavbar } from "@/components/layout/unauthenticated/navbar"

export default function UnAuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <UnAuthenticatedNavbar />
      <div className="flex-1 relative overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  )
}