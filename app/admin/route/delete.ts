<<<<<<< HEAD
import prisma from "@/prisma";
=======
import prisma from "@/lib/prisma";
>>>>>>> cfdefb73ee5c785d72ddd444483f1e66a8d016be
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: any) {
  await prisma.product.delete({
    where: { id: params.id },
  });

  return NextResponse.redirect("/admin/products");
}
