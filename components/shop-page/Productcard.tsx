import React from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string | null;
  category: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative h-56 sm:h-48 md:h-56 lg:h-64 w-full bg-gray-100">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-md text-sm hover:opacity-95">
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
