import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: any) {
  const data = await req.formData();

  await prisma.product.update({
    where: { id: params.id },
    data: {
      name: data.get("name") as string,
      price: Number(data.get("price")),
      category: data.get("category") as string,
      image: data.get("image") as string,
    },
  });

  return NextResponse.redirect("/admin/products");
}
