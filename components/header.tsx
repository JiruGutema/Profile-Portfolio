"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    if (newDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

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
             <button
      onClick={toggleTheme}
      className={`relative w-7 h-7 rounded-full transition-colors duration-300
        ${isDark ? "bg-blue-600" : "bg-gray-300"}`}
    >
      <span
        className={`absolute left-1 top-1 w-5 h-5  rounded-full transition-transform duration-300
        ${isDark ? "bg-white" : "bg-black"}`}
      />
      </button>
        </nav>

        {/* Dark mode toggle */}
        {/* <button
          onClick={toggleTheme}
          className="ml-4 w-10 h-10 flex items-center justify-center rounded-lg border border-border text-xl hover:bg-secondary"
          aria-label="Toggle dark mode"
        >
          {isDark ? "🌞" : "🌙"}
        </button> */}
      

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
        <nav className="md:hidden border-t-0 border-border px-4 py-2 flex flex-col w-full items-end">
          <Link
            href="/"
            className="block py-2 pr-6 text-lg font-semibold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="block py-2 pr-6 text-lg font-semibold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/projects"
            className="block py-2 pr-6 text-lg font-semibold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/portfolio#contact"
            className="block py-2 pr-6 text-lg font-semibold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className={`relative w-7 h-7 ml-6 mr-6 rounded-full transition-colors duration-300
                ${isDark ? "bg-blue-600" : "bg-gray-300"}`}
            >
              <span
                className={`absolute left-1 top-1 w-5 h-5 rounded-full transition-transform duration-300
                  ${isDark ? "bg-white" : "bg-black"}`}
              />
            </button>
        </nav>
      )}
    </header>
  )
}
