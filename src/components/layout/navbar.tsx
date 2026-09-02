"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#", label: "History" },
  { href: "#", label: "Culture" },
  { href: "#umkm-petet", label: "UMKM" },
  { href: "#peta-umkm", label: "Map" },
  { href: "#komunitas", label: "Komunitas" },
];

const socials = [
  { href: "https://instagram.com/...", icon: FaInstagram, label: "Instagram" },
  { href: "https://wa.me/62...", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://facebook.com/...", icon: FaFacebook, label: "Facebook" },
  { href: "https://tiktok.com/...", icon: FaTiktok, label: "TikTok" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F7F2]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex md:grid md:grid-cols-3 items-center h-20">
          {/* Logo: center absolute di mobile, statis di desktop (kolom kiri) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-[#1e3b2b]">
              Padukuhan Petet
            </span>
          </div>

          {/* Menu tengah - desktop only */}
          <div className="hidden md:flex justify-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-[#1e3b2b]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* IG kanan - desktop only */}
          <div className="hidden md:flex items-center justify-end gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-[#1e3b2b]"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>

          {/* Hamburger - mobile only, otomatis nempel kanan karena ml-auto */}
          <button
            className="md:hidden ml-auto z-10 text-[#1e3b2b]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#F7F7F2] border-t border-gray-200 px-4 py-4 flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-[#1e3b2b]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#"
            className="text-gray-600 hover:text-[#1e3b2b] flex items-center gap-2"
          >
            <FaInstagram size={20} /> Instagram
          </a>
        </div>
      )}
    </nav>
  );
}
