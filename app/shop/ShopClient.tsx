"use client";

import React, { useState } from "react";
import Filters from "../../components/shop-page/filters";
import MobileFilters from "../../components/shop-page/mobileFilters";
import PriceSection from "../../components/shop-page/pricerange";
import { FiSliders } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative h-56 w-full bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{product.category}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
          <button className="inline-flex px-3 py-1.5 bg-black text-white rounded-md text-sm">
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ShopClient({ products }) {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const filtered = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <main className="max-w-frame mx-auto px-4">
      {/* Filters */}
      <div className="flex md:space-x-5 items-start">
        <div className="hidden md:block min-w-[295px] max-w-[295px] border rounded-xl p-5 space-y-6">
          <div className="flex justify-between">
            <span className="font-bold text-xl">Filters</span>
            <FiSliders className="text-2xl text-black/40" />
          </div>

          <Filters />
          <PriceSection
            values={priceRange}
            onChange={setPriceRange}
            min={0}
            max={1000}
          />
        </div>

        {/* Products */}
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
