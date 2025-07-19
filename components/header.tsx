"use client"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="py-4 border-b border-border mb-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold font-serif tracking-tight">
          Jiru Gutema
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-lg font-semibold hover:underline">
            Home
          </Link>
          <Link href="/portfolio" className="text-lg font-semibold hover:underline">
            Portfolio
          </Link>
          <Link href="/projects" className="text-lg font-semibold hover:underline">
            Projects
          </Link>
          <Link href="/portfolio#contact" className="text-lg font-semibold hover:underline">
            Contact
          </Link>
        </nav>
        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex items-center px-3 py-2 w-16 h-10 rounded-lg text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {/* Mobile nav */}
 {menuOpen && (
  <nav className="md:hidden border-t border-border px-4 py-2 flex flex-col w-full items-end">
    <Link
      href="/"
      className="block py-2 text-lg font-semibold hover:underline"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>
    <Link
      href="/portfolio"
      className="block py-2 text-lg font-semibold hover:underline"
      onClick={() => setMenuOpen(false)}
    >
      Portfolio
    </Link>
    <Link
      href="/projects"
      className="block py-2 text-lg font-semibold hover:underline"
      onClick={() => setMenuOpen(false)}
    >
      Projects
    </Link>
    <Link
      href="/portfolio#contact"
      className="block py-2 text-lg font-semibold hover:underline"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </Link>
  </nav>
)}

    </header>
  )
}




