import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { User } from "lucide-react";

export type SelectedProjectCardProps = {
  title: string;
  description: string;
  links: { href: string; label: string }[];
  showUserCount?: "hideyoutubeuser" | "pagemarkeruser";
  userCount?: number;
};

export default function SelectedProjectCard({
  title,
  description,
  links,
  showUserCount,
  userCount,
}: SelectedProjectCardProps) {
  return (
    <Card className="border border-border rounded-sm shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold font-serif">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground mb-2">{description}</p>
        {showUserCount && typeof userCount === "number" && (
          <span
            className="flex flex-row mb-2 font-bold transition-colors duration-500 animate-pulse"
            style={{
              color:
                userCount > 10000
                  ? "#16a34a"
                  : userCount > 1000
                  ? "#eab308"
                  : "#ef4444",
              fontWeight: "bold",
              textShadow: "0 0 8px rgba(255,255,0,0.5)",
            }}
          >
            <User />
            <span>
              Average Daily Users: {userCount}
            </span>
          </span>
        )}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className=" bg-background rounded-sm border border-border hover:underline p-2 text-sm mt-2 inline-block mr-2"
          >
            {link.label}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
