<<<<<<< HEAD
import prisma from "@/prisma";
=======
import prisma from "@lib/prisma";
>>>>>>> cfdefb73ee5c785d72ddd444483f1e66a8d016be

export default async function EditProduct({ params }: any) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!product) return <p>Product not found.</p>;

  return (
    <form
      action={`/api/products/${product.id}/update`}
      method="post"
      className="space-y-5 p-6"
    >
      <h2 className="text-xl font-semibold">Edit Product</h2>

      <input name="name" defaultValue={product.name} className="border p-2 w-full" />
      <input name="price" defaultValue={product.price} type="number" className="border p-2 w-full" />
      <input name="category" defaultValue={product.category} className="border p-2 w-full" />
      <input name="image" defaultValue={product.image ?? ""} className="border p-2 w-full" />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
    </form>
  );
}
