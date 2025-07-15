import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="grid gap-8 py-4">
      <section className="text-center border-b border-border pb-6 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-2">
          Jiru Gutema
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A detailed look into the academic journey, technical prowess, and project portfolio of an aspiring software
          engineer.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Published on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card className="border border-border rounded-none shadow-none">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/images/profile.jpg"
                  alt="Student Profile"
                  layout="fill"
                  objectFit="cover"
                  // zoom a little bit
                  style={{ objectPosition: "center" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="rounded-full border-2 border-border"
                />
              </div>
              <h2 className="text-3xl font-bold font-serif mb-1">Jiru Gutema</h2>
              <p className="text-lg text-muted-foreground">Software Engineer Student</p>
              <p className="text-sm text-muted-foreground">Addis Ababa University</p>
              <div className="flex justify-center gap-4 mt-4">
                <Link href="mailto:jirudagutema@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-border bg-transparent">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
                <Link href="https://github.com/jirugutema" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-border bg-transparent">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/jiru-gutema" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-border bg-transparent">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border rounded-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-serif">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-lg font-semibold">Programming Languages:</h3>
              <p className="text-base">JavaScript, Python, Java</p>
              <h3 className="text-lg font-semibold">Frameworks & Libraries:</h3>
              <p className="text-base">React, Next.js, Node.js, Expressjs, Nestjs</p>
              <h3 className="text-lg font-semibold">Databases:</h3>
              <p className="text-base">PostgreSQL,Prisma, MongoDB, MySQL</p>
              <h3 className="text-lg font-semibold">Tools & Platforms:</h3>
              <p className="text-base">Linux(Advanced), Git, Docker, AWS, Vercel, Netlify</p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-3xl font-bold font-serif border-b border-border pb-2 mb-4">About Me</h2>
            <p className="text-base leading-relaxed">
              As a passionate software engineering student, I am constantly seeking opportunities to expand my knowledge
              and apply my skills to real-world problems. My academic journey has provided me with a strong foundation
              in data structures, algorithms, and software design principles. I thrive in collaborative environments and
              am always eager to learn from experienced professionals.
            </p>
            <p className="text-base leading-relaxed mt-4">
              My interests lie in <strong>full-stack development</strong>, <strong>machine learning</strong>, and <strong>cloud computing</strong>. I believe in writing
              clean, efficient, and maintainable code, and I am committed to continuous improvement. Outside of coding,
              I enjoy exploring new technologies, listening to educational and science videos (<Link href="https://www.youtube.com/c/veritasium"  style={{ color: "blue", textDecoration: "underline" }}   target="_blank" rel="noopener noreferrer">Veritasium</Link>, <Link href="https://www.youtube.com/c/3Blue1Brown"  style={{ color: "blue", textDecoration: "underline" }}   target="_blank" rel="noopener noreferrer">3Blue1Brown</Link>, <Link href="https://www.youtube.com/c/vsauce"  style={{ color: "blue", textDecoration: "underline" }}   target="_blank" rel="noopener noreferrer">Vsauce</Link> ), and contributing to open-source projects.
            </p>
          </section>

          <Separator className="bg-border" />

          <section>
            <h2 className="text-3xl font-bold font-serif border-b border-border pb-2 mb-4">Education</h2>
            <div className="space-y-4">
              <article>
                <h3 className="text-xl font-semibold font-serif">Bachelor of Science in Software Engineering</h3>
                <p className="text-base text-muted-foreground">University of Technology, 2022 - Present</p>
                <ul className="list-disc list-inside text-base mt-2">
                  <li>
                    Relevant Coursework: Advanced Algorithms, Distributed Systems, Database Management, Machine
                    Learning.
                  </li>
                  <li>GPA: 3.9/4.0</li>
                  <li>Certifications: AWS Certified Cloud Practitioner (2023)</li>
                </ul>
              </article>
            </div>
          </section>

          <Separator className="bg-border" />

          <section>
            <h2 className="text-3xl font-bold font-serif border-b border-border pb-2 mb-4">Projects</h2>
            <div className="grid gap-6">
              <Card className="border border-border rounded-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-serif">E-commerce Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground mb-2">
                    A full-stack e-commerce application built with Next.js, Node.js, Express, and PostgreSQL.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Implemented user authentication, product catalog, shopping cart, and order processing.</li>
                    <li>Integrated Stripe for payment gateway.</li>
                    <li>Deployed on Vercel and AWS EC2.</li>
                  </ul>
                  <Link href="#" className="text-primary hover:underline text-sm mt-2 inline-block">
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card className="border border-border rounded-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-serif">AI-Powered Chatbot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground mb-2">
                    A conversational AI chatbot developed using Python, TensorFlow, and Flask.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Trained a custom NLP model for intent recognition and response generation.</li>
                    <li>Provided a RESTful API for integration with various front-end applications.</li>
                  </ul>
                  <Link href="#" className="text-primary hover:underline text-sm mt-2 inline-block">
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-border" />

          <section>
            <h2 className="text-3xl font-bold font-serif border-b border-border pb-2 mb-4">Experience</h2>
            <div className="space-y-4">
              <article>
                <h3 className="text-xl font-semibold font-serif">Software Engineering Intern</h3>
                <p className="text-base text-muted-foreground">Tech Innovations Inc. | Summer 2024</p>
                <ul className="list-disc list-inside text-base mt-2">
                  <li>
                    Developed and maintained features for a large-scale enterprise application using Java and Spring
                    Boot.
                  </li>
                  <li>Contributed to code reviews and improved testing coverage by 15%.</li>
                  <li>Collaborated with a team of 5 engineers in an Agile environment.</li>
                </ul>
              </article>
            </div>
          </section>

          <Separator className="bg-border" />

          <section>
            <h2 className="text-3xl font-bold font-serif border-b border-border pb-2 mb-4">Testimonials</h2>
            <div className="grid gap-6">
              <Card className="border border-border rounded-none shadow-none">
                <CardContent className="p-6">
                  <p className="text-base italic mb-2">
                    {
                      '"Jane is an exceptionally bright and dedicated student. Her problem-solving skills and ability to quickly grasp complex concepts are truly impressive. She was a valuable asset to our team."'
                    }
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground">
                    - Dr. Emily Chen, Professor of Computer Science
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border rounded-none shadow-none">
                <CardContent className="p-6">
                  <p className="text-base italic mb-2">
                    {
                      '"During her internship, Jane consistently delivered high-quality code and showed great initiative. She\'s a quick learner and a pleasure to work with."'
                    }
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground">
                    - John Smith, Senior Software Engineer at Tech Innovations Inc.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-border" />

          <section id="contact">
            <h2 className="text-3xl font-bold font-serif border-b border-border pb-2 mb-4">Contact Me</h2>
            <p className="text-base leading-relaxed mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Email:</p>
              <Link
                href="mailto:jane.doe@example.com"
                className="text-primary hover:underline text-base flex items-center gap-2"
              >
                <Mail className="h-5 w-5" /> jane.doe@example.com
              </Link>
              <p className="text-lg font-semibold mt-4">Connect with me:</p>
              <div className="flex gap-4">
                <Link href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-border bg-transparent">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-border bg-transparent">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
