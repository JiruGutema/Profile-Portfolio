import Link from "next/link"

export function Header() {
  return (
    <header className="py-4 border-b border-border mb-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold font-serif tracking-tight">
         Jiru Gutema 
        </Link>
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
        {/* Mobile menu toggle could be added here if needed */}
      </div>
    </header>
  )
}
