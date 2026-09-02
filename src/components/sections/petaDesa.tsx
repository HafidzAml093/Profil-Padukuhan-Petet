// src/components/sections/petaDesa.tsx
"use client";
import React from "react";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[50vh] flex items-center justify-center bg-gray-200 text-gray-500 rounded-xl">
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
            Klik ikon pada peta untuk melihat detail lokasi dan informasi kontak
            UMKM.
          </p>
        </div>

        {/* Kontainer Utama - Aspek rasio dihapus agar tidak memotong legenda */}
        <div className="w-full">
          <MapWithNoSSR />
        </div>
      </div>
    </section>
  );
}
