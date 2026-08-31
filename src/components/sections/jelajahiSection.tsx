// src/components/sections/JendelaUMKM.tsx
"use client";

import React, { useState } from "react";
import { dataJendelaUMKM } from "@/data";
import { Clock, MapPin, Phone, Tag } from "lucide-react";

export default function JendelaUMKM() {
  // State untuk melacak UMKM mana yang sedang dipilih. Default ke item pertama (index 0).
  const [activeIndex, setActiveIndex] = useState(0);

  // Mengambil data spesifik dari UMKM yang sedang aktif
  const activeUMKM = dataJendelaUMKM[activeIndex];

  return (
    <section className="py-20 px-4 bg-white" id="jendela-umkm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-[#1e3b2b] mb-4">
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
            // Logika untuk menandai kartu yang sedang aktif
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-6 rounded-2xl text-center transition-all cursor-pointer border-2 ${
                  isActive
                    ? "bg-[#EFEFE6] border-amber-600 shadow-md transform -translate-y-1"
                    : "bg-[#F7F7F2] border-transparent hover:bg-[#EFEFE6] hover:border-gray-200"
                }`}
              >
                <item.icon
                  className={`w-8 h-8 mx-auto mb-4 ${isActive ? "text-amber-600" : "text-gray-500"}`}
                />
                <h4 className="font-bold text-gray-900 mb-1 leading-tight">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">{item.shortDesc}</p>
              </div>
            );
          })}
        </div>

        {/* Panel Detail UMKM Dinamis */}
        <div className="bg-[#F7F7F2] rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center shadow-sm border border-gray-100 transition-all duration-500">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 block">
              {activeUMKM.category}
            </span>
            <h3 className="text-3xl font-serif text-gray-900 mb-4 leading-snug">
              {activeUMKM.fullTitle}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {activeUMKM.fullDesc}
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-sm text-gray-900">Lokasi</h5>
                  <p className="text-sm text-gray-600">{activeUMKM.location}</p>
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
                  <p className="text-sm text-gray-600">{activeUMKM.contact}</p>
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
          </div>

          {/* Galeri Visual (Bisa diganti dengan gambar asli nanti) */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-300 aspect-square rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden relative group"
              >
                {/* Ganti div ini dengan komponen <Image /> dari Next.js jika aset foto sudah siap */}
                <span className="text-xs font-semibold z-10 group-hover:scale-110 transition-transform">
                  Foto {activeUMKM.name.split(" ")[0]} {i}
                </span>
                <div className="absolute inset-0 bg-gray-200 opacity-50 group-hover:opacity-10 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
