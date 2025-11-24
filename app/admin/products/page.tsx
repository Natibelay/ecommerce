import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "./Deletebuton.tsx"; 

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  const productsWithImages = products.map((p) => ({
    ...p,
    image: p.imageData
      ? `data:image/jpeg;base64,${Buffer.from(p.imageData).toString("base64")}`
      : null,
  }));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Products Dashboard</h2>
        <Link
          href="/admin/products/add"
          className="px-5 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-900"
        >
          + Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsWithImages.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow p-5 flex flex-col justify-between"
          >
            <div className="relative h-48 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.category}</p>
            <p className="mt-2 font-medium text-gray-800">
              ${p.price.toFixed(2)}
            </p>

            <div className="mt-4 flex justify-between">
              <Link
                href={`/admin/products/${p.id}`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>

              {/* ✅ Delete button with confirmation */}
              <DeleteButton productId={p.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
