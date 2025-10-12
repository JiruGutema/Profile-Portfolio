import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Link from "next/link";

export default function Contribution() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-serif border-border pb-2 mb-4">
        Contributions
      </h2>
      <div className="grid gap-6">
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              React-Next-Folder Creator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              A Node.js library that creates folders for React and Next.js
              projects. Contributed by enhancing user experience with commands
              and multi-argument support for multiple folder creation.
            </p>
            <Link
              href="https://github.com/JiruGutema/react-next_folder"
              className="text-black bg-white border rounded-sm border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              View Contribution
            </Link>
          </CardContent>
        </Card>
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              db4free-net-l10n
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              Contributed to the db4free.net platform (a free online database
              host) by adding an Afaan Oromoo Translation pool.
            </p>
            <Link
              href="https://github.com/mpopp75/db4free-net-l10n/graphs/contributors"
              className="text-black bg-white border rounded-sm border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              View Contribution
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
