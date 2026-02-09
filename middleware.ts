import { NextRequest, NextResponse } from "next/server";

const AUTOSLICIO_DOMAIN = "autoslicio.myworldsart.world";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";
  const { pathname } = request.nextUrl;

  const isAutoslicioHost =
    hostname === AUTOSLICIO_DOMAIN ||
    hostname === "autoslicio.localhost" ||
    hostname === "autoslicio.local";

  if (isAutoslicioHost) {
    if (pathname === "/autoslicio") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/autoslicio";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
