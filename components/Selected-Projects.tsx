import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function SelectedProjects() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-serif  border-border pb-2 mb-4">
        Top Picks Projects
      </h2>
      <div
        className="grid gap-6"
        style={{ height: "600px", overflowY: "scroll" }}
      >
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Tooran (Task Management Android)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              Tooran is a comprehensive task management application designed for
              systematic organization of daily tasks and responsibilities. This
              application enables efficient categorization of tasks,
              facilitating streamlined management of both professional and
              personal workflows.
            </p>
            <Link
              href="https://tooran.vercel.app"
              className="text-black bg-white rounded-sm border border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              Install for Android
            </Link>
          </CardContent>
        </Card>
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Hide Youtube Shorts (Firefox Extension)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              A Firefox extension to hide YouTube Shorts, allowing users to
              overcome endless looping of shorts scrolling. This extension
              provides a seamless viewing experience by eliminating distractions
              and focusing on the main content.
            </p>
            <Link
              href="/projects#project-1"
              className="text-black rounded-sm bg-white border border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              Install for Firefox
            </Link>
          </CardContent>
        </Card>
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Swagger-Html
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              I developed swagger-html, a npm package to export your
              Swagger/OpenAPI docs as a single offline HTML file for easy
              sharing and viewing no server required! The package makes it
              simple to generate and share API documentation, enhancing
              collaboration among developers.
            </p>
            <Link
              href="https://www.npmjs.com/package/swagger-html"
              className="text-black border bg-white rounded-sm border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              Go to Documentation
            </Link>
          </CardContent>
        </Card>
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Web Marker Extension
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              I Modified a Firefox extension that allows users to draw and mark
              up webpages for better collaboration and feedback. the extension
              was removed previously from the firefox addon store due to some
              policy violation which was built by <strong>Daniel</strong>. I
              fixed the issues as well as added more functionalities and then
              republished it under my name.
            </p>
            <Link
              href="https://addons.mozilla.org/en-US/firefox/addon/draw-and-mark-a-webpage/"
              className="text-black hover:underline p-2 border rounded-sm border-black bg-white text-sm mt-2 inline-block"
            >
              Install for Firefox
            </Link>
          </CardContent>
        </Card>
      </div>
      <Link
        href="/projects"
        className="text-black bg-white border rounded-sm border-black p-2 hover:underline text-sm mt-2 inline-block"
      >
        View Other Selected Projects
      </Link>
    </section>
  );
}
