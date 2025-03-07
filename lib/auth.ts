// lib/auth.ts

import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function requireAuth(redirectTo = "/auth/signin") {
  const session = await auth();
  if (!session) {
    redirect(redirectTo);
  }
  return session;
}

export async function requireAdmin(redirectTo = "/auth/signin") {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    redirect(redirectTo);
  }
  return session;
}