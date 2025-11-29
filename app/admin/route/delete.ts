import prisma from "../../../lib/prisma.ts";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: any) {
  await prisma.product.delete({
    where: { id: params.id },
  });

  return NextResponse.redirect("/admin/products");
}
