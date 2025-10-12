import { ProjectDetailCard } from "@/components/Project-Detail-Card"
import { Separator } from "@/components/ui/separator"
import {projects} from "./projects"

export default function ProjectsPage() {

  return (
    <div className="grid gap-8 py-4">
      <section className="text-center border-border  ">
        <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-2">List of Selected Projects</h1>
      </section>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectDetailCard {...project} />
            {index < projects.length - 1 && <Separator className="bg-border my-8" />}
          </div>
        ))}
      </div>
    </div>
  )
}
