import { prisma } from "@/lib/prisma";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/navbar/footer";
import ShopClient from "./ShopClient"; // <- client component

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  const productsWithImages = products.map((p) => ({
    ...p,
    image: p.imageData
      ? `data:image/jpeg;base64,${Buffer.from(p.imageData).toString("base64")}`
      : "/placeholder.jpg",
  }));

  return (
    <div>
      <Navbar />
      <ShopClient products={productsWithImages} />
      <Footer />
    </div>
  );
}
