// src/components/sections/JendelaUMKM.tsx
"use client";

import React, { useState } from "react";
import { dataJendelaUMKM } from "@/data";
import {
  Clock,
  MapPin,
  Phone,
  Tag,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Helper: ambil digit dari field contact untuk bikin link wa.me
// Kalau contact-nya nama orang (bukan nomor), tombol tetap muncul tapi mengarah ke "#"
function getWhatsAppLink(contact: string): string | null {
  const digits = contact.replace(/[^0-9]/g, "");
  if (digits.length < 8) return null;
  const normalized = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  return `https://wa.me/${normalized}`;
}

export default function JendelaUMKM() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const activeUMKM = dataJendelaUMKM[activeIndex];
  const waLink = getWhatsAppLink(activeUMKM.contact);

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    setIsVisible(false);
    setTimeout(() => {
      setActiveIndex(idx);
      setIsVisible(true);
    }, 150);
  };

  return (
    <section id="umkm-petet" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3 block">
          Ekonomi Warga
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3b2b] mb-4">
          Jendela UMKM Petet
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Jelajahi potensi penggerak ekonomi warga. Temukan dedikasi, keahlian
          tangan, dan cita rasa autentik dari para pelaku usaha lokal Padukuhan
          Petet.
        </p>

        {/* Grid Pilihan UMKM */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {dataJendelaUMKM.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(idx)}
                aria-pressed={isActive}
                className={`group p-6 rounded-2xl text-center transition-all duration-300 border-2 ${
                  isActive
                    ? "bg-[#1e3b2b] border-[#1e3b2b] shadow-lg -translate-y-1.5"
                    : "bg-[#F7F7F2] border-transparent hover:bg-[#EFEFE6] hover:-translate-y-1 hover:border-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-amber-500/20"
                      : "bg-white group-hover:bg-amber-50"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      isActive
                        ? "text-amber-400"
                        : "text-gray-500 group-hover:text-amber-600"
                    }`}
                  />
                </div>
                <h4
                  className={`font-bold mb-1 leading-tight text-sm md:text-base ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </h4>
                <p
                  className={`text-xs ${
                    isActive ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {item.shortDesc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Panel Detail UMKM Dinamis */}
        <div className="bg-[#F7F7F2] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 inline-block bg-amber-50 px-3 py-1 rounded-full">
                {activeUMKM.category}
              </span>
              <h3 className="text-3xl font-serif text-gray-900 mt-4 mb-4 leading-snug">
                {activeUMKM.fullTitle}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {activeUMKM.fullDesc}
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">Lokasi</h5>
                    <p className="text-sm text-gray-600">
                      {activeUMKM.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">
                      Jadwal & Layanan
                    </h5>
                    <p className="text-sm text-gray-600">{activeUMKM.hours}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">Kontak</h5>
                    <p className="text-sm text-gray-600">
                      {activeUMKM.contact}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Tag className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">
                      Info Harga
                    </h5>
                    <p className="text-sm text-gray-600 font-medium">
                      {activeUMKM.price}
                    </p>
                  </div>
                </div>
              </div>

              {waLink ? (
                <Link
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1e3b2b] text-white px-6 py-3 rounded-full hover:bg-[#2c533e] transition font-medium text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Hubungi via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-500 px-6 py-3 rounded-full font-medium text-sm cursor-not-allowed">
                  <Phone className="w-4 h-4" />
                  {activeUMKM.contact}
                </span>
              )}
            </div>

            {/* Galeri Visual - bento style */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-100">
              {/* Foto utama */}
              <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group bg-gray-100">
                <Image
                  src={activeUMKM.mainImage}
                  alt={`Foto utama ${activeUMKM.name}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={activeIndex === 0}
                />
              </div>

              {/* Foto galeri (2 foto) */}
              {activeUMKM.gallery.map((src, i) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden relative group bg-gray-100"
                >
                  <Image
                    src={src}
                    alt={`Foto ${i + 1} ${activeUMKM.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
