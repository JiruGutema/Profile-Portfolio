import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MagazineLayout } from "@/components/magazine-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jiru Gutema | Software Engineer & Fullstack Developer Portfolio",
  description:
    "The official online portfolio of Jiru Gutema, a software engineer and fullstack developer student showcasing projects, skills, and experience.",
  keywords: [
    "Jiru Gutema",
    "Software Engineer",
    "Fullstack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Node.js",
    "Flutter",
    "Addis Ababa",
  ],
  authors: [{ name: "Jiru Gutema" }],
  openGraph: {
    title: "Jiru Gutema",
    description:
      "The official online portfolio of Jiru Gutema, a software engineer and fullstack developer student showcasing projects, skills, and experience.",
    url: "https://jirugutema.vercel.app",
    siteName: "Jiru Gutema's Portfolio",
    images: [
      {
        url: "/images/profile.jpg", 
        width: 1200,
        height: 630,
        alt: "Jiru Gutema's Software Engineering Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiru Gutema",
    description:
      "The official online portfolio of Jiru Gutema, a software engineer and fullstack developer student showcasing projects, skills, and experience.",
    creator: "@jirugutema",
    images: ["/images/profile.jpg"],
  },
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
          <MagazineLayout>{children}</MagazineLayout>
        </main>
        <Footer />
      </body>
    </html>
  )
}
