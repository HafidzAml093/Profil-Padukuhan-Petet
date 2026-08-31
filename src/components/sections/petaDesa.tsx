"use client";
import React from "react";
import dynamic from "next/dynamic";

// Memuat MapClient secara dinamis, mematikan SSR (Server-Side Rendering)
const MapWithNoSSR = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
      Memuat Peta Desa...
    </div>
  ),
});

export default function PetaDesa() {
  return (
    <section id="peta-umkm" className="py-16 bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1e3b2b]">
            Peta UMKM Padukuhan Petet
          </h2>
          <p className="text-gray-600 mt-2">
            Geser dan perbesar peta untuk melihat lokasi detail serta informasi
            kontak UMKM kami.
          </p>
        </div>

        {/* Kontainer Peta */}
        <div className="relative w-full aspect-4/3 md:aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-2xl border border-gray-300 z-0">
          <MapWithNoSSR />
        </div>
      </div>
    </section>
  );
}
