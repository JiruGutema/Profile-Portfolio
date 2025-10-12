import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./Social-Links";

export default function ProfileContainer() {
  return (
    <Card className="border border-border rounded-sm shadow-none">
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
        <h2 className="text-3xl font-bold font-serif mb-1">Jiru Gutema</h2>
        <p className="text-lg text-muted-foreground">
          Software Engineer | Fullstack Developer
        </p>
        <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
        <div className="flex justify-center">

        <SocialLinks/>
        </div>
      </CardContent>
    </Card>
  );
}
