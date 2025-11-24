// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { id: 1, icon: <FaTwitter />, url: "https://twitter.com" },
    { id: 2, icon: <FaFacebookF />, url: "https://facebook.com" },
    { id: 3, icon: <FaInstagram />, url: "https://instagram.com" },
    { id: 4, icon: <FaGithub />, url: "https://github.com" },
  ];

  const payments = [
    { id: 1, src: "file.svg" },
    { id: 2, src: "file.svg" },
    { id: 3, src: "file.svg" },
    { id: 4, src: "file.svg" },
    { id: 5, src: "file.svg" },
  ];

  return (
    <footer className="w-full bg-blue-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Logo & Socials */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="relative w-32 h-10">
                <Image
                  src="/ima.png" // logo should in public folder
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 mt-4 text-sm">
              We have clothes that suit your style and which you’re proud to wear.
            </p>
            <div className="flex mt-4 space-x-3">
              {socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  className="bg-white hover:bg-black hover:text-white transition-all w-8 h-8 rounded-full flex items-center justify-center border border-gray-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Optional Links */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-2">Shop</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><Link href="/shop#men">Men</Link></li>
                <li><Link href="/shop#women">Women</Link></li>
                <li><Link href="/shop#kids">Kids</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><Link href="/about">Our Story</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payments & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} my ecommerce. Designed by Nati.
          </p>
          <div className="flex space-x-3">
            {payments.map((p) => (
              <span key={p.id} className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-300">
                <Image src={p.src} alt="Payment" width={40} height={24} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
