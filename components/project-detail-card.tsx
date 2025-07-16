import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectDetailCardProps {
  title: string
  description: string
  technologies: string[]
  details: string[]
  liveDemoLink?: string
  githubLink?: string
}

export function ProjectDetailCard({
  title,
  description,
  technologies,
  details,
  liveDemoLink,
  githubLink,
}: ProjectDetailCardProps) {
  return (
    <Card className="border border-border rounded-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-base text-muted-foreground">{description}</p>
        <div>
          <h3 className="text-lg font-semibold">Technologies Used:</h3>
          <p className="text-base">{technologies.join(", ")}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Key Features & Contributions:</h3>
          <ul className="list-disc list-inside text-base space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          {liveDemoLink && (
            <Link href={liveDemoLink} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-none border border-border bg-primary text-primary-foreground hover:bg-primary/90">
                View Live Demo
              </Button>
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-none border border-border bg-transparent">
                View GitHub
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
