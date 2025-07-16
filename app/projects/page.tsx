import { ProjectDetailCard } from "@/components/project-detail-card"
import { Separator } from "@/components/ui/separator"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Tooran Android Application (Personal)",
      description: "A task organizer Flutter app.",
      technologies: ["Flutter", "Dart", "Firebase (optional for future features)"],
      details: [
        "Allows users to manage tasks within categories.",
        "Features include creating categories, adding tasks, and efficient task management.",
        "Designed for a clean and intuitive user experience on Android devices.",
      ],
      liveDemoLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
    },
    {
      title: "JirenIntelli (Personal)",
      description: "A chatbot based on a Gemini free flash API.",
      technologies: ["Python", "Gemini API", "Flask (if web-based)"],
      details: [
        "Built a mini chatbot that utilizes the Gemini chatbot API.",
        "Assists users with basic tasks, coding queries, and writing paragraphs.",
        "Demonstrates integration with external AI services.",
      ],
      liveDemoLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
    },
    {
      title: "House Rental Web Application (Group Project)",
      description: "A full-stack web application for a house rental platform.",
      technologies: ["Node.js", "Express", "MySQL", "React", "JWT"],
      details: [
        "Developed a comprehensive platform for listing and renting houses.",
        "Implemented user authentication and authorization using JWT.",
        "Managed database interactions with MySQL.",
        "Contributed to both frontend (React) and backend (Node.js/Express) development.",
      ],
      liveDemoLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
    },
    {
      title: "Restaurant Management System (Group Project)",
      description: "A full-stack restaurant management system.",
      technologies: ["Node.js", "NestJS", "TypeScript", "Vanilla HTML", "MySQL (as database designer)"],
      details: [
        "Participated in a group project contributing as a database designer, frontend developer, and API integrator.",
        "Built with modern backend frameworks (NestJS, TypeScript) and vanilla HTML for the frontend.",
        "Designed and implemented the database schema for restaurant operations.",
      ],
      liveDemoLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
    },
    {
      title: "VolunteerConnect (Group Project)",
      description: "Connects volunteers with organizations.",
      technologies: ["Express", "MySQL", "Flutter", "JWT", "Firebase"],
      details: [
        "Contributed as a backend developer and Flutter developer.",
        "Implemented backend functionalities using Express and MySQL.",
        "Developed mobile features with Flutter.",
        "Integrated JWT for secure authentication and Firebase for additional services.",
      ],
      liveDemoLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
    },
    {
      title: "React-Next-Folder Creator (Contribution)",
      description: "A Node.js library that creates folders for React and Next.js projects.",
      technologies: ["Node.js"],
      details: [
        "Contributed to a project by enhancing user experience with commands.",
        "Added multi-argument support for creating multiple folders simultaneously.",
        "Improved the utility and efficiency of the library for developers.",
      ],
      liveDemoLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
    },
    {
      title: "db4free-net-l10n (Contribution)",
      description: "Contribution to a free online database host platform.",
      technologies: ["Localization", "Afaan Oromoo"],
      details: [
        "Contributed to the db4free.net project by adding an Afaan Oromoo Translation pool.",
        "Helped make the platform more accessible to Afaan Oromoo speakers.",
        "Demonstrates commitment to open-source and localization efforts.",
      ],
      liveDemoLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
    },
  ]

  return (
    <div className="grid gap-8 py-4">
      <section className="text-center border-b border-border pb-6 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-2">List of Selected Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A comprehensive showcase of my software engineering work, from personal applications to collaborative
          endeavors and open-source contributions.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
             Last updated on July 15, 2025
        </p>
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
