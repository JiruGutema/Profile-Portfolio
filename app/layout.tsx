import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MagazineLayout } from "@/components/magazine-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Student Engineer - Magazine Portfolio",
  description: "A magazine-style portfolio for a software engineer student.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-144px)]">
          {" "}
          {/* Adjusted height based on header/footer */}
          <MagazineLayout>{children}</MagazineLayout>
        </main>
        <Footer />
      </body>
    </html>
  )
}
