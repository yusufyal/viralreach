import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session");
  const type = searchParams.get("type") || "success";

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing session parameter." },
      { status: 400 }
    );
  }

  try {
    const checkoutSession = await prisma.checkoutSession.findUnique({
      where: { id: sessionId },
    });

    if (!checkoutSession) {
      return NextResponse.json(
        { error: "Session not found." },
        { status: 404 }
      );
    }

    if (new Date() > checkoutSession.expiresAt) {
      return NextResponse.json(
        { error: "Session has expired." },
        { status: 410 }
      );
    }

    const redirectUrl =
      type === "cancel" && checkoutSession.cancelRedirect
        ? checkoutSession.cancelRedirect
        : checkoutSession.callbackUrl;

    return NextResponse.json({ redirectUrl });
  } catch {
    return NextResponse.json(
      { error: "Failed to resolve session." },
      { status: 500 }
    );
  }
}
