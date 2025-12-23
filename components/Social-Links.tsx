"use client";

import {
  Send,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Code,
  Mail,
  Code2Icon,
} from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-x-2 mt-4">
      <div className="relative flex items-center justify-center gap-x-3 rounded-md p-3 py-2 text-sm bg-card border-1 border-primary ">
        <a
          href="https://www.github.com/jirugutema"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            className="cursor-pointer text-zinc-700 hover:scale-125 hover:text-black"
            size={20}
          />
        </a>{" "}
        <a
          href="https://www.leetcode.com/jiru_gutema"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code2Icon
            className="cursor-pointer  text-zinc-700 hover:scale-125 hover:text-black "
            size={20}
            
          />
        </a>
        <a
          href="https://www.t.me/jethior"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send
            className="cursor-pointer text-zinc-700 hover:scale-125 hover:text-cyan-500"
            size={20}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jiru-gutema"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            className="cursor-pointer text-zinc-700 hover:scale-125 hover:text-blue-500"
            size={20}
          />
        </a>
        <a
          href="https://www.instagram.com/jirugutema"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            className="cursor-pointer text-zinc-700 hover:scale-125 hover:text-pink-600"
            size={20}
          />
        </a>
        <a
          href="https://www.x.com/jirugutema"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter
            className="cursor-pointer text-zinc-700 hover:scale-125 hover:text-blue-500"
            size={20}
          />
        </a>
        <a
          href="mailto:jirudagutema@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail
            className="cursor-pointer text-zinc-700 hover:scale-125 hover:text-green-500"
            size={20}
          />
        </a>
      </div>
    </div>
  );
}
