import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer";

import ProductCard, { Product } from "../components/shop-page/Productcard";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  // Fetch products including imageData (BYTEA)
  const products = await prisma.product.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      price: true,
      category: true,
      imageData: true, // BYTEA column
    },
  });

  // Convert imageData from Buffer to Base64 string for the frontend
  const productsWithImages: Product[] = products.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    category: p.category,
    image:
      p.imageData != null
        ? `data:image/png;base64,${Buffer.from(p.imageData).toString("base64")}`
        : null,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Minimal design. Modern shopping.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Curated essentials — clean, simple and made to last. Free shipping on orders over $75.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/shop"
                className="inline-block px-6 py-3 bg-black text-white rounded-md font-medium"
              >
                Shop All
              </Link>
              <a
                href="#collections"
                className="inline-block px-6 py-3 border border-gray-200 rounded-md text-gray-700"
              >
                Browse Collections
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">New arrivals added weekly ✨</div>
          </div>

          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-100 to-white h-80 sm:h-96">
              <Image
                src="/ima.png"
                alt="Hero product"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Featured</h2>
            <Link href="/products" className="text-sm text-gray-600">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsWithImages.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
