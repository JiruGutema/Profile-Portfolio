import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin dashboard routes
  if (pathname.startsWith("/admin/dashboard")) {
    const token = request.cookies.get("admin-token");

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Redirect to dashboard if already logged in and trying to access login
  if (pathname === "/admin/login") {
    const token = request.cookies.get("admin-token");

    if (token) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
