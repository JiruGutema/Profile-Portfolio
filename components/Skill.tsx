import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Skill() {
  return (
    <Card className="border border-border rounded-sm shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-serif">Skills</CardTitle>
      </CardHeader>
      <CardContent className="">
        <h3 className="text-lg font-semibold">Programming Languages:</h3>
        <p className="text-base mt-0">JavaScript, Golang, Python, Java</p>
        <h3 className="text-lg mt-3 font-semibold">Frameworks & Libraries:</h3>
        <p className="text-base">
          Reactjs, Nextjs, Nodejs, Expressjs, Flutter, NestJS, Tailwindcss
        </p>
        <h3 className="text-lg mt-3 font-semibold">Databases:</h3>
        <p className="text-base">Postgres, MySQL, MongoDB</p>
        <h3 className="text-lg mt-3 font-semibold">Tools & Platforms:</h3>
        <p className="text-base">
          Git, Linux (advanced), Docker, Prisma, Neon, Github Projects, Figma,
          Vercel, Onrender, Netlify, Cloudinary
        </p>
        <h3 className="text-lg mt-3 font-semibold">Concepts:</h3>
        <p className="text-base">
          AI/ML, Data Structures and Algorithms (DSA), Object Oriented
          Programming, Cryptography
        </p>
      </CardContent>
    </Card>
  );
}
