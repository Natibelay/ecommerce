import prisma from "../../../lib/prisma.ts";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();

  await prisma.product.create({
    data: {
      name: data.get("name") as string,
      price: Number(data.get("price")),
      category: data.get("category") as string,
      image: data.get("image") as string,
    },
  });

  return NextResponse.redirect("/admin/products");
}
