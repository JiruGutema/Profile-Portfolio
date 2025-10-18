import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Github, Linkedin, Globe, Code, X, Phone } from "lucide-react"; // Added Globe and Code icons
import ContactMe from "@/components/Contact-Me";
import ProfileContainer from "@/components/Profile-Container";
import Skill from "@/components/Skill";
import Languages from "@/components/Languages";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import SelectedProjects from "@/components/Selected-Projects";
import Contribution from "@/components/Contribution";
import PublicActivity from "@/components/Public-Activity";
import Testimonials from "@/components/Testimonials";
import SecondaryHeader from "@/components/Secondary-Header";

export default function PortfolioPage() {
  return (
    <div className="grid gap-8 py-4 scroll-smooth">
      <SecondaryHeader />
      <div className="grid md:grid-cols-3 gap-8">
        {/* side bar section */}
        <div className="md:col-span-1 space-y-6 min-w-56">
          <ProfileContainer />
          <Skill />
          <Languages />
        </div>
        {/* main content section */}
        <div className="md:col-span-2 space-y-8">
          <About />
          <Separator className="bg-border" />
          <Education />
          <Separator className="bg-border" />
          <Experience />
          <Separator className="bg-border" />
          <SelectedProjects />
          <Separator className="bg-border" />
          <Contribution />
          <Separator className="bg-border" />
          <PublicActivity />
          <Separator className="bg-border" />
          <Testimonials />
          <Separator className="bg-border" />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
