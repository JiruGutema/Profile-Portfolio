import type React from "react"

export function MagazineLayout({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12 bg-background text-foreground">{children}</div>
}
