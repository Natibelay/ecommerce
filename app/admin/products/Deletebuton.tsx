"use client";

import React from "react";

type DeleteButtonProps = {
  productId: string;
};

export default function DeleteButton({ productId }: DeleteButtonProps) {
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this product?")) {
      const form = document.createElement("form");
      form.method = "post";
      form.action = `/admin/api/products/${productId}`;
      document.body.appendChild(form);
      form.submit();
    }
  };

  return (
    <button
      type="button"
      className="text-red-600 hover:underline"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
