import { prisma } from "../../../lib/prisma.ts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name")?.toString();
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const category = formData.get("category")?.toString();
  const image = formData.get("image") as File | null;

  if (!name || !price || !category) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  let imageData: Buffer | null = null;
  if (image) {
    imageData = Buffer.from(await image.arrayBuffer());
  }

  const product = await prisma.product.create({
    data: { name, price, category, imageData },
  });

  return NextResponse.json(product, { status: 201 });
}
