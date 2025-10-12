import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectDetailCardProps {
  id: number
  title: string
  description: string
  technologies: string[]
  details: string[]
  liveDemoLink?: string
  githubLink?: string
}

export function ProjectDetailCard({
  id,
  title,
  description,
  technologies,
  details,
  liveDemoLink,
  githubLink,
}: ProjectDetailCardProps) {
  return (
    <Card className="border border-border rounded-sm shadow-none" id={`project-${id}`}  >
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
              <Button className="rounded-sm border border-border text-primary-foreground hover:bg-primary/90">
              {title.includes("Firefox") ? (
                <span className="ml-2">Install for Firefox</span>
              ) : title.includes("Tooran") ? (
                <span className="ml-2">Install for Android</span>
              ) : (
                <span className="ml-2">Live Demo</span>
              )}
              </Button>
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-sm border border-border bg-transparent">
                View GitHub
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
