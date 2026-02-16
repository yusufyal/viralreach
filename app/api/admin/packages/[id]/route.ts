import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const pkg = await prisma.package.findUnique({ where: { id } });
  if (!pkg) {
    return NextResponse.json({ error: "Package not found." }, { status: 404 });
  }

  return NextResponse.json(pkg);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();

    // Build update data — only include fields that were sent
    const updateData: Record<string, unknown> = {};

    if (body.name !== undefined) updateData.name = body.name;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.price !== undefined) updateData.price = parseFloat(body.price);
    if (body.qty !== undefined) updateData.qty = parseInt(body.qty) || 1;
    if (body.period !== undefined) updateData.period = body.period;
    if (body.features !== undefined) updateData.features = body.features;
    if (body.highlighted !== undefined) updateData.highlighted = body.highlighted;
    if (body.sortOrder !== undefined)
      updateData.sortOrder = parseInt(body.sortOrder) || 0;
    if (body.active !== undefined) updateData.active = body.active;
    if (body.stripeTierName !== undefined)
      updateData.stripeTierName = body.stripeTierName || null;

    const pkg = await prisma.package.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(pkg);
  } catch (error) {
    console.error("Update package error:", error);
    return NextResponse.json(
      { error: "Failed to update package." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.package.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete package error:", error);
    return NextResponse.json(
      { error: "Failed to delete package." },
      { status: 500 }
    );
  }
}
