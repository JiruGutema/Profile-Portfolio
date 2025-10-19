import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
       {/*  <div className="emoji text-4xl">
             🥹
        </div> */}
      <h1 className="font-bold text-red-500">  404 - Page Not Found</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link href="/" className="flex justify-center link hover:underline text-blue-600">
     {/*    <span className="text-3xl mr-2">
            👈
        </span> */}

        <span className="text-lg font-medium flex items-center">
          Go back to Home
        </span>
      </Link>
    </div>
  );
}   
