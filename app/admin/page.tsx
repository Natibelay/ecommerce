//read list of product import prisma from "@/lib/prisma";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div>
      <h2 className="text-lg font-semibold">Products</h2>
      <a href="/admin/products/new" className="text-blue-600 underline">Add Product</a>

      <div className="mt-6 space-y-4">
        {products.map((p) => (
          <div key={p.id} className="p-4 border rounded flex justify-between">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-500">${p.price}</p>
            </div>

            <div className="flex gap-3">
              <a href={`/admin/products/${p.id}`} className="text-blue-600">Edit</a>
              <form action={`/api/products/${p.id}/delete`} method="post">
                <button className="text-red-600">Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
