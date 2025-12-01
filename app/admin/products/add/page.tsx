"use client";

import { useState } from "react";

export default function NewProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
      setImageFile(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      setPreview(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB.");
      setPreview(null);
      return;
    }
    setError("");
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !price || !category.trim() || !imageFile) {
      setError("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("price", price);
    formData.append("category", category.trim());
    formData.append("image", imageFile);

    try {
      const res = await fetch("/admin/api/products", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add product.");

      alert("✅ Product added successfully!");
      setName("");
      setPrice("");
      setCategory("");
      setImageFile(null);
      setPreview(null);
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Add New Product</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product Name *</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Price ($) *</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            min={0}
            step="0.01"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Category *</label>
          <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Custom File Upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product Image *</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => document.getElementById("fileInput")?.click()}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
            >
              Choose Image
            </button>
            <span className="text-gray-600">{imageFile?.name || "No file selected"}</span>
          </div>

          {/* Preview */}
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 h-40 w-40 object-cover rounded-lg border"
            />
          ) : (
            <div className="mt-3 h-40 w-40 flex items-center justify-center border rounded-lg text-gray-400">
              Image Preview
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
