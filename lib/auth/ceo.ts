import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export async function requireCEO() {
  const { isAuthenticated, userId, redirectToSignIn } = await auth();

  if (!isAuthenticated || !userId) {
    return redirectToSignIn();
  }

  const ceoUserId = process.env.CLERK_CEO_USER_ID;

  if (!ceoUserId) {
    throw new Error("CLERK_CEO_USER_ID is not configured.");
  }

  if (userId !== ceoUserId) {
    notFound();
  }

  return { userId };
}
