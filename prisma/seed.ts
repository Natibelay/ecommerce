import fs from "fs";
import path from "path";
import { prisma } from "@lib/prisma";

async function main() {
  const products = [
    { name: "Classic White Shirt", price: 29, category: "Clothing", file: "tshirt.jpg" },
    { name: "Minimal Leather Wallet", price: 49, category: "Accessories", file: "wallet.jpg" },
    { name: "Everyday Sneakers", price: 79, category: "Footwear", file: "sneakers.jpg" },
    { name: "Organic Cotton Tee", price: 19, category: "Clothing", file: "cotton-tee.jpg" },
  ];

  for (const p of products) {
    const imgPath = path.join(process.cwd(), "public", p.file);
    const imgBuffer = fs.readFileSync(imgPath);

    await prisma.product.create({
      data: {
        name: p.name,
        price: p.price,
        category: p.category,
        imageData: imgBuffer,
      },
    });
  }

  console.log("✅ Seeded products with images");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
