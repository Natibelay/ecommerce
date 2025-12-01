"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// FaShoppingCart → cart icon, FaUser → user/login icon, FaSearch → search icon inside the input field imported from react librry npm...
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
// FiMenu → hamburger menu icon (menu closed), FiX → close icon (menu open)
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  // State to toggle mobile menu
  const [open, setOpen] = useState(false);
  // State to store search input
  const [search, setSearch] = useState("");

  // Navigation links
  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/admin/products" },
  ];

  return (
    <nav className="sticky top-0 z-20 bg-white shadow-md">
      {/* Main container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="relative w-32 h-10">
          <Image src="/imag.png" alt="Logo" fill style={{ objectFit: "contain" }} />
        </Link>

        {/* Desktop Menu + Search */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Navigation Links */}
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Icons + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link href="/cart" className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-110 transition">
            <FaShoppingCart />
          </Link>

          {/* User Icon */}
          <Link href="/signin" className="p-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white hover:scale-110 transition">
            <FaUser />
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <div className="flex flex-col space-y-2 p-4">
            {/* Mobile navigation links */}
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)} // Close menu on click
                className="block px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-purple-400 hover:to-pink-400 transition"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile search bar */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
