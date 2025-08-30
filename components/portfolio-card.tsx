import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PortfolioCard() {
  return (
    <Card className="border border-border rounded-none shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold font-serif">Featured Profile: A Software Engineer Student</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          An in-depth look at a promising talent.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-4">
        <div className="relative w-full h-48 md:h-auto">
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="border border-border"
          />
        </div>
        <div className="space-y-2">
          <p className="text-base leading-relaxed">
            Meet a dedicated software engineering student with a passion for crafting innovative solutions. Discover
            their journey, skills, and projects that are shaping the future of technology.
          </p>
          <p className="text-sm text-muted-foreground italic">
            {'"The future belongs to those who learn more skills and combine them in creative ways."'}
          </p>
          <Link href="/portfolio">
            <Button className="mt-4 rounded-none border border-border bg-primary text-primary-foreground hover:bg-primary/90">
              Read Full Profile
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
