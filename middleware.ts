// middleware.ts

import { NextRequest } from "next/server";
import { auth } from "./app/api/auth/[...nextauth]/route";

export async function middleware(request: NextRequest) {
  const session = await auth();
  
  // Admin routes protection
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!session || session.user.role !== "admin") {
      return Response.redirect(new URL("/auth/signin", request.url));
    }
  }

  // Protected user routes (cart, orders, etc.)
  if (
    request.nextUrl.pathname.startsWith("/cart") ||
    request.nextUrl.pathname.startsWith("/orders")
  ) {
    if (!session) {
      return Response.redirect(new URL("/auth/signin", request.url));
    }
  }
}

export const config = {
  matcher: ["/admin/:path*", "/cart/:path*", "/orders/:path*"],
};