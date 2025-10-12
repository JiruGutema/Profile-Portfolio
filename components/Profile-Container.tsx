import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProfileContainer() {
return  <Card className="border border-border rounded-sm shadow-none">
            <CardContent className="p-6 text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/small_profile.png"
                  alt="Jiru Gutema Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-2 border-border"
                />
              </div>
              <h2 className="text-3xl font-bold font-serif mb-1">
                Jiru Gutema
              </h2>
              <p className="text-lg text-muted-foreground">
                Software Engineer | Fullstack Developer
              </p>
              <p className="text-sm text-muted-foreground">
                Addis Ababa, Ethiopia
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="mailto:jirudagutema@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-border bg-transparent"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
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
                  href="https://leetcode.com/jiru_gutema"
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
            </CardContent>
          </Card>

}