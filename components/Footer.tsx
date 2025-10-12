
export function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Designed and Developed by Jiru Gutema</p>
        <p>Powered by Next.js</p>
      </div>
    </footer>
  )
}
