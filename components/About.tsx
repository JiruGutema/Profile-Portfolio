import Link from "next/link";
import { Button } from "./ui/button";
import SocialLinks from "./Social-Links";

export default function About() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-serif  border-border pb-2 mb-4">
        About Me
      </h2>
      <p className="text-base leading-relaxed">
        As a passionate software engineering student, I am constantly seeking
        opportunities to expand my knowledge and apply my skills to real-world
        problems. My academic journey has provided me with a strong foundation
        in data structures, algorithms, and software design principles. I thrive
        in collaborative environments and am always eager to learn from
        experienced professionals.
      </p>
      <p className="text-base leading-relaxed mt-4">
        My interests lie in <strong>full-stack development</strong>,{" "}
        <strong>machine learning</strong>, and <strong>cloud computing</strong>.
        I believe in writing clean, efficient, and maintainable code, and I am
        committed to continuous improvement. Outside of coding, I enjoy
        exploring new technologies, listening to educational and science videos
        (
        <Link
          href="https://www.youtube.com/c/veritasium"
          style={{ color: "blue", textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Veritasium
        </Link>
        ,
        <Link
          href="https://www.youtube.com/c/vsauce"
          style={{ color: "blue", textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vsauce
        </Link>
        ,
        <Link
          href="https://www.youtube.com/c/3blue1brown"
          style={{ color: "blue", textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          3Blue1Brown
        </Link>
        ), and contributing to open-source projects.
      </p>
      <br />
      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button className="rounded-sm border border-border text-primary-foreground hover:bg-primary/90">
          <span className="ml-2">View Resume</span>
        </Button>
      </Link>

    </section>
  );
}
