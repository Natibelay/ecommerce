import React from "react";

export default function Filters() {
  return (
    <div className="text-gray-500 text-sm space-y-3">
      <p className="font-semibold text-black">Category</p>
      <ul className="space-y-1">
        <li><button className="hover:underline">Clothing</button></li>
        <li><button className="hover:underline">Accessories</button></li>
        <li><button className="hover:underline">Footwear</button></li>
      </ul>

      
    </div>
  );
}
