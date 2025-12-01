import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;

  if (!id) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
  }

  try {
    await prisma.product.delete({
      where: { id },
    });

    // Redirect with success flag
    const url = new URL(request.url);
    url.pathname = "/admin/products";
    url.searchParams.set("deleted", "1");

    return NextResponse.redirect(url);

  } catch (error) {
    console.error("Delete failed:", error);

    const url = new URL(request.url);
    url.pathname = "/admin/products";
    url.searchParams.set("error", "delete_failed");

    return NextResponse.redirect(url);
  }
}
