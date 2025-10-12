import {Mail, Phone, Github, Linkedin, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ContactMe() {
  return (
    <section id="contact">
      <h2 className="text-3xl font-bold font-serif  border-border pb-2 mb-4">
        Contact Me
      </h2>
      <p className="text-base leading-relaxed mb-4">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out!
      </p>
      <div className="space-y-2">
        <div className="flex flex-row gap-2 flex-wrap">
          <div>
            <p className="text-lg font-semibold">Email:</p>
            <Link
              href="mailto:jirudagutema@gmail.com"
              className="text-primary hover:underline text-base flex items-center gap-2"
            >
              <Mail className="h-5 w-5" /> jirudagutema@gmail.com
            </Link>
          </div>
          <div>
            <p className="text-lg font-semibold">Phone:</p>
            <Link
              href="tel:+251978556748"
              className="text-primary hover:underline text-base flex items-center gap-2"
            >
              <Phone className="h-5 w-5" /> +251 97 855 6748
            </Link>
          </div>
        </div>
        <p className="text-lg font-semibold mt-4">Connect with me:</p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/JiruGutema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border bg-transparent"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/jiru-gutema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border bg-transparent"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link
            href="https://x.com/jirugutema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border bg-transparent"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Button>
          </Link>

          <Link
            href="https://leetcode.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border bg-transparent"
            >
              <img
                src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
                width={20}
                alt=""
              />
              <span className="sr-only">Leetcode</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
