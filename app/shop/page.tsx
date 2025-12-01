<<<<<<< HEAD
import { prisma } from "@/prisma";
=======
import { prisma } from "@/lib/prisma";
>>>>>>> cfdefb73ee5c785d72ddd444483f1e66a8d016be
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/navbar/footer";
import ShopClient from "./ShopClient"; // <- client component

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  const productsWithImages = products.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    description: p.description,
    category: p.category,
    createdAt: p.createdAt,
    image: p.imageData
      ? `data:image/jpeg;base64,${Buffer.from(p.imageData).toString("base64")}`
      : "/placeholder.jpg",
    // <- do NOT include `imageData` anymore
  }));

  return (
    <div>
      <Navbar />
      <ShopClient products={productsWithImages} />
      <Footer />
    </div>
  );
}
