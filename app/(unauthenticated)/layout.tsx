import { UnAuthenticatedNavbar } from "@/components/layout/unauthenticated/navbar"

export default function UnAuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <UnAuthenticatedNavbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}