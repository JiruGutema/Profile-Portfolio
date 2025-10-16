"use client";

import {
  Send,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Code,
  Mail,
  Phone,
  Code2Icon,
} from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-x-2 mt-4">
      <div className="relative flex items-center justify-center gap-x-3 rounded-md p-3 py-2 text-sm bg-card animate-dash">
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
        {/* Inline border animation */}
        <style jsx>{`
          div::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 4px;
            border-color: transparent;
            background: linear-gradient(
              90deg,
              #ffffff,
              #000000,
              #ffffff,
              #000000,
              #ffffff,
              #000000
            );
            background-size: 300% 300%;
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            padding: 1px;

            animation: borderMove 2s linear infinite;
            z-index: 0;
            pointer-events: none;
          }

          @keyframes borderMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 300% 50%;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
