// src/components/sections/komunitasSection.tsx
import React from "react";
import { komunitasDesa } from "@/data"; // Sesuaikan path import jika berbeda

export default function KomunitasSection() {
  return (
    // Tambahkan id="komunitas" agar bisa di-link dari Navbar
    <section id="komunitas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e3b2b] mb-4">
            Komunitas Padukuhan Petet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai paguyuban dan organisasi kemasyarakatan yang menjadi pilar
            penggerak kerukunan, kesejahteraan, dan kemajuan desa.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {komunitasDesa.map((komunitas, index) => {
            const IconComponent = komunitas.icon;

            return (
              <div
                key={index}
                className="bg-[#F7F7F2] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${komunitas.bg} transition-transform group-hover:scale-110`}
                >
                  <IconComponent className={`w-7 h-7 ${komunitas.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {komunitas.nama}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {komunitas.deskripsi}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
