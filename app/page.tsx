import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="grid gap-8 py-4">
      <section className="text-center pb-6 mb-6">
        <div className="mt-0">
          <Link href="/portfolio">
            <Button className="rounded-none border border-border bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Portfolio
            </Button>
          </Link>
        </div>

      </section>

      <section className="grid md:grid-cols-3 gap-8 border-b border-border pb-6 mb-6">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold font-serif border-b border-border pb-2">
            Jiru Gutema, The Aspiring Software Engineer and Fullstack Developer
          </h2>
          {/* Updated PortfolioCard to reflect Jiru Gutema's details */}
          <Card className="border border-border rounded-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold font-serif">Featured Profile: Jiru Gutema</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                A deep dive into a promising Software Engineer & Fullstack Developer.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="relative w-full h-48 md:h-auto">
                <Image
                  src="/images/profile.jpg"
                  alt="Jiru Gutema Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="border border-border"
                />
              </div>
              <div className="space-y-2">
                <p className="text-base leading-relaxed">
                  Meet Jiru Gutema, a dedicated software engineering student from Addis Ababa University, passionate
                  about crafting innovative fullstack solutions. Discover their journey, diverse skills in Node.js,
                  React, Flutter, and impactful projects.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {'"Building the future, one line of code at a time."'}
                </p>
                <Link href="/portfolio">
                  <Button className="mt-4 rounded-none border border-border bg-primary text-primary-foreground hover:bg-primary/90">
                    Read Full Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <aside className="space-y-6">
          <h2 className="text-2xl font-bold font-serif border-b border-border pb-2">Latest Dispatches</h2>
          <div className="space-y-4">
            <article className="border-b border-border pb-4">
              <h3 className="text-xl font-semibold font-serif mb-1">
                <Link href="/portfolio#projects" className="hover:underline">
                  Tooran App: Revolutionizing Task Management
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                A look into Jiru Gutema's personal Flutter project for efficient task organization.
              </p>
            </article>
            <article className="border-b border-border pb-4">
              <h3 className="text-xl font-semibold font-serif mb-1">
                <Link href="/portfolio#contributions" className="hover:underline">
                  Open Source Impact: React-Next-Folder Creator
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Exploring Jiru's contribution to a Node.js library enhancing developer experience.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold font-serif mb-1">
                <Link href="/portfolio#experience" className="hover:underline">
                  INSA Summer Camp: Cryptography in Action
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Highlights from Jiru's final graduation project on file encryption web applications.
              </p>
            </article>
          </div>
        </aside>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif border-b border-border pb-2">Tech Spotlight</h2>
          <article className="flex gap-4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Fullstack Development"
              width={100}
              height={100}
              className="object-cover border border-border shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold font-serif mb-1">
                <Link href="/portfolio#skills" className="hover:underline">
                  Mastering Fullstack: Node.js, React, and MySQL
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                An overview of Jiru's expertise in building robust web applications from front to back.
              </p>
            </div>
          </article>
          <article className="flex gap-4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="AI Chatbot"
              width={100}
              height={100}
              className="object-cover border border-border shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold font-serif mb-1">
                <Link href="/portfolio#projects" className="hover:underline">
                  JirenIntelli: A Glimpse into AI Chatbot Development
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                How Jiru utilized Gemini API to create an intelligent assistant.
              </p>
            </div>
          </article>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif border-b border-border pb-2">Student Corner</h2>
          <article className="flex gap-4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="DSA"
              width={100}
              height={100}
              className="object-cover border border-border shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold font-serif mb-1">
                <Link href="/portfolio#education" className="hover:underline">
                  Deep Dive into Data Structures & Algorithms
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Insights from Jiru's advanced coursework at African to Silicon Valley Coding Academy.
              </p>
            </div>
          </article>
          <article className="flex gap-4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Cyber Security"
              width={100}
              height={100}
              className="object-cover border border-border shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold font-serif mb-1">
                <Link href="/portfolio#education" className="hover:underline">
                  Exploring Cyber Security & Cryptography
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Key takeaways from Jiru's INSA Summer Program on digital defense.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
