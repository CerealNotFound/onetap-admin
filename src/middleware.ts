import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.has('admin_session')

    if (!isLoggedIn && request.nextUrl.pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    if (isLoggedIn && request.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/', request.url))
    }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
