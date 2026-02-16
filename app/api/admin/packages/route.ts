import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const packages = await prisma.package.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return NextResponse.json(packages);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    const pkg = await prisma.package.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        qty: parseInt(body.qty) || 1,
        period: body.period || "one-time",
        features: body.features || [],
        highlighted: body.highlighted || false,
        sortOrder: parseInt(body.sortOrder) || 0,
        active: body.active !== undefined ? body.active : true,
        stripeTierName: body.stripeTierName || null,
      },
    });

    return NextResponse.json(pkg, { status: 201 });
  } catch (error) {
    console.error("Create package error:", error);
    return NextResponse.json(
      { error: "Failed to create package." },
      { status: 500 }
    );
  }
}
