"use client";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

export default function SelectedProjects() {
  const [hideyoutubeuser, sethideyoutubeuser] = useState(0);
  const [pagemarkeruser, setPagemarkeruser] = useState(0);
  useEffect(() => {
    async function fetchHideYoutubeData() {
      const slug = "hide-youtube-short";
      const res = await fetch(
        `https://addons.mozilla.org/api/v5/addons/addon/${slug}/`
      );
      if (!res.ok) throw new Error(`AMO API error ${res.status}`);
      const data = await res.json();
      sethideyoutubeuser(data.average_daily_users);
    }
    async function fetchPageMarkerData() {
      const slug = "draw-and-mark-a-webpage";
      const res = await fetch(
        `https://addons.mozilla.org/api/v5/addons/addon/${slug}/`
      );
      if (!res.ok) throw new Error(`AMO API error ${res.status}`);
      const data = await res.json();
      setPagemarkeruser(data.average_daily_users);
    }

    fetchHideYoutubeData(), fetchPageMarkerData(), [];
  });
  return (
    <section>
      <h2 className="text-3xl font-bold font-serif  border-border pb-2 mb-4">
        Top Picks Projects
      </h2>
      <p className="info">
        {" "}
        For more projects{" "}
        <Link
          href="/projects"
          className="text-blue-600 pb-2 font-bold hover:underline"
        >
          click here
        </Link>
        .
      </p>
      <br />
      <div
        className="grid gap-6"
        /*   style={{ height: "600px", overflowY: "scroll" }} */
      >
        <Card className="border border-border rounded-sm shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-serif">
              Email Craft
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              Email Craft is a full-stack application for composing, styling,
              and sending custom HTML emails directly from your Gmail account.{" "}
              <i>
                I haven't verified it with Google yet, so it is currently in
                testing mode and can only be used by a limited number of users.
                if you want to try it out, please contact me. or watch the demo
                video
              </i>{" "}
              <Link
                href="https://www.youtube.com/watch?v=Abs08REbc4o"
                className="text-blue-600 font-bold hover:underline"
              >
                here
              </Link>
              .
            </p>
            <Link
              href="https://email-craft-olive.vercel.app"
              className="text-black bg-white rounded-sm border border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              Try Email Craft
            </Link>
            <Link
              href="https://email-craft-olive.vercel.app"
              className="text-black bg-white rounded-sm ml-2 border border-black hover:underline p-2 text-sm mt-2 inline-block"
            >
              Github
            </Link>
          </CardContent>
        </Card>
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
            <span
              className=" flex flex-row mb-2 font-bold transition-colors duration-500 animate-pulse"
              style={{
                color:
                  hideyoutubeuser > 10000
                    ? "#16a34a"
                    : hideyoutubeuser > 1000
                    ? "#eab308"
                    : "#ef4444",
                fontWeight: "bold",
                textShadow: "0 0 8px rgba(255,255,0,0.5)",
              }}
            >
              <User />
              <span>Average Daily Users: {hideyoutubeuser}</span>
            </span>
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
              Page Marker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-2">
              A simple Firefox extension that lets you draw, annotate, and
              highlight directly on any webpage.
            </p>
            <span
              className=" flex flex-row mb-2 font-bold transition-colors duration-500 animate-pulse"
              style={{
                color:
                  hideyoutubeuser > 10000
                    ? "#16a34a"
                    : hideyoutubeuser > 1000
                    ? "#eab308"
                    : "#ef4444",
                fontWeight: "bold",
                textShadow: "0 0 8px rgba(255,255,0,0.5)",
              }}
            >
              <User />
              <span>Average Daily Users: {pagemarkeruser}</span>
            </span>
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
